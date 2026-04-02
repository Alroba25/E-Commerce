import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "@/Interfaces";

interface CartProduct extends IProduct {
  quantity: number;
}

interface CartSliceState {
  productsCart: CartProduct[];
}

const initialState: CartSliceState = {
  productsCart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existingProduct = state.productsCart.find(
        (item) => item.documentId === action.payload.documentId,
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.productsCart.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.productsCart = state.productsCart.filter(
        (item) => item.documentId !== action.payload,
      );
    },
<<<<<<< HEAD
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.productsCart.find(
        (p) => p.documentId === action.payload,
      );
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.productsCart.find(
        (p) => p.documentId === action.payload,
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
=======

>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
    clearAllItems: (state) => {
      state.productsCart = [];
    },
  },
});

<<<<<<< HEAD
export const {
  addToCart,
  clearAllItems,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
=======
export const { addToCart, clearAllItems, removeItem } = cartSlice.actions;
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c

export default cartSlice.reducer;
