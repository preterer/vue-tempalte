import Vue from "vue";
import Component from "vue-class-component";

import template from "./App.html";
import { Login } from "./components/login/Login";

@Component({
  name: "app",
  components: {
    Login
  },
  template: template
})
export class App extends Vue {}
