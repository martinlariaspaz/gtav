import React from "react";
import { CustomForm } from "../components/Form/CustomForm";
import { GenericObject } from "../helpers/forms";
import { Box, createStyles, Tabs } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, registerAction } from "../actions/auth";
import { State } from "../store/State/types";

export const Auth = () => {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const loading = useSelector((state: { state: State }) => state.state.loading);
  const [page, setPage] = React.useState(0);

  const handleLogin = async (values: GenericObject) => {
    dispatch(loginAction(values));
  };

  const handleRegister = async (values: GenericObject) => {
    const { password2, ...body } = values;
    dispatch(registerAction(body));
  };

  return (
    <Box className={classes.container}>
      <Tabs active={page} onTabChange={setPage} className={classes.tab}>
        <Tabs.Tab
          label="Login"
          className={classes.tabChildren}
          disabled={loading}
        ></Tabs.Tab>
        <Tabs.Tab
          label="Register"
          className={classes.tabChildren}
          disabled={loading}
        ></Tabs.Tab>
      </Tabs>
      {page === 0 ? (
        <CustomForm
          formName={"login"}
          onSubmit={handleLogin}
          key={`${page}--form`}
          submitName="Ingresar"
          loading={loading}
        />
      ) : (
        <CustomForm
          formName={"register"}
          onSubmit={handleRegister}
          key={`${page}--form`}
          submitName="Registrar"
          loading={loading}
        />
      )}
    </Box>
  );
};

const useStyles = createStyles((theme) => ({
  container: {
    margin: "auto",
    maxHeight: "480px",
    width: "320px",
    backgroundColor: theme.colors.gray[0],
    padding: "8px 20px",
    boxShadow: "2px 2px 10px white",
  },
  tab: {
    width: "100%",
  },
  tabChildren: {
    width: "50%",
  },
}));
