import { AnyAction } from "@reduxjs/toolkit";
import { State } from "./types";

const INITIAL_STATE = { loading: false };

export const stateReducer = (
  state: State = INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case "start-loading":
      return { ...state, loading: true };
    case "end-loading":
      return { ...state, loading: false };
    default:
      return state;
  }
};
