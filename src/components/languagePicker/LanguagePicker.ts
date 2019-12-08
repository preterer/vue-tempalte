import Vue from "vue";
import Component from "vue-class-component";

import { Locale } from "#/interfaces/locale";
import { config } from "../../config/config";
import template from "./LanguagePicker.html";

/**
 * Language picker component
 *
 * @export
 * @class LanguagePicker
 * @extends {Vue}
 */
@Component({ name: "LanguagePicker", template })
export class LanguagePicker extends Vue {
  /**
   * Is menu visible
   *
   * @type {boolean}
   * @memberof LanguagePicker
   */
  public isMenuVisible: boolean = false;

  /**
   * All application locales list
   *
   * @private
   * @type {Locale[]}
   * @memberof LanguagePicker
   */
  private allLocales: Locale[] = [
    { code: "en", title: "English", svgPath: "/img/en.svg" },
    { code: "pl", title: "Polski", svgPath: "/img/pl.svg" }
  ];

  /**
   * Currently selected locale
   *
   * @readonly
   * @type {(Locale | undefined)}
   * @memberof LanguagePicker
   */
  public get selectedLocale(): Locale | undefined {
    return this.allLocales.find(locale => locale.code === this.$i18n.locale);
  }

  /**
   * Locales available to choose
   *
   * @readonly
   * @type {Locale[]}
   * @memberof LanguagePicker
   */
  public get availableLocales(): Locale[] {
    return this.allLocales.filter(locale => locale.code !== this.$i18n.locale);
  }

  /**
   * Toggles menu display
   *
   * @memberof LanguagePicker
   */
  public toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  public selectLocale(locale: Locale) {
    this.$root.$i18n.locale = locale.code;
    localStorage.setItem(config.localeStorageKey, locale.code);
    this.isMenuVisible = false;
  }
}
