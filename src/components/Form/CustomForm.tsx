import { Form, Formik, FormikHelpers } from "formik";
import { TextFieldComponent } from "../TextFieldComponent/TextFieldComponent";
import {
  formExtractor,
  GenericObject,
  getInitialValues,
  getValidationSchema,
} from "../../helpers/forms";
import { Button } from "@mantine/core";

type Props = {
  loading?: boolean;
  onSubmit: ((
    values: GenericObject,
    formikHelpers: FormikHelpers<GenericObject>
  ) => void | Promise<any>) &
    ((
      values: GenericObject,
      formikHelpers: FormikHelpers<GenericObject>
    ) => void | Promise<any>) &
    ((values: GenericObject) => void);
  form: string;
};

export const CustomForm = ({ onSubmit, form, loading }: Props) => {
  const myForm = formExtractor(form);
  if (!myForm) return null;
  const validationSchema = getValidationSchema(myForm);
  const initialValues = getInitialValues(myForm);
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            {myForm.map(({ name, label, type, placeholder }) => {
              if (
                type === "text" ||
                type === "password" ||
                type === "email" ||
                type === "number" ||
                type === "date"
              )
                return (
                  <TextFieldComponent
                    key={`login-${name}`}
                    formikContext={formik}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                    type={type}
                  />
                );
              return <>No es un type valido</>;
            })}
            <Button type="submit" disabled={loading}>
              Ingresar
            </Button>
            <Button onClick={formik.handleReset} disabled={loading}>
              Restablecer
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
