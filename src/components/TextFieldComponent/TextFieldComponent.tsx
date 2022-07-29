import { ErrorMessage, FormikProps } from "formik";

import { GenericObject } from "../../helpers/forms";
import { formData } from "../../forms/login";
import { Input, InputWrapper } from "@mantine/core";

type Props = {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  formikContext: FormikProps<GenericObject>;
};

export const TextFieldComponent = ({
  name,
  label,
  placeholder,
  type,
  formikContext,
}: Props) => {
  return (
    <InputWrapper label={label}>
      <Input
        autoComplete="disabled"
        name={name}
        onBlur={formikContext.handleBlur}
        onChange={formikContext.handleChange}
        placeholder={placeholder}
        value={formikContext.values[name as keyof formData]}
        type={type}
      />
      <ErrorMessage name={name} component="span"></ErrorMessage>
    </InputWrapper>
  );
};
