import VueRouter from "vue-router";

import { homeRoute } from "./routes/home.route";

export const routes = [homeRoute];

export const router = new VueRouter({ routes });
