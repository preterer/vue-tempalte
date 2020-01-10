import VueRouter from "vue-router";

import { mainRoute } from "./routes/main.route";
import { unauthorizedRoute } from "./routes/unauthorized.route";

export const routes = [mainRoute, unauthorizedRoute];

export const router = new VueRouter({ routes });
