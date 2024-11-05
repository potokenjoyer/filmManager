import { AppRouteRecord } from "../types";
import { authRoutes } from "./auth";
import { filmsRoutes } from "./films";
import { genreRoutes } from "./genres";
import { actorsRoutes } from "./actors";

export default [
  ...authRoutes,
  ...filmsRoutes,
  ...genreRoutes,
  ...actorsRoutes,  
] as const satisfies readonly AppRouteRecord[];
