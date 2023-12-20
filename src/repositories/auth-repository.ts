import { apiBaseUrl } from "../utils/costants/apiBaseUrl";
import { LoginFormModel } from "../models/LoginFormModel";
import { authApi } from "../api/authApi";
import { RegisterFormModel } from "../models/RegisterFormModel";

export class AuthenticationRepository {
  static login({ email, password }: LoginFormModel) {
    const url = `${apiBaseUrl}/auth/login`;
    const loginData = { email, password };
    return authApi.post(url, loginData);
  }
  static register(registerFormValues: RegisterFormModel) {
    const url = `${apiBaseUrl}/auth/register`;
    return authApi.post(url, registerFormValues);
  }
}
