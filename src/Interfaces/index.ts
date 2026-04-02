export interface IProduct {
  id: number;
  title: string;
  description: string;
  thumbnail: { url: string };
  documentId: string;
  price: number;
  quantity?: number;
<<<<<<< HEAD
  stock: number;
}
export interface IAddProduct {
  title: string;
  description: string;
  thumbnail: { url: string };
  price: number;
  stock: number;
}
=======
}

>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
export interface IFormInput {
  name: string;
  placeholder: string;
  type: string;
  validation: {
    required?: boolean;
    minLength?: number;
    pattern?: RegExp;
  };
}
<<<<<<< HEAD
export interface IAddProductForm {
  name: string;
  placeholder: string;
  type: string;
}
=======

>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
export interface IErrorResponse {
  error: {
    message?: string;
  };
}
<<<<<<< HEAD
export interface IProfile {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}
export interface IProfileForm {
  name: string;
  placeholder: string;
  type: string;
}
export interface IOrder {
  id: number;
  documentId: string;
  orderId: string;
  total: number;
  itemsCount: number;
  status: string;
  createdAt: string;
  user?: {
    username: string;
    email: string;
  };
}
=======
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
