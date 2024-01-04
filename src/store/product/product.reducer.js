import { createSlice } from "@reduxjs/toolkit";

export const PRODUCT_INITIAL_STATE = {
  listProduct: [],
  selectedProduct: {},
  filteredProduct: [],
  filterObj: {
    Name: "",
    Type: "All",
  },
};
const filterProductItems = (listProduct, filterObj) => {
  const existingItems = listProduct.filter((item) => {
    let hasValues = item.name
      .toLocaleLowerCase()
      .includes(filterObj.Name.toLocaleLowerCase());

    return hasValues;
  });
  return existingItems;
};

export const productSlice = createSlice({
  name: "product",
  initialState: PRODUCT_INITIAL_STATE,
  reducers: {
    setProduct(state, action) {
      state.listProduct = action.payload;
      state.filteredProduct = action.payload;
    },
    selectedProductForEdit(state, action) {
      state.selectedProduct = action.payload;
    },
    deleteProduct(state, action) {
      let { id } = action.payload;
      let removeDeletedItem = state.listProduct.filter(
        (item) => item.id !== parseInt(id)
      );
      state.listProduct = removeDeletedItem;
      state.filteredProduct = removeDeletedItem;
    },
    addProduct(state, action) {
      let newList = state.listProduct.concat(action.payload);
      state.listProduct = newList;
      state.filteredProduct = newList;
    },
    updateProduct(state, action) {
      let data = [...state.listProduct];

      var index = data.findIndex((obj) => obj.id === action.payload.id);
      data[index] = action.payload;

      state.listProduct = data;
      state.filteredProduct = data;
      state.selectedProduct = {};
    },
    filterProduct(state, action) {
      state.filterObj = action.payload;
      state.filteredProduct = filterProductItems(
        state.listProduct,
        action.payload
      );
    },
    resetFilter(state, action) {
      state.filterObj = action.payload;
      state.filteredProduct = state.listProduct;
    },
  },
});

export const {
  setProduct,
  filterProduct,
  deleteProduct,
  addProduct,
  updateProduct,
  selectedProductForEdit,
  resetFilter,
} = productSlice.actions;

export const productReducer = productSlice.reducer;
