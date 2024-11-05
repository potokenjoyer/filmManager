import FilmPage from "@/pages/FilmPage.vue";

import { AppRouteRecord } from "../types";

export const filmsRoutes = [
  {
    path: "/films",
    name: "films",
    component: FilmPage,
  },
] as const satisfies readonly AppRouteRecord[];
