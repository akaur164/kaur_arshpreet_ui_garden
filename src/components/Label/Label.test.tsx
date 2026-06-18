import { render, screen } from "@testing-library/react";
import Label from "./Label";

test("Label is visible", () => {
  render(<Label text="Test Label" />);
  expect(screen.getByText("Test Label")).toBeInTheDocument();
});

test("Label text renders", () => {
  render(<Label text="Hello" />);
  expect(screen.getByText("Hello")).toBeInTheDocument();
});