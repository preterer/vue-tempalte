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
  validations: function() {
    const self = (this as any) as ValidationMixin;
    return self.validations;
  }
})
export class ValidationMixin extends Vue {
  public get validations(): any {
    return {};
  }
}
