import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";

export const reducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
});
