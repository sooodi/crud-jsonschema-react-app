import axios, { AxiosRequestConfig } from "axios";
import { useState, useCallback, useEffect } from "react";

import { useDispatch } from "react-redux";
import { deleteProduct } from "../../store/product/product.reducer";
import { actionRequestDelete } from "../../service/actionRequest";
import { GET_PRODUCT } from "../../service/api-endpoint";
import { productObj } from "../../utils/common.type";

axios.defaults.baseURL = process.env.REACT_APP_FRONT_URL;

const useRequestDeleteProduct = (
  product: productObj | undefined,
  shouldDelete: boolean
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

        applyData();
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError("Axios Error with Message: " + error.message);
        } else {
          setError(error);
        }
        setLoading(false);
      }
    },
    []
  );
  useEffect(() => {
    const HandleData = (data: any) => {
      dispatch(deleteProduct(product));
      setDone(true);
    };

    if (!product !== undefined && shouldDelete)
      sendRequest(
        actionRequestDelete(GET_PRODUCT + `/${product?.id}`),
        HandleData
      );
  }, [sendRequest, shouldDelete]);

  return {
    loading,
    error,
    done,
    sendRequest,
  };
};

export default useRequestDeleteProduct;
