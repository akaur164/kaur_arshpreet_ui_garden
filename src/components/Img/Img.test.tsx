import { render, screen } from "@testing-library/react";
import Img from "./Img";

test("Img is visible", () => {
  render(<Img alt="Test image" />);
  expect(screen.getByAltText("Test image")).toBeInTheDocument();
});

test("Img is grey when disabled", () => {
  render(<Img alt="Disabled image" disabled />);
  expect(screen.getByAltText("Disabled image")).toHaveStyle("opacity: 0.6");
});