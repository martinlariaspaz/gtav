import { AnyAction } from "@reduxjs/toolkit";
import React from "react";
import { apiWithKey, apiWithoutJWT } from "../helpers/api";
import { GenericObject } from "../helpers/forms";
import { endLoading, startLoading } from "./state";

export const loginAction = (body: GenericObject) => {
  return async (dispatch: React.Dispatch<AnyAction>) => {
    startLoading(dispatch);
    const response = await apiWithoutJWT("auth/login", body, "POST");
    const resp = await response.json();
    if (resp.ok) {
      dispatch({
        type: "login",
        payload: {
          email: resp.data.email,
          token: resp.data.token,
          fullName: resp.data.fullName,
        },
      });
      localStorage.setItem(
        "auth",
        JSON.stringify({
          email: resp.data.email,
          token: resp.data.token,
          fullName: resp.data.fullName,
        })
      );
    } else {
      alert("Revisa algunos de los datos");
    }
    endLoading(dispatch);
  };
};

export const registerAction = (body: GenericObject) => {
  return async (dispatch: React.Dispatch<AnyAction>) => {
    startLoading(dispatch);
    const response = await apiWithoutJWT("auth/register", body, "POST");
    const resp = await response.json();
    if (resp.ok) {
      dispatch({
        type: "login",
        payload: {
          email: body.email,
          token: body.token,
          fullName: body.fullName,
        },
      });
      localStorage.setItem(
        "auth",
        JSON.stringify({
          email: resp.email,
          token: resp.token,
          fullName: resp.fullName,
        })
      );
    } else {
      alert("Hubo un problema...");
    }
    endLoading(dispatch);
  };
};

export const startChenking = async (dispatch: React.Dispatch<AnyAction>) => {
  startLoading(dispatch);
  const authSaved = localStorage.getItem("auth") || "{}";
  const auth = JSON.parse(authSaved);
  if (!!Object.keys(auth).length) {
    const response = await apiWithKey("auth/renew", auth.token, {}, "GET");
    const resp = await response?.json();
    if (resp.ok) {
      dispatch({
        type: "login",
        payload: {
          email: auth.email,
          fullName: auth.fullName,
          token: resp.token,
        },
      });
    }
  }
  endLoading(dispatch);
};

export const logoutAction = async (dispatch: React.Dispatch<AnyAction>) => {
  startLoading(dispatch);
  const authSaved = localStorage.getItem("auth") || "{}";
  const auth = JSON.parse(authSaved);
  const response = await apiWithKey("auth/logout", auth.token, {}, "POST");
  const resp = await response?.json();
  if (resp.ok) {
    localStorage.removeItem("auth");
    dispatch({ type: "logout" });
    dispatch({ type: "dashboard-clean" });
  }
  endLoading(dispatch);
};
