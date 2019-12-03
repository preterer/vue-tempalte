import { required } from "vuelidate/lib/validators";

/**
 * Login data
 *
 * @export
 * @interface LoginData
 */
export interface LoginData {
  /**
   * User login
   *
   * @type {string}
   * @memberof LoginData
   */
  login: string;

  /**
   * User password
   *
   * @type {string}
   * @memberof LoginData
   */
  password: string;
}

export const loginDataValidation = {
  login: { required },
  password: { required }
};
