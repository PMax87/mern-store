import { apiBaseUrl } from "../utils/costants/apiBaseUrl";
import { LoginFormModel } from "../models/LoginFormModel";
import { authApi } from "../api/authApi";

export class AuthenticationReposirory {
  static login({ email, password }: LoginFormModel) {
    const url = `${apiBaseUrl}/auth/login`;
    const headers = {
      "Content-Type": "application/json",
    };
    const loginData = { email, password };
    return authApi.post(url, loginData, { headers });
  }
}
