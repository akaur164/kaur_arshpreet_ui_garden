import { render, screen } from "@testing-library/react";
import Card from "./Card";

test("Card is visible", () => {
  render(<Card title="Test Card" />);
  expect(screen.getByText("Test Card")).toBeInTheDocument();
});

test("Card is grey when disabled", () => {
  render(<Card title="Disabled Card" disabled />);
  expect(screen.getByText("Disabled Card").parentElement).toHaveStyle(
    "background-color: grey"
  );
});