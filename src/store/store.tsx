import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Auth/authReducer";
import { dashboardReducer } from "./Dashboard/dashboardReducer";
import { stateReducer } from "./State/stateReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    state: stateReducer,
    dashboard: dashboardReducer,
  },
});
