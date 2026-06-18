import { render, screen } from "@testing-library/react";
import Dropdown from "./Dropdown";

test("Dropdown is visible", () => {
  render(<Dropdown options={["One", "Two"]} />);
  expect(screen.getByRole("combobox")).toBeInTheDocument();
});

test("Dropdown is disabled", () => {
  render(<Dropdown disabled />);
  expect(screen.getByRole("combobox")).toBeDisabled();
});