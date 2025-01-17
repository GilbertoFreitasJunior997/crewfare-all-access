import { render, screen } from "@testing-library/react";
import { Logo } from ".";

describe("Logo", () => {
  it("renders correctly", () => {
    render(<Logo />);

    const logo = screen.getByRole("img");
    expect(logo).toBeInTheDocument();
  });
});
