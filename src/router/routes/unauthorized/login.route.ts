import { RouteConfig } from "vue-router";

import { Login } from "../../../views/login/Login";

export const loginRoute: RouteConfig = {
  name: "login",
  path: "/login",
  component: Login
};
