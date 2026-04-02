import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LoginUserData {
  identifier: string;
  password: string;
}

interface LoginSlice {
  loginUserData: LoginUserData;
}

const initialState: LoginSlice = {
  loginUserData: {
    identifier: "",
    password: "",
  },
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUserDataLogin: (
      state,
      action: PayloadAction<Partial<LoginUserData>>,
    ) => {
      state.loginUserData = { ...state.loginUserData, ...action.payload };
    },
  },
});

export const { setUserDataLogin } = loginSlice.actions;

export default loginSlice.reducer;
