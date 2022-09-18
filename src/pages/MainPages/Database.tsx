import React from "react";
import { useSelector } from "react-redux";

import { Select, Title } from "@mantine/core";
import { showNotification, updateNotification } from "@mantine/notifications";
import { IconCheck, IconClock, IconX } from "@tabler/icons";

import { CustomForm } from "../../components/Form/CustomForm";
import { GenericObject } from "../../helpers/forms";
import { apiWithoutJWT } from "../../helpers/api";
import { AuthState } from "../../store/Auth/types";
import { DashboardState } from "../../store/Dashboard/types";

export const Database = () => {
  const [loading, setLoading] = React.useState(false);
  const [dbSelected, setDBSelected] = React.useState<string | null>();

  const auth = useSelector((state: { auth: AuthState }) => state.auth);
  const dashboard = useSelector(
    (state: { dashboard: DashboardState }) => state.dashboard
  );
  const handleTest = async (event: GenericObject) => {
    showNotification({
      id: "load-data",
      loading: true,
      title: "Probando",
      message:
        "Estamos probando la conexión a la base de datos antes de guardarla",
      icon: <IconClock size={16} />,
      autoClose: false,
      disallowClose: true,
    });
    setLoading(true);
    const respponse = await apiWithoutJWT("database/test", event, "POST");
    const resp = await respponse.json();
    if (resp.ok && !dbSelected) {
      updateNotification({
        id: "load-data",
        loading: true,
        title: "Guardando",
        message: "Estamos guardando los datos de la base de datos.",
        icon: <IconClock size={16} />,
        autoClose: false,
        disallowClose: true,
      });
      const respponse = await apiWithoutJWT(
        "database/new",
        { ...event, email: auth.email },
        "POST"
      );
      const resp = await respponse.json();
      if (resp.ok) {
        updateNotification({
          id: "load-data",
          color: "teal",
          title: "Éxito",
          message: "La base de datos se ha guardado con éxito.",
          icon: <IconCheck size={16} />,
          autoClose: 2000,
        });
      } else {
        updateNotification({
          id: "load-data",
          color: "red",
          title: "Error",
          message: resp.message,
          icon: <IconX size={16} />,
          autoClose: 2000,
        });
      }
    } else if (resp.ok && dbSelected) {
      updateNotification({
        id: "load-data",
        color: "teal",
        title: "Éxito",
        message: "La la conexión a la base de datos fué exitosa.",
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

  const handleChange = React.useCallback((value: string | null) => {
    setDBSelected(value);
  }, []);

  let databaseData = React.useMemo(
    () =>
      dbSelected
        ? dashboard.database[
            dashboard.database.findIndex(
              (databse) => databse.dbHost === dbSelected
            )
          ]
        : undefined,
    [dashboard.database, dbSelected]
  );

  const initialFormData = databaseData
    ? {
        dbHost: databaseData.dbHost,
        dbUsername: databaseData.dbUsername,
        dbPassword: databaseData.dbPassword,
        dbName: databaseData.dbName,
      }
    : undefined;

  const userDBList = React.useMemo(
    () =>
      dashboard.database.map((database) => ({
        value: database.dbHost,
        label: `${database.dbHost} - ${database.dbName}`,
      })),
    [dashboard.database]
  );

  return (
    <>
      <Title order={2}>Base de datos</Title>
      <Select
        data={[
          { value: "", label: "Agregar una nueva base de datos" },
          ...userDBList,
        ]}
        defaultValue=""
        label="Mis bases de datos"
        onChange={handleChange}
        disabled={loading}
      ></Select>
      <CustomForm
        key={dbSelected}
        formName="newDatabase"
        onSubmit={handleTest}
        submitName={`${!dbSelected ? "Test & Save" : "Test"}`}
        initialData={initialFormData}
        loading={loading}
      />
    </>
  );
};
