import Vue from "vue";
import Component from "vue-class-component";

import { Login } from "../../components/login/Login";
import template from "./LoginView.html";

/**
 * Login view
 *
 * @export
 * @class Login
 * @extends {Vue}
 */
@Component({ name: "LoginView", template, components: { Login } })
export class LoginView extends Vue {
  /**
   * Redirects to home screen
   *
   * @memberof Login
   */
  public redirectHome() {
    this.$router.push({ name: "fundraisers" });
  }
}
