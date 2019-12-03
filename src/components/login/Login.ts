import Vue from "vue";
import Component from "vue-class-component";

import { LoginData } from "#/interfaces/loginData";
import { Events } from "../../enums/events.enum";
import { authService } from "../../services/auth.service";
import template from "./Login.html";

@Component({ template })
export class Login extends Vue {
  /**
   * Login data model
   *
   * @type {LoginData}
   * @memberof Login
   */
  public model: LoginData = {
    login: "",
    password: ""
  };

  /**
   * Loggs person in
   *
   * @memberof Login
   */
  public login() {
    authService.login(this.model).then(() => this.$emit(Events.LOGIN));
  }
}
