import { createSelector } from "reselect";

const selectProductReducer = (state) => state.product;

export const selectFiltredProduct = createSelector(
  [selectProductReducer],
  (product) => {
    return product.filteredProduct;
  }
);

export const allProducts = createSelector(
  [selectFiltredProduct],
  (allProducts) => {
    return allProducts;
  }
);

export const selectAProduct = createSelector(
  [selectProductReducer],
  (product) => {
    return product.selectedProduct;
  }
);
