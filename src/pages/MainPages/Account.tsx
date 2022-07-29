import React, { useEffect } from "react";

import { Text } from "@mantine/core";
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
    console.log(myInfo);
    const initialData = {
      fullName: myInfo.data.fullName,
      birthDate: myInfo.data.birthDate,
      dni: myInfo.data.dni,
      username: myInfo.data.username,
      email: myInfo.data.email,
      password: "",
      password2: "",
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
      <Text variant="text">Mi cuenta</Text>
      <CustomForm
        formName="myAccount"
        onSubmit={handleModifyAccount}
        submitName="Modificar"
        initialData={initialMyAccount}
      />
    </>
  );
};
