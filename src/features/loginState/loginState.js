import { createSlice } from "@reduxjs/toolkit";

export const loginState = createSlice({
  name: "loginState",
  initialState: {
    loginStatis: "false",
    id: null,
  },

  reducers: {
    login: (state) => {
      state.loginStatis = "true";
    },

    logout: (state) => {
      state.loginStatis = "false";
    },

    setId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { login, logout, setId } = loginState.actions;
export default loginState.reducer;
