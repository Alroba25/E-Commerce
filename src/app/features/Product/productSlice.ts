import type { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  navigateProductId: string;
}

const initialState: ProductState = {
  navigateProductId: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setNavigateProductId: (state, action: PayloadAction<string>) => {
      state.navigateProductId = action.payload;
    },
  },
});

export const { setNavigateProductId } = productSlice.actions;

export const selectCount = (state: RootState) =>
  state.product.navigateProductId;

export default productSlice.reducer;
