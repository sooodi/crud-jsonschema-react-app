import { Home } from "@mui/icons-material";
import App from "../App";

import { render, screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "./toolkit-util";
import userEvent from "@testing-library/user-event";
import { log } from "console";
let p = [
  {
    id: 127,
    name: "sogo",
    author: "Clemmie",
    price: "28436500",
    image: "https://picsum.photos/600/400/?random",
  },
];
// describe("List.js component", () => {
//   test("renders logo in App component", () => {
//     renderWithProviders(<App />);
//     const image = screen.getByText(/Learn React/i);
//     expect(image).toBeInTheDocument();
//   });
// });
describe("List.js component", () => {
  const log = console.log; // save original console.log function
  beforeEach(() => {
    console.log = jest.fn(); // create a new mock function for each test
  });
  afterAll(() => {
    console.log = log; // restore original console.log after all tests
  });
  test("no log", () => {
    // TODO: test something that should not log
    expect(console.log).not.toHaveBeenCalled();
  });

  // A test that checks if there is one element with a specific test id, basically testing if the listData state appears.
  test("renders the initial Redux state", () => {
    renderWithProviders(<Home />);

    const textInListJS = screen.queryByTestId("top");
    waitFor(() => expect(textInListJS).toBeInTheDocument());
    // const list = screen.getAllByTestId("list-item");
    // expect(list.length).toEqual(1);
  });
  test("renders the list", () => {
    renderWithProviders(<Home />);

    const textInListJS = screen.queryAllByTestId("list-item");
    waitFor(() => expect(textInListJS).toBeInTheDocument());
    if (textInListJS) {
      // I assume six items is a variable? If not then don't forget to double quote like "two"

      waitFor(() => expect(textInListJS.length).toEqual(65));
      // const { name } = p[0]
      // expect(screen.getByText(name)).toBeInTheDocument()
    }
  });
});
