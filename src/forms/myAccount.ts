export interface formData {
  username: string;
  password: string;
}

export const myAccount = [
  {
    id: 0,
    type: "text",
    value: "asd",
    label: "Nombre completo",
    placeholder: "Ingrese su nombre completo",
    name: "fullName",
    autoComplete: "false",
    validations: [
      {
        type: "required",
        message: "El nombre y apellido es requerido",
      },
      {
        type: "minLength",
        quantity: 6,
        message: "Este campo debe tener un mínimo de 6 caractéres",
      },
      {
        type: "maxLength",
        quantity: 50,
        message: "Este campo debe tener un máximo de 50 caractéres",
      },
    ],
  },
  {
    id: 1,
    type: "date",
    value: "",
    label: "Fecha de Nacimiento",
    placeholder: "Ingrese su fecha de nacimiento",
    name: "birthDate",
    autoComplete: "false",
    validations: [
      {
        type: "required",
        message: "La fecha de nacimiento es requerida",
      },
    ],
  },
  {
    id: 2,
    type: "number",
    value: "",
    label: "Numero de Documento",
    placeholder: "Ingrese su numero de documento",
    name: "dni",
    autoComplete: "false",
    validations: [
      {
        type: "required",
        message: "La fecha de nacimiento es requerida",
      },
      {
        type: "minLength",
        quantity: 7,
        message: "Este campo debe tener un mínimo de 7 caractéres",
      },
      {
        type: "maxLength",
        quantity: 8,
        message: "Este campo debe tener un máximo de 8 caractéres",
      },
    ],
  },
  {
    id: 3,
    type: "email",
    value: "",
    label: "Email",
    placeholder: "Ingrese su email",
    name: "email",
    autoComplete: "false",
    validations: [
      {
        type: "required",
        message: "El email es requerido",
      },
      {
        type: "minLength",
        quantity: 6,
        message: "Este campo debe tener un mínimo de 6 caractéres",
      },
      {
        type: "email",
        message: "Debe ser un email válido",
      },
    ],
  },
  {
    id: 4,
    type: "text",
    value: "",
    label: "Usuario",
    placeholder: "Ingrese un usuario",
    name: "username",
    autoComplete: "false",
    validations: [
      {
        type: "required",
        message: "El usuario es requerido",
      },
      {
        type: "minLength",
        quantity: 6,
        message: "Este campo debe tener un mínimo de 6 caractéres",
      },
      {
        type: "maxLength",
        quantity: 15,
        message: "Este campo debe tener un máximo de 15 caractéres",
      },
    ],
  },
  {
    id: 5,
    type: "password",
    value: "",
    label: "Contraseña",
    placeholder: "••••••••",
    name: "password",
    autoComplete: "false",
    validations: [
      {
        type: "required",
        message: "La contraseña es requerida",
      },
      {
        type: "minLength",
        quantity: 6,
        message: "Este campo debe tener un mínimo de 6 caractéres",
      },
      {
        type: "maxLength",
        quantity: 15,
        message: "Este campo debe tener un máximo de 15 caractéres",
      },
    ],
  },
  {
    id: 6,
    type: "password",
    value: "",
    label: "Nueva contraseña (Dejar en blanco si no se desea cambiar)",
    placeholder: "••••••••",
    name: "newPassword",
    autoComplete: "false",
    validations: [
      {
        type: "maxLength",
        quantity: 15,
        message: "Este campo debe tener un máximo de 15 caractéres",
      },
    ],
  },
];
