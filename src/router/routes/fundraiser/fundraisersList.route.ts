import { RouteConfig } from "vue-router";

import { Fundraisers } from "../../../views/fundraisers/Fundraisers";

export const fundraisersListRoute: RouteConfig = {
  name: "fundraisersList",
  path: "/",
  component: Fundraisers
};
