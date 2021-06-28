import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchCategories from "services/categories";

// fetch all the categories
export const getCategories = createAsyncThunk(
  "homepage/getCategories",
  async () => {
    try {
      const res = await fetchCategories();
      return res;
    } catch (error) {
      throw new Error(error?.message ?? "Get categories failed");
    }
  }
);

const initialState = {
  isLoading: false,
  isError: null,
  categories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: {
    [getCategories.pending]: (state) => {
      state.isLoading = true;
      state.categories = [];
      state.isError = null;
    },
    [getCategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
      state.isError = null;
    },
    [getCategories.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    },
  },
});

const { reducer } = categoriesSlice;
export default reducer;
