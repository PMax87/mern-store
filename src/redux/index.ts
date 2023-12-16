import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./authReducer";

export const store = configureStore({
  reducer: {
    userAuth: AuthReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
