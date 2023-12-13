import axios from "axios";
import { apiBaseUrl } from "../utils/costants/apiBaseUrl";
import { LoginFormModel } from "../models/LoginFormModel";

export class AuthenticationReposirory {
  static login({ email, password }: LoginFormModel) {
    const url = `${apiBaseUrl}/api/auth/login`;
    const headers = {
      "Content-Type": "application/json",
    };
    const loginData = { email, password };
    return axios.post(url, loginData, { headers });
  }
}
