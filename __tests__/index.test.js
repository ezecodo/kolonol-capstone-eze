import Home from "../pages";
import { render, screen } from "@testing-library/react";
import React from "react";

/* test("test", () => {
  render(<Home />);
  const element = screen.getByRole("heading", {
    name: /🔱/,
  });
  expect(element).toBeInTheDocument();
});
 */

test("renders a Latin Restaurants button", () => {
  const { getByText } = render(<Home />);
  const button = getByText("Latin Restaurants");
  expect(button).toBeInTheDocument();
});
