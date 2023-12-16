import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../models/UserModel";

interface InitialState {
  user: User | undefined;
  isAdmin: boolean;
}

const initialState: InitialState = {
  user: undefined,
  isAdmin: false,
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
  },
});

export const { setUser } = userAuthSlice.actions;
export default userAuthSlice.reducer;
