/**
 * Configuration
 *
 * @export
 * @class Config
 */
export class Config {
  /**
   * localStorage token key
   *
   * @type {string}
   * @memberof Config
   */
  public tokenStorageKey: string = process.env.TOKEN_KEY as string;

  /**
   * localStorage locale key
   *
   * @type {string}
   * @memberof Config
   */
  public localeStorageKey: string = process.env.LOCALE_KEY as string;

  /**
   * default locale setting
   *
   * @type {string}
   * @memberof Config
   */
  public defaultLocale: string = process.env.DEFAULT_LOCALE as string;
}

export const config = new Config();
