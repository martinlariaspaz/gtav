import React, { useEffect } from "react";

import { Title } from "@mantine/core";
import { CustomForm } from "../../components/Form/CustomForm";
import { GenericObject } from "../../helpers/forms";
import { apiWithKey } from "../../helpers/api";

export const Account = () => {
  const [loading, setLoading] = React.useState(true);
  const [initialMyAccount, setInitialMyAccount] = React.useState({});
  const handleModifyAccount = async (event: GenericObject) => {
    console.log(event);
  };

  const getMyInfo = async () => {
    const authSaved = localStorage.getItem("auth") || "{}";
    const auth = JSON.parse(authSaved);
    const response = await apiWithKey("dashboard/myself", auth.token);
    const myInfo = await response.json();
    const initialData = {
      fullName: myInfo.data.fullName,
      birthDate: myInfo.data.birthDate,
      dni: myInfo.data.dni,
      username: myInfo.data.username,
      email: myInfo.data.email,
      password: "",
      newPassword: "",
    };
    setInitialMyAccount(initialData);
    setLoading(false);
  };

  useEffect(() => {
    getMyInfo();
  }, []);

  if (loading) return <>Loading...</>;

  return (
    <>
      <Title order={2}>Mi cuenta</Title>
      <CustomForm
        formName="myAccount"
        onSubmit={handleModifyAccount}
        submitName="Modificar"
        initialData={initialMyAccount}
      />
    </>
  );
};
