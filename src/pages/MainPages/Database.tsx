import React from "react";

import { Title } from "@mantine/core";
import { showNotification, updateNotification } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons";

import { CustomForm } from "../../components/Form/CustomForm";
import { GenericObject } from "../../helpers/forms";
import { apiWithoutJWT } from "../../helpers/api";

export const Database = () => {
  const [loading, setLoading] = React.useState(false);

  const handleTest = async (event: GenericObject) => {
    showNotification({
      id: "load-data",
      loading: true,
      title: "Loading your data",
      message: "Data will be loaded in 3 seconds, you cannot close this yet",
      autoClose: false,
      disallowClose: true,
    });
    setLoading(true);
    const respponse = await apiWithoutJWT("database/test", event, "POST");
    const resp = await respponse.json();
    if (resp.ok) {
      updateNotification({
        id: "load-data",
        color: "teal",
        title: "Éxito",
        message: "La conexión con la base de datos fue exitosa",
        icon: <IconCheck size={16} />,
        autoClose: 2000,
      });
    } else {
      updateNotification({
        id: "load-data",
        color: "red",
        title: "Error",
        message: "La conexión con la base datos falló",
        icon: <IconX size={16} />,
        autoClose: 2000,
      });
    }
    setLoading(false);
  };

  return (
    <>
      <Title order={2}>Base de datos</Title>
      <CustomForm
        formName="newDatabase"
        onSubmit={handleTest}
        submitName="Test"
        loading={loading}
      />
    </>
  );
};
