import Vue from "vue";
import Component from "vue-class-component";

import { authService } from "../../services/auth.service";
import template from "./Navigation.html";

@Component({ name: "Navigation", template })
export class Navigation extends Vue {
  /**
   * Loggs person out
   *
   * @memberof Navigation
   */
  public logout() {
    authService.logout();
    this.$router.push({ name: "login" });
  }
}
