import Vue from "vue";
import VueNotification from "vue-notification";
import VueRouter from "vue-router";

import { App } from "./App";
import { Btn } from "./components/btn/Btn";
import { router } from "./router/router";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueNotification);
Vue.component("btn", Btn);

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
