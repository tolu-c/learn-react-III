import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("checks if post renders correctly", async () => {
    render(<Async />);

    const check = await screen.findAllByRole("listitem");
    expect(check).not.toHaveLength(0);
  });
});
