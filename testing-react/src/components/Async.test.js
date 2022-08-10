import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("checks if post renders correctly", () => {
    render(<Async />);

    const check = screen.getAllByRole("listitem");
    expect(check).not.toHaveLength(0);
  });
});
