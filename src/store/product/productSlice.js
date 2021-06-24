import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchproducts from "services/products";

// fetch the products
export const getProducts = createAsyncThunk(
  "productPage/getProducts",
  async () => {
    try {
      const res = await fetchproducts();
      return res;
    } catch (error) {
      throw new Error(error?.message ?? "Get products failed");
    }
  }
);

const initialState = {
  isLoading: false,
  isError: null,
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true;
      state.products = [];
      state.isError = null;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
      state.isError = null;
    },
    [getProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    },
  },
});

const { reducer } = productSlice;
export default reducer;
