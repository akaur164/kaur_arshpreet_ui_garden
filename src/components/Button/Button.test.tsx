import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import Button from "./Button";

test("Button is visible", () => {
  render(<Button text="Click Me" />);
  expect(screen.getByText("Click Me")).toBeInTheDocument();
});

test("Button is disabled", () => {
  render(<Button text="Disabled" disabled />);
  expect(screen.getByText("Disabled")).toBeDisabled();
});