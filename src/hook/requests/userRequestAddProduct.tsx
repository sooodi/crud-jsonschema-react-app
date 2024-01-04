import axios, { AxiosRequestConfig } from "axios";
import { useState, useCallback, useEffect } from "react";

import { useDispatch } from "react-redux";
import { addProduct, setProduct } from "../../store/product/product.reducer";
import { actionRequestPost } from "../../service/actionRequest";
import { GET_PRODUCT } from "../../service/api-endpoint";

axios.defaults.baseURL = process.env.REACT_APP_FRONT_URL;

const useRequestAddProduct = (dataProps: any, shouldAdd: boolean) => {
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
      dispatch(addProduct(dataProps));
      setDone(true);
    };
    if (shouldAdd)
      sendRequest(actionRequestPost(GET_PRODUCT, dataProps), HandleProductData);
  }, [sendRequest, shouldAdd]);

  return {
    loading,
    error,
    done,
    sendRequest,
  };
};

export default useRequestAddProduct;
