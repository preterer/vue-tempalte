import { RouteConfig } from "vue-router";

import { authService } from "../../services/auth.service";
import { Main } from "../../views/main/Main";
import { fundraisersRoute } from "./fundraiser/fundraisers.route";

export const mainRoute: RouteConfig = {
  name: "home",
  path: "/",
  component: Main,
  children: [fundraisersRoute],
  redirect: { name: "fundraisers" },
  beforeEnter: (to, from, next) => {
    if (!authService.isAuthorized) {
      return next({ name: "login" });
    }
    next();
  }
};
