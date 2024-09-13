import { RootState } from "@/redux/store";
import { TAuth } from "@/types/TAuth";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TAuth = {
  accessToken: "",
  user: {
    _id: "",
    name: "",
    phone: "",
    address: "",
    email: "",
    role: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveToAuth: (state, action) => {
      const { token, data } = action.payload;
      state.user = data;
      state.accessToken = token;
    },
    logOut: () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      return initialState;
    },
  },
});

export const { saveToAuth, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectAuth = (state: RootState) => state.auth;