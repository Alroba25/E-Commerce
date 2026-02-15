import axiosConfig from "@/Api/axios.config";

export const getProducts = async () => {
  const response = await axiosConfig.get(
    "/api/products?fields=title,description,price,createdAt&populate=thumbnail",
  );

  return response.data.data;
};
