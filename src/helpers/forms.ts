import * as Yup from "yup";
import { loginForm } from "../forms/login";
import { myAccount } from "../forms/myAccount";
import { registerForm } from "../forms/register";

export type GenericObject = {
  [x: string]: any;
};

type Validations = {
  type: string;
  message?: string;
  quantity?: number;
};

export type MyForm = {
  validations: Validations[];
  name: string;
  value: string;
  type: string;
  label: string;
  autoComplete: string;
  placeholder: string;
};

export const getValidationSchema = (myForm: MyForm[]) => {
  let validationFields: GenericObject = {};
  for (const input of myForm) {
    if (!input.validations) continue;
    let schema = Yup.string();
    for (const rule of input.validations) {
      if (rule.type === "required") {
        schema = schema.required(rule.message);
      }
      if (rule.type === "maxLength") {
        schema = schema.max(rule.quantity || 15, rule.message);
      }
      if (rule.type === "minLength") {
        schema = schema.min(rule.quantity || 4, rule.message);
      }
      if (rule.type === "email") {
        schema = schema.email(rule.message);
      }
      if (rule.type === "repeated") {
        schema = schema.oneOf([Yup.ref("password")], rule.message);
      }
    }
    validationFields[input.name] = schema;
  }
  return Yup.object({ ...validationFields });
};

export const getInitialValues = (myForm: MyForm[]) => {
  let initialValues: GenericObject = {};
  for (const input of myForm) {
    initialValues[input.name] = input.value;
  }
  return initialValues;
};

export type FormTypes = "login" | "register" | "myAccount";

export const formExtractor = (form: FormTypes): MyForm[] => {
  switch (form) {
    case "login":
      return loginForm;
    case "register":
      return registerForm;
    case 'myAccount':
      return myAccount;
    default:
      return [];
  }
};
