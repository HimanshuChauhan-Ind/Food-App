import { render, screen } from "@testing-library/react";
import Help from "../Help";
import "@testing-library/jest-dom";

test("Help page heading test", () => {
  render(<Help />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("Testing the button", () => {
  render(<Help />);

  const button = screen.getByText("Submit");

  expect(button).toBeInTheDocument();
});
