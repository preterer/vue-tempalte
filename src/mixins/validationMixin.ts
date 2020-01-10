import Vue from "vue";
import Component from "vue-class-component";
import { validationMixin } from "vuelidate";

/**
 * Validation mixin
 * allows to pass validations as a getter
 *
 * @export
 * @class ValidationMixin
 * @extends {Vue}
 */
@Component({
  mixins: [validationMixin],
  validations: function(this: ValidationMixin) {
    return this.validations;
  }
})
export class ValidationMixin extends Vue {
  /**
   * Validations object
   *
   * @readonly
   * @type {*}
   * @memberof ValidationMixin
   */
  public get validations(): any {
    return {};
  }
}
