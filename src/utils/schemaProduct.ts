import * as yup from "yup";


export const productSchema = yup.object().shape({
    name: yup.string().required(),
    price: yup
      .string()
      .test(
        "len",
        "Price can not  be empty & at least 3 characters and not more than 10",
        (val: any) => {
          if (val == undefined) {
            return true;
          }
          return val.length == 0 || (val.length >= 3 && val.length <= 10);
        }
      )
      .required(),
  });