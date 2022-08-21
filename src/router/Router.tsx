import { useRoutes } from "hookrouter";
import { Auth } from "../pages/Auth";
import { createStyles } from "@mantine/core";
import React from "react";
import { startChenking } from "../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { AuthState } from "../store/Auth/types";
import { Main } from "../pages/Main";
import { State } from "../store/State/types";
import { Loading } from "../pages/Loading";

const routes = (auth: AuthState) => {
  if (auth.token) {
    return {
      "/*": () => <Main />,
    };
  }
  return {
    "/*": () => <Auth />,
  };
};

export const Router = () => {
  const { classes } = useStyles();
  const { loading } = useSelector((state: { state: State }) => state.state);
  const auth = useSelector((state: { auth: AuthState }) => state.auth);
  const routeResult = useRoutes(routes(auth));
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(startChenking);
  }, [dispatch]);

  if (loading) return <Loading />;
  return <div className={classes.appContainer}>{routeResult}</div>;
};

const useStyles = createStyles((theme) => ({
  appContainer: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.colors.dark[6],
  },
}));
