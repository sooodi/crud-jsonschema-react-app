import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useEditAddProductContiner } from "../hook/containers/useEditAddProductContiner";

const EditProduct = () => {
  const {
    fields,
    valuesState,
    errorMessage,
    selectedProduct,
    addEditProduct,
    handleChange,
    loading,
    error,
    updateLoading,
    updateError,
  } = useEditAddProductContiner();

  return (
    <div className="row d-flex align-items-center px-4 mb-5">
      <div className="col d-flex flex-column ">
        <Card sx={{ padding: 3 }}>
          <p className="text-red-400  ml-16 mb-4">{errorMessage}</p>
          <Grid container spacing={2}>
            <Grid item xs={9} sx={{ marginLeft: 3 }}>
              {fields.map((field) => (
                <TextField
                  label={field.labelText}
                  sx={{ marginLeft: 5 }}
                  onChange={handleChange}
                  value={valuesState[field.id]}
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  required={field.isRequired}
                  defaultValue={field.placeholder}
                  size="small"
                  prefix={field.prefix}
                />
              ))}

              <Button
                sx={{ marginLeft: 5 }}
                variant="outlined"
                onClick={() => addEditProduct("edit")}
              >
                Edit
              </Button>

              <Button
                sx={{ marginLeft: 5 }}
                variant="contained"
                color="success"
                onClick={() => addEditProduct("add")}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </Card>{" "}
      </div>{" "}
    </div>
  );
};

export default EditProduct;
function dispatch(arg0: {
  payload: any;
  type: "product/selectedProductForEdit";
}) {
  throw new Error("Function not implemented.");
}
