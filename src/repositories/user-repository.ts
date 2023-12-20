import { apiBaseUrl } from "../utils/costants/apiBaseUrl";
import { authApi } from "../api/authApi";
import { UpdateUserDetailModel } from "../models/UpdateUserDetailModel";
import { UserAddressResponse } from "../models/UserAddress";
import { AxiosResponse } from "axios";

export class UserRepository {
  static getUserInfo() {
    const url = `${apiBaseUrl}/users/userInfo`;
    return authApi.get(url);
  }
  static getUserAddress(): Promise<AxiosResponse<UserAddressResponse>> {
    const url = `${apiBaseUrl}/user/address`;
    return authApi.get(url);
  }
  static updateUserInfo(id: string, newUserInfo: UpdateUserDetailModel) {
    const url = `${apiBaseUrl}/users/${id}`;
    return authApi.put(url, newUserInfo);
  }
}
