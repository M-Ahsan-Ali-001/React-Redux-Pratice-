import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    dec: (state) => {
      state.value -= 1;
    },
    incBA: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, dec,incBA } = counterSlice.actions;
export default counterSlice.reducer;
