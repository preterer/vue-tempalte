/**
 * Configuration
 *
 * @export
 * @class Config
 */
export class Config {
  public tokenStorageKey: string = process.env.TOKEN_KEY as string;
}

export const config = new Config();
