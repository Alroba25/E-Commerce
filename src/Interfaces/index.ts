export interface IProduct {
  id: number;
  title: string;
  description: string;
  thumbnail: { url: string };
  documentId: string;
  price: number;
  quantity?: number;
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

export interface IErrorResponse {
  error: {
    message?: string;
  };
}
