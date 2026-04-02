<<<<<<< HEAD
import {
  type IAddProductForm,
  type IFormInput,
  type IProfile,
  type IProfileForm,
} from "../Interfaces";
=======
import { type IFormInput } from "../Interfaces";
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c

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
<<<<<<< HEAD
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
=======
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
    name: "email",
    placeholder: "Email Address",
    type: "email",
    validation: {
      required: true,
      minLength: 5,
    },
  },
  {
<<<<<<< HEAD
    name: "phoneNumber",
    placeholder: "Phone Number",
    type: "text",
    validation: {
      required: true,
      minLength: 8,
    },
  },
  {
=======
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
    name: "password",
    placeholder: "Password",
    type: "password",
    validation: {
      required: true,
      minLength: 6,
    },
  },
];
<<<<<<< HEAD
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
=======
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
