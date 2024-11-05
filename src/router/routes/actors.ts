import Actors from "@/pages/Actors.vue";
import { AppRouteRecord } from "../types";

export const actorsRoutes = [
  {
    path: "/actors",
    name: "actors",
    component: Actors,
  },
] as const satisfies readonly AppRouteRecord[];
