import { Box, Button, createStyles, TextInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";

import {
  formExtractor,
  FormTypes,
  GenericObject,
  getInitialValues,
  getValidationSchema,
} from "../../helpers/forms";

type Props = {
  loading?: boolean;
  onSubmit: (event: GenericObject) => Promise<void>;
  formName: FormTypes;
  submitName?: string;
  initialData?: GenericObject;
};

export const CustomForm = ({
  onSubmit,
  formName,
  loading,
  submitName = "Action",
  initialData,
}: Props) => {
  const { classes } = useStyles();

  const myForm = formExtractor(formName);
  const validationSchema = getValidationSchema(myForm);
  const initialValues = initialData;
  const form = useForm({
    initialValues,
    validate: yupResolver(validationSchema),
  });

  return (
    <form
      className={classes.form}
      onSubmit={form.onSubmit((values) => onSubmit(values))}
    >
      {myForm.map(({ name, label, type, placeholder, autoComplete }) => {
        if (
          type === "text" ||
          type === "password" ||
          type === "email" ||
          type === "number" ||
          type === "date"
        )
          return (
            <TextInput
              key={`myForm--${name}`}
              name={name}
              label={label}
              placeholder={placeholder}
              type={type}
              autoComplete={autoComplete}
              {...form.getInputProps(name)}
            />
          );
        return <>No es un type valido</>;
      })}
      <Box className={classes.buttonGroup}>
        <Button type="submit" disabled={loading}>
          {submitName}
        </Button>
        <Button onClick={form.reset} disabled={loading}>
          Restablecer
        </Button>
      </Box>
    </form>
  );
};

const useStyles = createStyles((theme) => ({
  form: {
    paddingTop: "10px",

    overflow: "auto",
    "--webkit-overflow-scrolling": "touch",
    "--ms-overflow-style": "none",
    "&::-webkit-scrollbar": {
      display: "none !important",
      width: "0 !important",
      backgroundColor: "transparent !important",
    },
  },
  buttonGroup: {
    display: "flex",
    borderTop: `1px solid ${theme.colors.gray[4]}`,
    paddingTop: "10px",
    margin: "10px 0px 5px",
    justifyContent: "space-around",
  },
}));
