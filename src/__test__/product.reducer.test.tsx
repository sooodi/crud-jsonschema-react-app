import {
  productReducer,
  setProduct,
  deleteProduct,
  PRODUCT_INITIAL_STATE,
} from "../store/product/product.reducer";

test("should return the initial state", () => {
  expect(productReducer(undefined, { type: "" })).toEqual({
    listProduct: [],
    selectedProduct: {},
    filteredProduct: [],
    filterObj: {
      Name: "",
      Type: "All",
    },
  });
});

test("should handle get all products", () => {
  const previousState: any = PRODUCT_INITIAL_STATE;

  expect(
    productReducer(
      previousState,
      setProduct([
        {
          id: 127,
          name: "sogo",
          author: "Clemmie",
          price: "28436500",
          image: "https://picsum.photos/600/400/?random",
        },
      ])
    )
  ).toEqual({
    listProduct: [
      {
        id: 127,
        name: "sogo",
        author: "Clemmie",
        price: "28436500",
        image: "https://picsum.photos/600/400/?random",
      },
    ],
    selectedProduct: {},
    filteredProduct: [
      {
        id: 127,
        name: "sogo",
        author: "Clemmie",
        price: "28436500",
        image: "https://picsum.photos/600/400/?random",
      },
    ],
    filterObj: {
      Name: "",
      Type: "All",
    },
  });
});

test("should handle  delete a product", () => {
  let data = [
    {
      id: 127,
      name: "sogo",
      author: "Clemmie",
      price: "28436500",
      image: "https://picsum.photos/600/400/?random",
    },
    {
      name: "tom",
      price: "888",
      image: "https://picsum.photos/600/400/?random",
      author: "sudy.taher2023@gmail.com",
      id: 131,
    },
  ];
  const previousState: any = {
    listProduct: data,
    selectedProduct: {},
    filteredProduct: data,
    filterObj: {
      Name: "",
      Type: "All",
    },
  };

  expect(
    productReducer(
      previousState,
      deleteProduct({
        id: 127,
        name: "sogo",
        author: "Clemmie",
        price: "28436500",
        image: "https://picsum.photos/600/400/?random",
      })
    )
  ).toEqual({
    listProduct: [
      {
        name: "tom",
        price: "888",
        image: "https://picsum.photos/600/400/?random",
        author: "sudy.taher2023@gmail.com",
        id: 131,
      },
    ],
    selectedProduct: {},
    filteredProduct: [
      {
        name: "tom",
        price: "888",
        image: "https://picsum.photos/600/400/?random",
        author: "sudy.taher2023@gmail.com",
        id: 131,
      },
    ],
    filterObj: {
      Name: "",
      Type: "All",
    },
  });
});
// test('should handle a todo being added to an existing list', () => {
//   const previousState: Todo[] = [
//     { text: 'Run the tests', completed: true, id: 0 }
//   ]

//   expect(reducer(previousState, todoAdded('Use Redux'))).toEqual([
//     { text: 'Run the tests', completed: true, id: 0 },
//     { text: 'Use Redux', completed: false, id: 1 }
//   ])
// })
