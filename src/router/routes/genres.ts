import Genres from "@/pages/Genres.vue";

import { AppRouteRecord } from "../types";

export const genreRoutes = [
    {
      path: "/genres",
      name: "genres",
      component: Genres,
    },
  ] as const satisfies readonly AppRouteRecord[];