import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("checks for the hello world", () => {
    // arrange
    render(<Greeting />);
    // acts
    // => noting to do
    // asserts
    const check = screen.getByText(/Hello world/, { exact: false });
    expect(check).toBeInTheDocument();
  });
});
