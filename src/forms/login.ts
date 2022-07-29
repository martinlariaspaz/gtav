export interface formData {
  username: string;
  password: string;
}

export const loginForm = [
  {
    id: 0,
    type: "text",
    value: "",
    label: "Usuario",
    placeholder: "Ingrese un usuario",
    name: "username",
    validations: [
      {
        type: "required",
        message: "El usuario es requerido",
      },
      {
        type: "maxLength",
        quantity: 15,
        message: "Este campo debe tener un máximo de 15 caractéres",
      },
      {
        type: "minLength",
        quantity: 6,
        message: "Este campo debe tener un mínimo de 6 caractéres",
      },
    ],
  },
  {
    id: 1,
    type: "password",
    value: "",
    label: "Contraseña",
    placeholder: "••••••••",
    name: "password",
    validations: [
      {
        type: "required",
        message: "La contraseña es requerida",
      },
      {
        type: "maxLength",
        quantity: 15,
        message: "Este campo debe tener un máximo de 15 caractéres",
      },
      {
        type: "minLength",
        quantity: 6,
        message: "Este campo debe tener un mínimo de 6 caractéres",
      },
    ],
  },
];
