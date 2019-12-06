import { Validation } from "vuelidate";

import { Errors } from "../enums/errors.enum";

/**
 * Validation service
 *
 * @export
 * @class ValidationService
 */
export class ValidationService {
  /**
   * Validates form
   *
   * @param {Validation} vuelidateInstance
   * @returns {Promise<void>}
   * @memberof ValidationService
   */
  validate(vuelidateInstance: Validation): Promise<void> {
    vuelidateInstance.$touch();
    if (vuelidateInstance.$invalid) {
      return Promise.reject(new Error(Errors.VALIDATION_ERROR));
    }
    return Promise.resolve();
  }
}

export const validationService = new ValidationService();
