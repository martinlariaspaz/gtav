import { Title } from "@mantine/core";
import { CustomForm } from "../../components/Form/CustomForm";
import { GenericObject } from "../../helpers/forms";
import { DashboardState } from "../../store/Dashboard/types";
import { useSelector } from "react-redux";

export const Account = () => {
  const initialData = useSelector(
    (state: { dashboard: DashboardState }) => state.dashboard.user
  );

  const handleModifyAccount = async (event: GenericObject) => {
    console.log(event);
  };

  return (
    <>
      <Title order={2}>Mi cuenta</Title>
      <CustomForm
        formName="myAccount"
        onSubmit={handleModifyAccount}
        submitName="Modificar"
        initialData={initialData}
      />
    </>
  );
};
