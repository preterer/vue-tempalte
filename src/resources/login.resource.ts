import { Resource } from "@preterer/resource";

import { LoginData } from "#/interfaces/loginData";

/**
 * Login resource
 *
 * @export
 * @class LoginResource
 * @extends {Resource<string>}
 */
export class LoginResource extends Resource<string> {
  /**
   * Loggs user in
   *
   * @param {LoginData} data
   * @returns {Promise<string>}
   * @memberof LoginResource
   */
  public login(data: LoginData): Promise<string> {
    return this.axios.post(this.url, data).then(response => response.data);
  }
}

export const loginResource = new LoginResource("login");
