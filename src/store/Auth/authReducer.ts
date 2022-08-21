import { AnyAction } from "@reduxjs/toolkit";
import { AuthState } from "./types";

const INITIAL_STATE = {
  email: "",
  fullName: "",
  token: "",
};

export const authReducer = (
  state: AuthState = INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case "login":
      return {
        email: action.payload.email,
        fullName: action.payload.fullName,
        token: action.payload.token,
      };
    case "logout":
      return INITIAL_STATE;
    case "renewToken":
      return { ...state, token: action.payload.token };
    default:
      return state;
  }
};
