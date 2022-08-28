import { AnyAction } from "@reduxjs/toolkit";
import { DashboardState } from "./types";

const INITIAL_STATE: DashboardState = {
  user: {
    fullName: "",
    email: "",
    dni: "",
    birthDate: "",
    username: "",
  },
  database: [],
  loading: false,
};

export const dashboardReducer = (
  state: DashboardState = INITIAL_STATE,
  action: AnyAction
): DashboardState => {
  switch (action.type) {
    case "dashboard-init": {
      return action.payload;
    }
    case "dashboard-clean": {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};
