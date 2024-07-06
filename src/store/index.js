import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import loginReducer from "../features/loginState/loginState"
export default configureStore({
  reducer: {
    counter: counterReducer,
    loginState : loginReducer
  },
});
