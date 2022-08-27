export const newDatabase = [
  {
    id: 0,
    type: "text",
    value: "",
    label: "DB Host",
    placeholder: "Ingrese el host",
    name: "dbHost",
    autoComplete: "true",
    validations: [
      {
        type: "required",
        message: "El host es requerido",
      },
      {
        type: "minLength",
        quantity: 1,
        message: "Este campo debe tener un mínimo de 1 caractéres",
      },
    ],
  },
  {
    id: 1,
    type: "text",
    value: "",
    label: "DB Nombre",
    placeholder: "Ingrese el nombre de la base de datos",
    name: "dbName",
    autoComplete: "false",
    validations: [
      {
        type: "required",
        message: "El nombre de la base de datos es requerida",
      },
      {
        type: "minLength",
        quantity: 1,
        message: "Este campo debe tener un mínimo de 1 caractéres",
      },
    ],
  },
  {
    id: 2,
    type: "text",
    value: "",
    label: "DB Usuario",
    placeholder: "Ingrese el usuario de la base de datos",
    name: "dbUsername",
    autoComplete: "false",
    validations: [
      {
        type: "required",
        message: "El usuario de la base de datos es requerida",
      },
      {
        type: "minLength",
        quantity: 1,
        message: "Este campo debe tener un mínimo de 1 caractéres",
      },
    ],
  },
  {
    id: 3,
    type: "password",
    value: "",
    label: "DB Password",
    placeholder: "••••••••",
    name: "dbPassword",
    autoComplete: "false",
    validations: [
      {
        type: "required",
        message: "El nombre de la base de datos es requerida",
      },
      {
        type: "minLength",
        quantity: 1,
        message: "Este campo debe tener un mínimo de 1 caractéres",
      },
    ],
  },
];
