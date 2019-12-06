import Component, { mixins } from "vue-class-component";

import { Events } from "../../enums/events.enum";
import { LoginData, loginDataValidation } from "../../interfaces/loginData";
import { ValidationMixin } from "../../mixins/validationMixin";
import { authService } from "../../services/auth.service";
import { handleError } from "../../services/errorHandler.service";
import { validationService } from "../../services/validation.service";
import { VInput } from "../validation/vinput/VInput";
import template from "./Login.html";

@Component({ components: { VInput }, template })
export class Login extends mixins(ValidationMixin) {
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
   * Validation model
   *
   * @readonly
   * @memberof Login
   */
  public get validations() {
    return { model: loginDataValidation };
  }

  /**
   * Loggs person in
   *
   * @memberof Login
   */
  public login() {
    validationService
      .validate(this.$v)
      .then(() => authService.login(this.model))
      .then(() => this.$emit(Events.LOGIN))
      .catch(handleError);
  }
}
