import { combineReducers } from "@reduxjs/toolkit";

import { productReducer } from "./product/product.reducer";

export const rootReducer = combineReducers({
  product: productReducer,
});
