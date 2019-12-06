import { RouteConfig } from "vue-router";

import { LoginView } from "../../../views/login/LoginView";

export const loginRoute: RouteConfig = {
  name: "login",
  path: "/login",
  component: LoginView
};
