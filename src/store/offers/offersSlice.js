import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchOffers from "services/offers";

// fetch all the offers
export const getOffers = createAsyncThunk("homepage/getOffers", async () => {
  try {
    const res = await fetchOffers();
    return res;
  } catch (error) {
    throw new Error(error?.message ?? "Get offer details failed");
  }
});

const initialState = {
  isLoading: false,
  isError: null,
  offers: [],
};

const offersSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {},
  extraReducers: {
    [getOffers.pending]: (state) => {
      state.isLoading = true;
      state.offers = [];
      state.isError = null;
    },
    [getOffers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.offers = action.payload;
      state.isError = null;
    },
    [getOffers.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    },
  },
});

const { reducer } = offersSlice;
export default reducer;
