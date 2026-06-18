import { render, screen } from "@testing-library/react";
import Table from "./Table";

test("Table is visible", () => {
  render(<Table />);
  expect(screen.getByText("Name")).toBeInTheDocument();
});

test("Table contains data", () => {
  render(<Table />);
  expect(screen.getByText("Arshpreet")).toBeInTheDocument();
});