import { AnyAction } from "@reduxjs/toolkit";
import React from "react";
import { apiWithKey } from "../helpers/api";

export const dashboardInit = (token: string) => async (
  dispatch: React.Dispatch<AnyAction>
) => {
  dispatch({ type: "start-loading" });
  const myselfResponse = await apiWithKey("dashboard/myself", token, {}, "GET");
  const { data: myself, ok: myselfOk } = await myselfResponse.json();
  const dbResponse = await apiWithKey("dashboard/db", token, {}, "GET");
  const db = await dbResponse.json();
  console.log(db.ok, myselfOk);
  if (db.ok && myselfOk)
    dispatch({
      type: "dashboard-init",
      payload: {
        user: {
          fullName: myself.fullName,
          dni: myself.dni,
          email: myself.email,
          birthDate: myself.birthDate,
          username: myself.username,
        },
        database: db.data,
      },
    });
  dispatch({ type: "end-loading" });
};
