import { apiBaseUrl } from "../utils/costants/apiBaseUrl";
import { authApi } from "../api/authApi";
import { UpdateUserDetailModel } from "../models/UpdateUserDetailModel";
import { AxiosResponse } from "axios";
import { User } from "../models/UserModel";
import { AddressDeatils, AddressResponse } from "../models/UserAddressModel";

export class UserRepository {
  static getUserInfo(): Promise<AxiosResponse<User>> {
    const url = `${apiBaseUrl}/users/userInfo`;
    return authApi.get(url);
  }
  static getUserAddress(): Promise<AxiosResponse<AddressResponse>> {
    const url = `${apiBaseUrl}/user/address`;
    return authApi.get(url);
  }
  static updateUserInfo(id: string, newUserInfo: UpdateUserDetailModel) {
    const url = `${apiBaseUrl}/users/${id}`;
    return authApi.put(url, newUserInfo);
  }
  static updateUserAddress(newUserAddress: AddressDeatils) {
    const url = `${apiBaseUrl}/user/address?update=true`;
    return authApi.post(url, newUserAddress);
  }
  static createNewUserAddress(newUserAddress: AddressDeatils) {
    const url = `${apiBaseUrl}/user/address`;
    return authApi.post(url, newUserAddress);
  }
}
