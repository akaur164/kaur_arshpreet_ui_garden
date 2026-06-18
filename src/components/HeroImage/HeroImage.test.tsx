import { render, screen } from "@testing-library/react";
import HeroImage from "./HeroImage";

test("HeroImage is visible", () => {
  render(<HeroImage title="Test Hero" />);
  expect(screen.getByText("Test Hero")).toBeInTheDocument();
});

test("HeroImage is grey when disabled", () => {
  render(<HeroImage title="Disabled Hero" disabled />);
  expect(screen.getByText("Disabled Hero").parentElement).toHaveStyle(
    "opacity: 0.6"
  );
});