import { useRoutes } from "hookrouter";
import { Auth } from "../pages/Auth";
import { createStyles } from "@mantine/core";

const routes = {
  "/": () => <Auth />,
  "/home": () => <h1>Home</h1>,
};

export const Router = () => {
  const { classes } = useStyles();
  console.log(classes.appContainer);
  const routeResult = useRoutes(routes);
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
