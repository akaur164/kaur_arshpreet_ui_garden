import { render, screen } from "@testing-library/react";
import RadioButton from "./RadioButton";

test("RadioButton is visible", () => {
  render(<RadioButton label="Option One" />);
  expect(screen.getByText("Option One")).toBeInTheDocument();
});

test("RadioButton is disabled", () => {
  render(<RadioButton label="Disabled Option" disabled />);
  expect(screen.getByRole("radio")).toBeDisabled();
});