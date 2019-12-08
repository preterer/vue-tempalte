import Vue from "vue";
import Component from "vue-class-component";

import { Locale } from "#/interfaces/locale";
import { config } from "../../config/config";
import template from "./LanguagePicker.html";

@Component({ name: "LanguagePicker", template })
export class LanguagePicker extends Vue {
  public showMenu: boolean = false;

  private allLocales: Locale[] = [
    { code: "en", title: "English", svgPath: "/img/en.svg" },
    { code: "pl", title: "Polski", svgPath: "/img/pl.svg" }
  ];

  public get selectedLocale(): Locale | undefined {
    return this.allLocales.find(locale => locale.code === this.$i18n.locale);
  }

  public get availableLocales(): Locale[] {
    return this.allLocales.filter(locale => locale.code !== this.$i18n.locale);
  }

  public toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  public selectLocale(locale: Locale) {
    this.$root.$i18n.locale = locale.code;
    localStorage.setItem(config.localeStorageKey, locale.code);
    this.showMenu = false;
  }
}
