import { RouteConfig } from "vue-router";

import { RouteContainer } from "../../../components/routeContainer/RouteContainer";
import { fundraisersListRoute } from "./fundraisersList.route";

export const fundraisersRoute: RouteConfig = {
  name: "fundraisers",
  path: "fundraiser",
  component: RouteContainer,
  redirect: { name: "fundraisersList" },
  children: [fundraisersListRoute]
};
