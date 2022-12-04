import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "../features/loginData/loginSlice";
import logger from 'redux-logger'
export const store = configureStore({
  reducer: {
    loginData: loginReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});