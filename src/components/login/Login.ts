import Vue from "vue";
import Component from "vue-class-component";
import { validationMixin } from "vuelidate";

import { Events } from "../../enums/events.enum";
import { LoginData, loginDataValidation } from "../../interfaces/loginData";
import { authService } from "../../services/auth.service";
import { handleError } from "../../services/errorHandler.service";
import { validationService } from "../../services/validation.service";
import template from "./Login.html";

@Component({
  template,
  mixins: [validationMixin],
  validations: { model: loginDataValidation }
})
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
    console.log(":< ", this, this.$v);
    validationService
      .validate(this.$v)
      .then(() => authService.login(this.model))
      .then(() => this.$emit(Events.LOGIN))
      .catch(handleError);
  }
}
