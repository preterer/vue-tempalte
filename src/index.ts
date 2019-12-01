import Vue from "vue";
import VueRouter from "vue-router";

import { App } from "./App";
import { router } from "./router/router";

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
