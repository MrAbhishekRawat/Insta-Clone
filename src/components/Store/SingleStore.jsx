import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthRedux";

const store = configureStore({
  reducer: {
    user : authSlice
  },
});

export default store;