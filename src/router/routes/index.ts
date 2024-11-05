import { AppRouteRecord } from "../types";
import { authRoutes } from "./auth";
import { filmsRoutes } from "./films";

export default [
  ...authRoutes,
  ...filmsRoutes,
] as const satisfies readonly AppRouteRecord[];
