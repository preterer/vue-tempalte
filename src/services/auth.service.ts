import { LoginData } from "#/interfaces/loginData";
import { config } from "../config/config";
import { loginResource } from "../resources/login.resource";

/**
 * Authentication service
 *
 * @class AuthService
 */
export class AuthService {
  /**
   * User token getter
   *
   * @readonly
   * @type {(string | null)}
   * @memberof AuthService
   */
  public get token(): string | null {
    return localStorage.getItem(config.tokenStorageKey);
  }

  /**
   * Is user authorized
   *
   * @readonly
   * @type {boolean}
   * @memberof AuthService
   */
  public get isAuthorized(): boolean {
    return !!this.token;
  }

  /**
   * Loggs user in
   *
   * @param {LoginData} loginData
   * @returns {Promise<void>}
   * @memberof AuthService
   */
  public login(loginData: LoginData): Promise<void> {
    return loginResource
      .login(loginData)
      .then(response => this.saveToken(response));
  }

  /**
   * Loggs user out
   *
   * @memberof AuthService
   */
  public logout(): void {
    localStorage.removeItem(config.tokenStorageKey);
  }

  /**
   * Saves user token
   *
   * @private
   * @param {string} token
   * @memberof AuthService
   */
  private saveToken(token: string): void {
    localStorage.setItem(config.tokenStorageKey, token);
  }
}

export const authService = new AuthService();
