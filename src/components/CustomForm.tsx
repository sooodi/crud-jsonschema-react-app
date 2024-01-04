import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  PRODUCT_INITIAL_STATE,
  filterProduct,
  resetFilter,
} from "../store/product/product.reducer";

import { filterObjType } from "../utils/common.type";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

const CustomForm = () => {
  const [valueFilter, setValueFilter] = useState<filterObjType>({
    Name: "",
  });

  const dispatch = useDispatch();

  const UpdateValue = (key: any, value: any) => {
    setValueFilter({ ...valueFilter, [key]: value });
  };

  const handleFilter = () => {
    dispatch(filterProduct(valueFilter));
  };
  const handleResetFilter = () => {
    setValueFilter(PRODUCT_INITIAL_STATE.filterObj);
    dispatch(resetFilter(PRODUCT_INITIAL_STATE.filterObj));
  };

  return (
    <>
      <form>
        <div className="row d-flex align-items-center px-4 mb-5">
          <div className="col d-flex flex-column ">
            <Card sx={{ padding: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={9} sx={{ marginLeft: 3 }}>
                  <TextField
                    // error={true}
                    id="outlined-error"
                    label="Title"
                    defaultValue="Type title of product..."
                    size="small"
                    fullWidth
                    value={valueFilter.Name}
                    onChange={(event: any) =>
                      UpdateValue("Name", event?.target.value)
                    }
                  />
                </Grid>
                <Grid>
                  <Button
                    sx={{ marginLeft: 5, marginTop: 2, marginBottom: 2 }}
                    variant="contained"
                    onClick={handleFilter}
                  >
                    Filter
                  </Button>
                  <Button
                    sx={{ marginLeft: 5, marginTop: 2, marginBottom: 2 }}
                    variant="outlined"
                    onClick={handleResetFilter}
                  >
                    reset
                  </Button>
                </Grid>
              </Grid>
            </Card>
            {/* <label className="text-style"> Name</label>
            <input
              type="text"
              id="floating_filled"
              className=" border item-height"
              placeholder="Name"
              value={valueFilter.Name}
              onChange={(event: any) =>
                UpdateValue("Name", event?.target.value)
              }
            /> */}
          </div>

          {/* <button
            type="button"
            onClick={handleResetFilter}
            className="col top-margin button-size item-height bg-white mx-4  px-3 border"
          >
            Reset Filter
          </button>
          <button
            type="button"
            onClick={handleFilter}
            className="col top-margin button-size item-height mx-4 px-3 border "
          >
            Filter
          </button> */}
        </div>
      </form>
    </>
  );
};

export default CustomForm;
