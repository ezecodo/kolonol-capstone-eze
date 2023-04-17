import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

test("renders all four buttons", () => {
  render(<Home />);
  expect(
    screen.getByRole("button", { name: /Latin Restaurants/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /Latin Music/i })
  ).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Tandem/i })).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /Embajadas/i })
  ).toBeInTheDocument();
});
