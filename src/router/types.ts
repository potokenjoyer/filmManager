import { RouteRecordRaw } from 'vue-router';

export type AppRouteRecord = Omit<RouteRecordRaw, 'name' | 'children'> & {
  name: string;
  children?: readonly AppRouteRecord[];
};

type GetRouteData<T extends AppRouteRecord> = T extends { children: readonly AppRouteRecord[] }
  ? { name: T['name']; params: { [Key in ExtractRouteParams<T['path']>]: string } } | GetRoutesData<T['children']>
  : { name: T['name']; params: { [Key in ExtractRouteParams<T['path']>]: string } };

type ExtractRouteParamsDeep<T extends string> = T extends `${infer Any}:${infer Param}/${infer Rest}` ? Param : T extends `${infer Any}:${infer Param}` ? Param : never;

type ExtractRouteParams<T extends string> = T extends `${infer _Start}/${infer Any}:${infer Param}/${infer Rest}`
  ? Param | ExtractRouteParamsDeep<Rest>
  : T extends `${infer _Start}/:${infer Param}`
  ? Param
  : never;
export type GetRoutesData<T extends readonly AppRouteRecord[]> = GetRouteData<T[number]>;