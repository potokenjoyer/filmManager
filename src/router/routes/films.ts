import MainPage from "@/pages/MainPage.vue";
import { AppRouteRecord } from "../types";

export const filmsRoutes = [
  {
    path: "/films",
    name: "films",
    component: MainPage,
  },
] as const satisfies readonly AppRouteRecord[];
