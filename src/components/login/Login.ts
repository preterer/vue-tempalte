import Vue from "vue";
import Component from "vue-class-component";

import template from "./Login.html";

@Component({ template })
export class Login extends Vue {
  public test = "Test12345";

  public image =
    "https://img.pakamera.net/i1/1/379/obrazy-i-plakaty-12320957_6788571379.jpg";
}
