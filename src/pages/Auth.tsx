import React from "react";
import { CustomForm } from "../components/Form/CustomForm";
import { GenericObject } from "../helpers/forms";
import { apiWithoutJWT } from "../helpers/api";
import { Box, createStyles, Tabs } from "@mantine/core";

export const Auth = () => {
  const { classes } = useStyles();
  const [page, setPage] = React.useState(0);

  const handleLogin = async (event: GenericObject) => {
    const response = await apiWithoutJWT("auth/login", event, "POST");
    const resp = await response.json();
    console.log(resp);
  };

  const handleRegister = async (event: GenericObject) => {
    const { password2, ...body } = event;
    const response = await apiWithoutJWT("auth/register", body, "POST");
    console.log(await response.json());
  };

  return (
    <Box className={classes.container}>
      <Tabs active={page} onTabChange={setPage}>
        <Tabs.Tab label="Login"></Tabs.Tab>
        <Tabs.Tab label="Register"></Tabs.Tab>
      </Tabs>
      {page === 0 ? (
        <CustomForm
          form={"login"}
          onSubmit={handleLogin}
          key={`${page}--form`}
        />
      ) : (
        <CustomForm
          form={"register"}
          onSubmit={handleRegister}
          key={`${page}--form`}
        />
      )}
    </Box>
  );
};

const useStyles = createStyles((theme) => ({
  container: {
    margin: "auto",
    backgroundColor: theme.colors.gray[0],
    padding: "8px 5px",
  },
}));
