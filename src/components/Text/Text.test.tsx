import { render, screen } from "@testing-library/react";
import Text from "./Text";

test("Text is visible", () => {
  render(<Text text="Hello Text" />);
  expect(screen.getByText("Hello Text")).toBeInTheDocument();
});

test("Text is grey when disabled", () => {
  render(<Text text="Disabled Text" disabled />);
  expect(screen.getByText("Disabled Text")).toHaveStyle("color: grey");
});