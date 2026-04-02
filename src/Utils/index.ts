import axiosConfig from "@/Api/axios.config";
import { getCookie } from "@/Api/cookies";
import type { IAddProduct } from "@/Interfaces";

export const getProducts = async ({
  sort,
  limit,
  page,
}: {
  sort?: string;
  limit?: number;
  page?: number;
}) => {
  let url = "/api/products?populate=thumbnail";

  if (sort) {
    if (sort === "price-asc") url += "&sort=price:asc";
    else if (sort === "price-desc") url += "&sort=price:desc";
    else if (sort === "newest") url += "&sort=createdAt:desc";
  }
  url += "&sort=createdAt:desc"; // default featured/newest

  if (limit && limit !== -1) {
    url += `&pagination[pageSize]=${limit}`;
  } else if (!limit) {
    url += `&pagination[pageSize]=10`; // default limit
  } // if limit is -1, retrieve all

  if (page) {
    url += `&pagination[page]=${page}`;
  }

  const response = await axiosConfig.get(url);
  return response.data; // Return full response to get meta.pagination
};
export const getProductsByCategory = async (params: {
  categoryName: string;
  page?: number;
  sort?: string;
  limit?: number;
}) => {
  let url = `/api/products?filters[categorie][title][$eq]=${encodeURIComponent(params.categoryName)}&populate=thumbnail`;

  if (params.sort) {
    if (params.sort === "price-asc") url += "&sort=price:asc";
    else if (params.sort === "price-desc") url += "&sort=price:desc";
    else if (params.sort === "newest") url += "&sort=createdAt:desc";
  } else {
    url += "&sort=createdAt:desc"; // default featured/newest
  }

  if (params.page) {
    url += `&pagination[page]=${params.page}&pagination[pageSize]=10`;
  } else {
    url += `&pagination[pageSize]=10`;
  }

  const response = await axiosConfig.get(url);
  return response.data; // Return full response to get meta.pagination
};
export const getOneProduct = async (documentId: string) => {
  const response = await axiosConfig.get(
    `/api/products/${documentId}?populate=thumbnail`,
  );

  return response.data;
};
export const getAdminProducts = async () => {
  const response = await axiosConfig.get(
    `/api/products?populate=thumbnail&sort=createdAt:DESC`,
  );
  console.log(response.data.data);

  return response.data.data;
};
<<<<<<< HEAD
export const deleteProduct = async (documentId: string) => {
  const token = localStorage.getItem("jwt") || getCookie("jwt");
  const response = await axiosConfig.delete(`/api/products/${documentId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
=======

export const getOneProduct = async (url: string) => {
  const response = await axiosConfig.get(
    `/api/products/${url}?populate=thumbnail`,
  );

  return response.data.data;
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
};
export const loginHandelar = async (identifier: string, password: string) => {
  const response = await axiosConfig.post(`/api/auth/local`, {
    identifier,
    password,
  });

  return response.data;
};
<<<<<<< HEAD
export const registerHandelar = async (data: any) => {
  const response = await axiosConfig.post(`/api/auth/local/register`, data);

  return response.data;
};
export const addProductHandelar = async (product: IAddProduct) => {
  const token = localStorage.getItem("jwt") || getCookie("jwt");
  const response = await axiosConfig.post(
    `/api/products`,
    {
      data: product,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
};
export const editProductHandelar = async (
  documentId: string,
  product: IAddProduct,
) => {
  const token = localStorage.getItem("jwt") || getCookie("jwt");
  const response = await axiosConfig.put(
    `/api/products/${documentId}`,
    {
      data: product,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
};
export const updateUserProfileHandelar = async (userId: string, data: any) => {
  const token = localStorage.getItem("jwt") || getCookie("jwt");
  const response = await axiosConfig.put(`/api/users/${userId}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
export const uploadImageHandelar = async (file: File) => {
  const token = localStorage.getItem("jwt") || getCookie("jwt");
  const formData = new FormData();
  formData.append("files", file);

  const response = await axiosConfig.post("/api/upload", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
export const getOrdersAdmin = async () => {
  const token = localStorage.getItem("jwt") || getCookie("jwt");
  const response = await axiosConfig.get("/api/orders?populate=*", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
=======
export const registerHandelar = async (identifier: string, password: string) => {
  const response = await axiosConfig.post(`/api/auth/local/register`, {
    identifier,
    password,
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
  });

  return response.data;
};
