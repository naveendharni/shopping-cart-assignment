import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { createLogger } from "redux-logger";

import offersReducer from "store/offers/offersSlice";
import categoriesReducer from "store/categories/categoriesSlice";
import productReducer from "store/product/productSlice";
import cartReducer from "store/cart/cartSlice";

const middleware = [
  /* YOUR CUSTOM MIDDLEWARES HERE */
  ...getDefaultMiddleware(),
];

const logger = createLogger({});
middleware.push(logger);

const combinedReducer = combineReducers({
  offers: offersReducer,
  product: productReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "reset-store") {
    state = undefined;
  }
  return combinedReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export default store;
