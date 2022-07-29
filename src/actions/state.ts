import { AnyAction } from "@reduxjs/toolkit";

export const startLoading = (dispatch: React.Dispatch<AnyAction>) => {
  dispatch({ type: "start-loading" });
};

export const endLoading = (dispatch: React.Dispatch<AnyAction>) => {
  dispatch({ type: "end-loading" });
};
