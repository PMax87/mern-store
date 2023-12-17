import { apiBaseUrl } from "../utils/costants/apiBaseUrl";
import { authApi } from "../api/authApi";

export class UserRepository {
  static getUserInfo() {
    const url = `${apiBaseUrl}/users/userInfo`;
    const headers = {
      "Content-Type": "application/json",
    };
    return authApi.get(url, { headers });
  }
  static getUserAddress() {
    const url = `${apiBaseUrl}/user/address`;
    const headers = {
      "Content-Type": "application/json",
    };
    return authApi.get(url, { headers });
  }
}
