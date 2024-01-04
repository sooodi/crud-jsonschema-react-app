import { useEffect, useState } from "react";
import useRequestDeleteProduct from "../requests/useRequestDeleteProduct";
import { useDispatch, useSelector } from "react-redux";
import useRequestProduct from "../requests/useRequestProduct";
import { productObj } from "../../utils/common.type";
import { selectedProductForEdit } from "../../store/product/product.reducer";
import { allProducts } from "../../store/product/product.selector";

export const useHomeContainer = (shouldRetske?: boolean) => {
  const [selectedProduct, setSelectedProduct] = useState<productObj>();
  const [shouldDeleteProduct, setshouldDeleteProduct] =
    useState<boolean>(false);

  const products = useSelector(allProducts);

  const dispatch = useDispatch();
  const { loading, error } = useRequestProduct(undefined, shouldRetske);
  const {
    loading: deleteLoading,
    error: errorDelete,
    done,
  } = useRequestDeleteProduct(selectedProduct, shouldDeleteProduct);

  useEffect(() => {
    if (done) {
      console.log("delete accept");
      setSelectedProduct(undefined);
      setshouldDeleteProduct(false);
    }
  }, [done]);

  const deleteProduct = (field: productObj) => {
    setSelectedProduct(field);
    setshouldDeleteProduct(true);
  };
  const updateProduct = (field: productObj) => {
    dispatch(selectedProductForEdit(field));
  };

  return {
    products,
    loading,
    error,
    errorDelete,
    deleteLoading,
    deleteProduct,
    updateProduct,
  };
};
