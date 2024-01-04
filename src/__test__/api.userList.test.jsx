// UserListComponent.test.jsx
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import UserListComponent from "./UserListComponent";
beforeEach(() => {
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue([
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Doe" },
    ]),
  });
});

test("displays a list of users", async () => {
  // Render the component
  setTimeout(async () => {
    render(<UserListComponent />);
    // Wait for API call to resolve
    await waitFor(() => {
      expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
      expect(screen.getByText(/Jane Doe/i)).toBeInTheDocument();
    });
  }, 1000);
});
