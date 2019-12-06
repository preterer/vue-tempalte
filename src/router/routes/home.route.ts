import { RouteConfig } from "vue-router";

import { authService } from "../../services/auth.service";
import { Home } from "../../views/home/Home";

export const homeRoute: RouteConfig = {
  name: "home",
  path: "/",
  component: Home,
  beforeEnter: (to, from, next) => {
    if (!authService.isAuthorized) {
      return next({ name: "login" });
    }
    next();
  }
};
