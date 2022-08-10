import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  test("checks for the unchanged text", () => {
    // arrange
    render(<Greeting />);
    // acts
    // => noting to do
    // asserts
    const check = screen.getByText(/good to see you!/);
    expect(check).toBeInTheDocument();
  });

  test("checks for the changed text if button was clicked", () => {
    // arrange
    render(<Greeting />);

    // acts
    const button = screen.getByRole("button");
    userEvent.click(button);
    
    // asserts
    const check = screen.getByText(/Changed!/);
    expect(check).toBeInTheDocument();
  });

  test("checks for the unchanged text if button was clicked", () => {
    // arrange
    render(<Greeting />);

    // acts
    const button = screen.getByRole("button");
    userEvent.click(button);

    // asserts
    const check = screen.queryByText(/good to see you!/, { exact: false });
    expect(check).toBeNull();
  })
});
