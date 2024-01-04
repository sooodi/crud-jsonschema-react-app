import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { addFields } from "../../utils/formFields";
import { AuthContext } from "../../context/AuthContext";
import useRequestAddProduct from "../requests/userRequestAddProduct";
import {
  allProducts,
  selectAProduct,
} from "../../store/product/product.selector";
import useRequestUpdateProduct from "../requests/useRequestUpdateProduct";
import { productSchema } from "../../utils/schemaProduct";
import { isProductExited } from "../../utils/functions";

const fields = addFields;
let fieldsState: any = {};
fields.forEach((field: any) => (fieldsState[field?.id] = ""));

export const useEditAddProductContiner = () => {
  const [valuesState, setValuesState] = useState(fieldsState);
  const [shouldAddProduct, setshouldAddProduct] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [shouldUpdateProduct, setshouldUpdateProduct] =
    useState<boolean>(false);

  const selectedProduct = useSelector(selectAProduct);
  const products = useSelector(allProducts);

  const { user } = useContext(AuthContext);
  const { loading, error, done } = useRequestAddProduct(
    {
      name: valuesState.name,
      price: parseFloat(valuesState.price),
      image: "https://picsum.photos/600/400/?random",
      author: user?.email,
    },
    shouldAddProduct
  );
  const {
    loading: updateLoading,
    error: updateError,
    done: updateDone,
  } = useRequestUpdateProduct(valuesState, shouldUpdateProduct);

  useEffect(() => {
    if (done) {
      setValuesState(fieldsState);
      setshouldAddProduct(false);
    }
  }, [done]);

  useEffect(() => {
    if (updateDone) {
      setValuesState(fieldsState);
      setshouldUpdateProduct(false);
    }
  }, [updateDone]);

  useEffect(() => {
    if (selectedProduct) {
      setValuesState(selectedProduct);
    }
  }, [selectedProduct]);

  const handleChange = (e: any) => {
    setValuesState({ ...valuesState, [e.target.id]: e.target.value });
  };

  const addEditProduct = async (state: string) => {
    setErrorMessage("");
    let errorMessage_ = "";
    const isValid = await productSchema.validate(valuesState).catch((err) => {
      errorMessage_ = err.toString().split(":")[1];
      //sthe econd part of the error string is the validation message of yup in productSchema ,we grab it to show to the user

      return null;
    });
    let exisedValues = isProductExited(products, valuesState);
    if (exisedValues) {
      setErrorMessage("This product is existed, please enter a different name");
      return;
    }
    if (isValid === null) {
      setErrorMessage(errorMessage_);
      return;
    }

    state == "add" ? setshouldAddProduct(true) : setshouldUpdateProduct(true);
  };

  return {
    fields,
    valuesState,
    addEditProduct,
    handleChange,
    errorMessage,
    selectedProduct,
    loading,
    error,
    updateLoading,
    updateError,
  };
};
