import { RouteConfig } from "vue-router";

import { RouteContainer } from "../../components/routeContainer/RouteContainer";
import { loginRoute } from "./unauthorized/login.route";

export const unauthorizedRoute: RouteConfig = {
  path: "/",
  component: RouteContainer,
  children: [loginRoute]
};
