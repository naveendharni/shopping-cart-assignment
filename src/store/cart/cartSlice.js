import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postProduct from "services/cart";

// add product
export const addProduct = createAsyncThunk(
  "productPage/addProduct",
  async (data) => {
    try {
      const res = await postProduct(data.id);
      return {
        res,
        data,
        id: data.id,
      };
    } catch (error) {
      throw new Error(error?.message ?? "Add product failed");
    }
  }
);

const initialState = {
  isLoading: false,
  isError: null,
  cartItems: {},
  isCartShow: false,
  totalProducts: 0,
  totalPrice: 0,
  isUser: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeProduct: (state, action) => {
      const id = action.payload;
      const item = state.cartItems[id];
      if (item.totalItem > 1) {
        state.cartItems[id].totalItem = state.cartItems[id].totalItem - 1;
      } else {
        delete state.cartItems[id];
      }
      state.totalProducts = state.totalProducts - 1;
      state.totalPrice = state.totalPrice - item.price;
    },
    toggleCart: (state) => {
      state.isCartShow = !state.isCartShow;
    },
    saveUser: (state, action) => {
      state.isUser = action.payload;
    },
  },
  extraReducers: {
    [addProduct.pending]: (state) => {
      state.isLoading = true;
      state.isError = null;
    },
    [addProduct.fulfilled]: (state, action) => {
      const id = action.payload.id;
      const data = action.payload.data;
      state.isLoading = false;
      if (state.cartItems[id] != undefined) {
        state.cartItems[id].totalItem = state.cartItems[id].totalItem + 1;
      } else {
        state.cartItems[id] = data;
        state.cartItems[id] = {
          ...data,
          totalItem: 1,
        };
      }
      state.totalProducts = state.totalProducts + 1;
      state.totalPrice = state.totalPrice + data.price;
      state.isError = null;
    },
    [addProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    },
  },
});

const { reducer, actions } = cartSlice;
export const { removeProduct, toggleCart, saveUser } = actions;
export default reducer;
