import axiosConfig from "@/Api/axios.config";

export const getProducts = async () => {
  const response = await axiosConfig.get(
    "/api/products?fields=title,description,price,createdAt&populate=thumbnail",
  );
  console.log(response.data.data);

  return response.data.data;
};

export const getOneProduct = async (url: string) => {
  const response = await axiosConfig.get(
    `/api/products/${url}?populate=thumbnail`,
  );

  return response.data.data;
};
export const loginHandelar = async (identifier: string, password: string) => {
  const response = await axiosConfig.post(`/api/auth/local`, {
    identifier,
    password,
  });

  return response.data;
};
export const registerHandelar = async (identifier: string, password: string) => {
  const response = await axiosConfig.post(`/api/auth/local/register`, {
    identifier,
    password,
  });

  return response.data;
};
