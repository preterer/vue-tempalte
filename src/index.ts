import Vue from "vue";
import VueI18n from "vue-i18n";
import VueNotification from "vue-notification";
import VueRouter from "vue-router";

import { App } from "./App";
import { Btn } from "./components/btn/Btn";
import { config } from "./config/config";
import { router } from "./router/router";
import { messages } from "./translations/messages";

Vue.config.productionTip = false;

Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(VueNotification);
Vue.component("btn", Btn);

console.log(
  "?",
  localStorage.getItem(config.localeStorageKey),
  config.defaultLocale
);

const i18n = new VueI18n({
  locale: localStorage.getItem(config.localeStorageKey) || config.defaultLocale,
  messages
});

new Vue({
  render: h => h(App),
  i18n,
  router
}).$mount("#app");
