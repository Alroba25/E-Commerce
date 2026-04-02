export interface IProduct {
  id: number;
  title: string;
  description: string;
  thumbnail: { url: string };
  documentId: string;
  price: number;
  quantity?: number;
  stock: number;
}
export interface IAddProduct {
  title: string;
  description: string;
  thumbnail: { url: string };
  price: number;
  stock: number;
}
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
export interface IAddProductForm {
  name: string;
  placeholder: string;
  type: string;
}
export interface IErrorResponse {
  error: {
    message?: string;
  };
}
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
