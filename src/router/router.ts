import VueRouter from "vue-router";

import { homeRoute } from "./routes/home.route";
import { unauthorizedRoute } from "./routes/unauthorized.route";

export const routes = [homeRoute, unauthorizedRoute];

export const router = new VueRouter({ routes });
