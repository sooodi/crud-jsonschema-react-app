import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Button from "@mui/material/Button";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Grid from "@mui/material/Grid";

const ActionButtonsProduct = ({
  updateProduct,
  deleteProduct,
}: {
  updateProduct: (filed: any) => void;
  deleteProduct: (filed: any) => void;
}) => {
  return (
    <Grid>
      {" "}
      <Button variant="text" onClick={updateProduct}>
        <EditOutlinedIcon />
      </Button>
      <Button variant="text" onClick={deleteProduct}>
        <DeleteOutlinedIcon />
      </Button>
    </Grid>
  );
};

const ListProduct = ({
  products,
  updateProduct,
  deleteProduct,
}: {
  products: any;
  updateProduct: (filed: any) => void;
  deleteProduct: (filed: any) => void;
}) => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="flex flex-wrap -mx-1 lg:-mx-4 ">
      {products.map((field: any) => (
        <div
          className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
          data-testid="list-item"
        >
          <article className="overflow-hidden rounded-lg shadow-lg">
            <a href="#">
              <img
                alt="Placeholder"
                className="block h-auto w-full"
                src={field.image}
              />
            </a>

            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 className="text-lg">
                <a className="no-underline hover:underline text-black" href="#">
                  {field.name}
                </a>
              </h1>
              <p className="text-grey-darker text-sm">
                {parseFloat((field.price / 100).toString()).toFixed(1)} $
              </p>
            </header>

            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
              <a
                className="flex items-center no-underline hover:underline text-black"
                href="#"
              >
                <img
                  alt="Placeholder"
                  className="block rounded-full"
                  src="https://picsum.photos/32/32/?random"
                />
                <p className="ml-2 text-sm"> {field.author}</p>
              </a>

              <ActionButtonsProduct
                updateProduct={function (): void {
                  updateProduct(field);
                }}
                deleteProduct={function (): void {
                  deleteProduct(field);
                }}
              />
            </footer>
          </article>
        </div>
      ))}
    </div>
  );
};

export default ListProduct;
