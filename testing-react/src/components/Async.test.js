import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("checks if post renders correctly", async () => {
    window.fetch = jest.fn()
    window.fetch.mockResolvedValue({
      json: async () => ([{ title: "post 1" }, { title: "post 2" }])
    });
    // .mockImplementation(() => {
    //   return Promise.resolve({
    //     json: () => Promise.resolve([{ title: "post 1" }, { title: "post 2" }]),
    //   });
    // });
    render(<Async />);

    const check = await screen.findAllByRole("listitem");
    expect(check).not.toHaveLength(0);
  });
});
