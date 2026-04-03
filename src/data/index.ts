import {
  type IAddProductForm,
  type IFormInput,
  type IProfileForm,
} from "../Interfaces";

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
    name: "firstName",
    placeholder: "First Name",
    type: "text",
    validation: {
      required: true,
    },
  },
  {
    name: "lastName",
    placeholder: "Last Name",
    type: "text",
    validation: {
      required: true,
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
    name: "phoneNumber",
    placeholder: "Phone Number",
    type: "text",
    validation: {
      required: true,
      minLength: 8,
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
export const ADD_PRODUCT_FORM: IAddProductForm[] = [
  {
    name: "title",
    placeholder: "Title",
    type: "text",
  },
  {
    name: "description",
    placeholder: "Description",
    type: "text",
  },
  {
    name: "price",
    placeholder: "Price",
    type: "number",
  },
  {
    name: "stock",
    placeholder: "Stock",
    type: "number",
  },
  {
    name: "thumbnail",
    placeholder: "Image",
    type: "file",
  },
];
export const UPDATE_PROFILE_FORM: IProfileForm[] = [
  {
    name: "firstName",
    placeholder: "First Name",
    type: "text",
  },
  {
    name: "lastName",
    placeholder: "Last Name",
    type: "text",
  },
  {
    name: "email",
    placeholder: "Email Address",
    type: "email",
  },
  {
    name: "phoneNumber",
    placeholder: "Phone Number",
    type: "text",
  },
];
