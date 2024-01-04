import TabsComponent from "../components/CustomTabPanel";
import { useHomeContainer } from "../hook/containers/useHomeContainer";

import _ from "lodash";
import ListProduct from "../components/ListProduct";
import Pagination from "../components/pagination/Pagination";

import { useCallback, useMemo, useState } from "react";
import { Paginate } from "../utils/functions";
import usePagination from "../hook/usePagination";
import {
  Button,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import { setProduct } from "../store/product/product.reducer";
import { useDispatch } from "react-redux";
import SortComponent from "../components/SortComponent";

const Home = () => {
  const [active, setActive] = useState<number>(1); // active page

  const [isAscending, setIsAscending] = useState<number>(0);
  const {
    products,
    loading,
    error,
    errorDelete,
    deleteLoading,
    deleteProduct,
    updateProduct,
  } = useHomeContainer(isAscending === 0);

  //hook pageination , returns all pages
  const { pages } = usePagination(active, products?.length);
  // return  products of active page
  const productPart = useMemo(
    () => Paginate(products, active),
    [pages, products]
  );

  // function sortByText(index: number) {

  //   if (index == 0) {
  //     setIsAscending(index);
  //     return;
  //   }
  //   let arr = [...products];
  //   let newData = arr.sort((a: any, b: any) => a.name.localeCompare(b.name));

  //   // we Descending  , so we should reverse then change state
  //   if (index === 2) dispatch(setProduct(newData.reverse()));
  //   else dispatch(setProduct(newData));
  //   setIsAscending(index);
  // }
  const handleClick = useCallback((e: any) => {
    if (e.target.value === 0) {
      return;
    }

    setActive(e.target.value);
  }, []);

  return (
    <div
      className="container mb-12 mx-auto px-4 md:px-12 mt-0 "
      data-testid="top"
    >
      <TabsComponent />
      {/* defualt state , sort  Ascending , Descending   by name of products  if user after sort , tend to go to defualt state without sort , we should retake list , this is just a easy way , we can keep sorted array in redux and avoid re call api */}
      <SortComponent
        isAscending={isAscending}
        setIsAscending={function (index: number): void {
          setIsAscending(index);
        }}
        data={products}
      />
      <ListProduct
        products={productPart}
        updateProduct={function (filed: any): void {
          updateProduct(filed);
        }}
        deleteProduct={function (filed: any): void {
          deleteProduct(filed);
        }}
      />
      <Pagination handleClick={handleClick} pages={pages} active={active} />
    </div>
  );
};

export default Home;
