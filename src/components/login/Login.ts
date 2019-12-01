import Vue from "vue";
import Component from "vue-class-component";

import { loginResource } from "../../resources/login.resource";
import template from "./Login.html";

@Component({ template })
export class Login extends Vue {
  public model = {
    login: "",
    password: ""
  };

  public login() {
    loginResource.login(this.model);
  }
}
