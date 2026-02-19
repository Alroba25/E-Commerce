import { type IFormInput } from "../Interfaces";

export const LOGIN_FORM: IFormInput[] = [
  {
    name: "identifier",
    placeholder: "Email Address",
    type: "text",
    validation: {
      required: true,
      minLength: 5,
    },
  },
  {
    name: "password",
    placeholder: "Password",
    type: "password",
    validation: {
      required: true,
      minLength: 6,
    },
  },
];

export const REGISTER_FORM: IFormInput[] = [
  {
    name: "username",
    placeholder: "Username",
    type: "text",
    validation: {
      required: true,
      minLength: 5,
    },
  },
  {
    name: "email",
    placeholder: "Email Address",
    type: "email",
    validation: {
      required: true,
      minLength: 5,
    },
  },
  {
    name: "password",
    placeholder: "Password",
    type: "password",
    validation: {
      required: true,
      minLength: 6,
    },
  },
];
