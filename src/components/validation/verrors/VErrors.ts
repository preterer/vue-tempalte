import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Validation } from "vuelidate";

import { ValidationMessages } from "../../../enums/validationMessages.enum";
import template from "./VErrors.html";

@Component({ name: "VErrors", template })
export class VErrors extends Vue {
  /**
   * Validation model
   *
   * @type {(Validation & { [key: string]: boolean })}
   * @memberof VErrors
   */
  @Prop({ required: true, type: Object })
  public model!: Validation & { [key: string]: boolean };

  /**
   * Custom validation messages
   *
   * @type {{ [key: string]: string }}
   * @memberof VErrors
   */
  @Prop({ required: false, type: Object })
  public messages!: { [key: string]: string };

  /**
   * Gets first of the errors to display
   *
   * @readonly
   * @type {(string | undefined)}
   * @memberof VErrors
   */
  public get error(): string | undefined {
    if (!this.model.$invalid) {
      return;
    }
    return Object.keys(this.model)
      .filter(key => !key.startsWith("$") && this.model[key] === false)
      .map(
        key => (this.messages && this.messages[key]) || ValidationMessages[key]
      )[0];
  }
}
