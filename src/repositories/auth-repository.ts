import { apiBaseUrl } from "../utils/costants/apiBaseUrl";
import { LoginFormModel } from "../models/LoginFormModel";
import { authApi } from "../api/authApi";
import { RegisterFormModel } from "../models/RegisterFormModel";

export class AuthenticationRepository {
  static login({ email, password }: LoginFormModel) {
    const url = `${apiBaseUrl}/auth/login`;
    const headers = {
      "Content-Type": "application/json",
    };
    const loginData = { email, password };
    return authApi.post(url, loginData, { headers });
  }
  static register(registerFormValues: RegisterFormModel) {
    const url = `${apiBaseUrl}/auth/register`;
    const headers = {
      "Content-Type": "application/json",
    };
    return authApi.post(url, registerFormValues, { headers });
  }
}
