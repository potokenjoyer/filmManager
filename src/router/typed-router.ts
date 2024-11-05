import {
  NavigationFailure,
  RouteLocationNormalizedLoaded,
  RouteLocationRaw,
  Router,
  useRouter as useRouterOriginal,
  useRoute as useRouteOriginal,
} from "vue-router";
import { GetRoutesData } from "./types";
import routes from "./routes";

type RouteData = GetRoutesData<typeof routes>;

type MyRouterParams<T extends RouteData["name"]> = keyof Extract<
  RouteData,
  { name: T }
>["params"] extends never
  ? { name: T; params?: Record<string, any> }
  : { name: T; params: Extract<RouteData, { name: T }>["params"] };

type MyRouter = Omit<Router, "push" | "replace"> & {
  push<T extends RouteData["name"]>(
    to: RouteLocationRaw &
      MyRouterParams<T> & { state?: { openDrawerOnBackLink: boolean } }
  ): Promise<NavigationFailure | void | undefined>;
  replace<T extends RouteData["name"]>(
    to: RouteLocationRaw &
      MyRouterParams<T> & { state?: { openDrawerOnBackLink: boolean } }
  ): Promise<NavigationFailure | void | undefined>;
};

type MyRoute = Omit<RouteLocationNormalizedLoaded, "name"> & {
  name: RouteData["name"];
};

export function useRouter() {
  return useRouterOriginal() as unknown as MyRouter;
}

export function useRoute() {
  return useRouteOriginal() as unknown as MyRoute;
}

import "vue-router";
declare module "vue-router" {
  export interface TypesConfig {
    $router: MyRouter;
    $route: MyRoute;
  }

  interface RouteMeta {
    requiresAuth?: boolean;
    isPageDetail?: boolean;
  }
}
