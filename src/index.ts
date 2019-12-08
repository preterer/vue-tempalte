import Vue from "vue";
import VueI18n from "vue-i18n";
import VueNotification from "vue-notification";
import VueRouter from "vue-router";

import { App } from "./App";
import { Btn } from "./components/btn/Btn";
import { router } from "./router/router";
import { messages } from "./translations/messages";

Vue.config.productionTip = false;

Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(VueNotification);
Vue.component("btn", Btn);

const i18n = new VueI18n({ locale: "en", messages });

new Vue({
  render: h => h(App),
  i18n,
  router
}).$mount("#app");
