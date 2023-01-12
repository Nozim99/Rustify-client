import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: Cookies.get("token"),
    signup: false,
    signin: false
  },
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload
    },
    setSignup: (state, { payload }) => {
      state.signup = payload
    },
    setSignin: (state, { payload }) => {
      state.signin = payload
    }
  }
})

export const { setToken, setSignup, setSignin } = userSlice.actions
export default userSlice.reducer