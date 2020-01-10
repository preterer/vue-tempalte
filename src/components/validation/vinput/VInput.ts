import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Validation } from "vuelidate";

import { VErrors } from "../verrors/VErrors";
import template from "./VInput.html";

@Component({
  name: "VInput",
  template,
  inheritAttrs: false,
  components: { VErrors }
})
export class VInput extends Vue {
  /**
   * Data model
   *
   * @type {*}
   * @memberof VInput
   */
  @Prop({ required: true, type: Object })
  public model!: Validation;

  /**
   * Input title
   *
   * @type {string}
   * @memberof VInput
   */
  @Prop({ required: false, type: String })
  public title?: string;

  /**
   * Custom validation messages
   *
   * @type {{ [key: string]: string }}
   * @memberof VInput
   */
  @Prop({ required: false, type: Object })
  public messages?: { [key: string]: string };

  /**
   * Is field touched
   *
   * @type {boolean}
   * @memberof VInput
   */
  public touched: boolean = false;

  /**
   * Error class getter
   *
   * @readonly
   * @type {(string | undefined)}
   * @memberof VInput
   */
  public get errorClass(): string | undefined {
    if (this.model.$invalid && (this.touched || this.model.$dirty)) {
      return "error";
    }
    return;
  }

  /**
   * Marks field as touched
   *
   * @memberof VInput
   */
  public touch() {
    this.touched = true;
  }
}
