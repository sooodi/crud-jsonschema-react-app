import axios, { AxiosRequestConfig } from "axios";
import { useState, useCallback, useEffect } from "react";

import { useDispatch } from "react-redux";
import { productSlice } from "../../store/product/product.reducer";
import { actionRequestGet } from "../../service/actionRequest";
import { GET_PRODUCT } from "../../service/api-endpoint";

axios.defaults.baseURL = process.env.REACT_APP_FRONT_URL;

const useRequestProduct = (url?: string, shouldRetske?: boolean) => {
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();
  const { setProduct } = productSlice.actions;

  const sendRequest = useCallback(
    async (params: AxiosRequestConfig<any>, applyData: any) => {
      setLoading(true);
      setError(null);
      let response;
      try {
        if (url) {
          axios.defaults.baseURL = url;
          response = await axios.request({});
        } else {
          axios.defaults.baseURL = process.env.REACT_APP_FRONT_URL;
          response = await axios.request(params);

          setData(response.data);
          dispatch(setProduct(response.data));
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log("Axios Error with Message: " + JSON.stringify(error));
        } else {
          console.log(error);
        }
      } finally {
        setLoading(false);
      }
    },
    []
  );
  useEffect(() => {
    const HandleProductData = (data: any) => {
      dispatch(setProduct({ product: data }));
    };
    if (shouldRetske)
      sendRequest(actionRequestGet(GET_PRODUCT), HandleProductData);
  }, [sendRequest, shouldRetske]);

  return {
    loading,
    error,
    data,
    sendRequest,
  };
};

export default useRequestProduct;
