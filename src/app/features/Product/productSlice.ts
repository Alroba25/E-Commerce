import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IProduct, IAddProduct } from "@/Interfaces";

interface ProductState {
  navigateProductId: string;
  deleteProductData: IProduct;
  addProductData: IAddProduct;
  productToEdit: IAddProduct;
  editProductId: string;
}

const initialState: ProductState = {
  navigateProductId: "",
  deleteProductData: {
    id: 0,
    title: "",
    description: "",
    thumbnail: { url: "" },
    price: 0,
    stock: 0,
    documentId: "",
  },
  addProductData: {
    title: "",
    description: "",
    thumbnail: { url: "" },
    price: 0,
    stock: 0,
  },
  productToEdit: {
    title: "",
    description: "",
    thumbnail: { url: "" },
    price: 0,
    stock: 0,
  },
  editProductId: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setNavigateProductId: (state, action: PayloadAction<string>) => {
      state.navigateProductId = action.payload;
    },
    setDeleteProductData: (state, action: PayloadAction<IProduct>) => {
      state.deleteProductData = action.payload;
    },
    setAddProductData: (state, action: PayloadAction<IAddProduct>) => {
      state.addProductData = action.payload;
    },
    setEditProductData: (state, action: PayloadAction<IAddProduct>) => {
      state.productToEdit = action.payload;
    },
    setEditProductId: (state, action: PayloadAction<string>) => {
      state.editProductId = action.payload;
    },
  },
});

<<<<<<< HEAD
export const {
  setNavigateProductId,
  setDeleteProductData,
  setAddProductData,
  setEditProductData,
  setEditProductId,
} = productSlice.actions;
=======
export const { setNavigateProductId } = productSlice.actions;
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c

export default productSlice.reducer;
