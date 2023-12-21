import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../models/UserModel";
import { AddressResponse } from "../models/UserAddressModel";

interface InitialState {
  user: User;
  isAdmin: boolean;
  userAddress: AddressResponse;
}

const initialState: InitialState = {
  user: undefined,
  isAdmin: false,
  userAddress: undefined,
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
  },
});

export const { setUser, setUserAddress } = userAuthSlice.actions;
export default userAuthSlice.reducer;
