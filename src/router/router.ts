import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import routes from "./routes";

export default createRouter({
  history: createWebHashHistory(),
  routes: routes as unknown as RouteRecordRaw[],
});
