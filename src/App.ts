import Vue from "vue";
import Component from "vue-class-component";

import template from "./App.html";
import { LanguagePicker } from "./components/languagePicker/LanguagePicker";

@Component({
  name: "app",
  template: template,
  components: { LanguagePicker }
})
export class App extends Vue {}
