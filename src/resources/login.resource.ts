import { Resource } from "@preterer/resource";

import { LoginData } from "#/interfaces/loginData";

export class LoginResource extends Resource<string> {
  public login(data: LoginData): Promise<string> {
    return this.axios.post(this.url, data).then(response => response.data);
  }
}

export const loginResource = new LoginResource("login");
