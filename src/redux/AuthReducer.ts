import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../models/UserModel";
import { AddressResponse } from "../models/UserAddressModel";

interface InitialState {
  user: User;
  isAdmin: boolean;
  userAddress: AddressResponse;
  isEditingUserInfo: boolean;
  isEditingUserAddress: boolean;
}

const initialState: InitialState = {
  user: undefined,
  isAdmin: false,
  userAddress: undefined,
  isEditingUserInfo: false,
  isEditingUserAddress: false,
};

export const userAuthSlice = createSlice({
  name: "userAuthSliceUserAddress",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      if (action.payload?.isAdmin === true) {
        return {
          ...state,
          user: action.payload,
          isAdmin: action.payload.isAdmin,
        };
      }
      return { ...state, user: action.payload };
    },
    setUserAddress: (state, action: PayloadAction<AddressResponse>) => {
      if (action.payload !== undefined) {
        return {
          ...state,
          userAddress: { address: action.payload.address },
        };
      }
    },
    setIsEditingUserInfo: (state, action: PayloadAction<boolean>) => {
      return { ...state, isEditingUserInfo: action.payload };
    },
    setIsEditingUserAddress: (state, action: PayloadAction<boolean>) => {
      return { ...state, isEditingUserAddress: action.payload };
    },
  },
});

export const {
  setUser,
  setUserAddress,
  setIsEditingUserInfo,
  setIsEditingUserAddress,
} = userAuthSlice.actions;
export default userAuthSlice.reducer;
