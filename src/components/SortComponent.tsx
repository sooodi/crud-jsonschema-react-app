import { FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import { useDispatch } from "react-redux";
import { setProduct } from "../store/product/product.reducer";

const SortComponent = ({
  data,
  isAscending,
  setIsAscending,
}: {
  isAscending: number;
  setIsAscending: (index: number) => void;
  data: any;
}) => {
  // it is better to use generator for data props , may we face problem if user put a diffrent variable instead array , I was in hurry so I set any

  const dispatch = useDispatch();
  function sortByText(index: number) {
    if (index == 0) {
      setIsAscending(index);
      return;
    }
    let arr = [...data];
    let newData = arr.sort((a: any, b: any) => a.name.localeCompare(b.name));

    // we Descending  , so we should reverse then change state
    if (index === 2) dispatch(setProduct(newData.reverse()));
    else dispatch(setProduct(newData));
    setIsAscending(index);
  }

  return (
    <Grid container rowSpacing={1} columnSpacing={3}>
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        sx={{ marginLeft: 3 }}
      >
        <FormControlLabel
          control={
            <Radio checked={isAscending === 1} onClick={() => sortByText(1)} />
          }
          label="Ascending"
        />
        <FormControlLabel
          control={
            <Radio checked={isAscending === 2} onClick={() => sortByText(2)} />
          }
          label="Descending"
        />
        {/* we do not need sort becuase of speed in large list , so should add this for first load, although  with better ux ,may not this  */}
        <FormControlLabel
          control={
            <Radio checked={isAscending === 0} onClick={() => sortByText(0)} />
          }
          label="Reset to Defualt"
        />
      </RadioGroup>{" "}
    </Grid>
  );
};

export default SortComponent;
