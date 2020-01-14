import Vue from "vue";
import Component from "vue-class-component";

import template from "./App.html";
import { LanguagePicker } from "./components/languagePicker/LanguagePicker";
import { Navigation } from "./components/navigation/Navigation";
import { authService } from "./services/auth.service";

@Component({
  name: "app",
  template: template,
  components: { LanguagePicker, Navigation }
})
export class App extends Vue {
  /**
   * Auth service
   *
   * @memberof App
   */
  public authService = authService;
}
