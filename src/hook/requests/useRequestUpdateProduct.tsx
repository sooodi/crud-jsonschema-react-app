import axios, { AxiosRequestConfig } from "axios";
import { useState, useCallback, useEffect } from "react";

import { useDispatch } from "react-redux";
import { setProduct, updateProduct } from "../../store/product/product.reducer";
import { actionRequestPut } from "../../service/actionRequest";
import { GET_PRODUCT } from "../../service/api-endpoint";
import { productObj } from "../../utils/common.type";

axios.defaults.baseURL = process.env.REACT_APP_FRONT_URL;

const useRequestUpdateProduct = (
  product: productObj | undefined,
  shouldUpdate: boolean
) => {
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [done, setDone] = useState<boolean>(false);
  const dispatch = useDispatch();

  const sendRequest = useCallback(
    async (params: AxiosRequestConfig<any>, applyData: any) => {
      setLoading(true);
      setError(null);
      setDone(false);
      try {
        const response = await axios.request(params);
        console.log("update response", response);
        applyData();
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError("Axios Error with Message: " + error.message);
        } else {
          setError(error);
        }
        setLoading(false);
      } finally {
        setLoading(false);
      }
    },
    []
  );
  useEffect(() => {
    const HandleProductData = (data: any) => {
      dispatch(updateProduct(product));
      setDone(true);
    };
    if (shouldUpdate)
      sendRequest(
        actionRequestPut(GET_PRODUCT + `/${product?.id}`, product),
        HandleProductData
      );
  }, [sendRequest, shouldUpdate]);

  return {
    loading,
    error,
    done,
    sendRequest,
  };
};

export default useRequestUpdateProduct;
