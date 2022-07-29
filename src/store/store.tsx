import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Auth/authReducer";
import { stateReducer } from "./State/stateReducer";

export const store = configureStore({
  reducer: { auth: authReducer, state: stateReducer },
});
