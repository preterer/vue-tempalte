import Vue from "vue";
import Component from "vue-class-component";

import { Login as LoginComponent } from "../../components/login/Login";
import template from "./Login.html";

@Component({ name: "Login", template, components: { LoginComponent } })
export class Login extends Vue {
  /**
   * Redirects to home screen
   *
   * @memberof Login
   */
  public redirectHome() {
    this.$router.push({ name: "home" });
  }
}
