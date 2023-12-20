import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../models/UserModel";
import { UserAddressResponse } from "../models/UserAddress";

interface InitialState {
  user: User | undefined;
  isAdmin: boolean;
  userAddress: UserAddressResponse;
}

const initialState: InitialState = {
  user: undefined,
  isAdmin: false,
  userAddress: undefined,
};

export const userAuthSlice = createSlice({
  name: "userAuthSlice",
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
    setUserAddress: (state, action: PayloadAction<UserAddressResponse>) => {
      return { ...state, userAddress: action.payload };
    },
  },
});

export const { setUser, setUserAddress } = userAuthSlice.actions;
export default userAuthSlice.reducer;
