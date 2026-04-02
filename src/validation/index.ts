import * as yup from "yup";
export const registerSchema = yup
  .object({
    username: yup
      .string()
      .required("Username is required")
      .min(5, "Username should be at least 5 charachters"),
<<<<<<< HEAD
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    phoneNumber: yup
      .string()
      .required("Phone number is required")
      .min(8, "Phone number should be at least 8 characters"),
=======
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
    email: yup
      .string()
      .required("Email is required")
      .matches(/^[^@ ]+@[^@ ]+\.[^@ .]{3,}$/, "Not a valid email address."),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password should be at least 6 charachters."),
  })
  .required();
export const loginSchema = yup
  .object({
    identifier: yup
      .string()
      .required("Email is required")
      .matches(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, "Not a valid email address."),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password should be at least 6 charachters."),
  })
  .required();
<<<<<<< HEAD

export const productSchema = yup
  .object({
    title: yup
      .string()
      .required("Title is required")
      .min(3, "Title should be at least 3 characters"),
    description: yup
      .string()
      .required("Description is required")
      .min(10, "Description should be at least 10 characters"),
    price: yup
      .number()
      .min(0.01, "Price must be greater than 0")
      .required("Price is required"),
    stock: yup
      .number()
      .integer("Stock must be an integer")
      .min(0, "Stock cannot be negative")
      .required("Stock is required"),
    thumbnail: yup.object().shape({
      url: yup.string().required("Product image is required"),
    }),
  })
  .required();

export const contactUsSchema = yup
  .object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup
      .string()
      .required("Email is required")
      .matches(/^[^@ ]+@[^@ ]+\.[^@ .]{3,}$/, "Not a valid email address."),
    phoneNumber: yup.string().optional(),
    message: yup
      .string()
      .required("Message is required")
      .min(10, "Message should be at least 10 characters"),
  })
  .required();

export const profileSchema = yup
  .object({
    firstName: yup.string().optional(),
    lastName: yup.string().optional(),
    email: yup
      .string()
      .optional()
      .matches(/^[^@ ]+@[^@ ]+\.[^@ .]{3,}$/, "Not a valid email address."),
    phoneNumber: yup
      .string()
      .optional()
      .min(8, "Phone number should be at least 8 characters"),
  })
  .required();

export const checkoutSchema = yup
  .object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup
      .string()
      .required("Email is required")
      .matches(/^[^@ ]+@[^@ ]+\.[^@ .]{3,}$/, "Not a valid email address."),
    phoneNumber: yup
      .string()
      .required("Phone number is required")
      .min(8, "Phone number should be at least 8 characters"),
    address: yup.string().required("Address is required"),
    city: yup.string().required("City is required"),
    governorate: yup.string().required("Governorate is required"),
    zipCode: yup.string().required("Zip Code is required"),
  })
  .required();
=======
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
