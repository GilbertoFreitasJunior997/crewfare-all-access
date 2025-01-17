import { render, screen } from "@testing-library/react";
import { AlertIcon } from ".";

describe("AlertIcon", () => {
  it("renders correctly", () => {
    render(<AlertIcon />);
    const icon = screen.getByRole("img");

    expect(icon).toBeInTheDocument();
  });

  it("applies custom fill color", () => {
    const customFill = "#FF5733";
    render(<AlertIcon fill={customFill} />);
    const icon = screen.getByRole("img");

    const rectElement = icon.querySelector("rect");
    expect(rectElement).toHaveAttribute("fill", customFill);
  });

  it("applies custom className", () => {
    const className = "custom-class";
    render(<AlertIcon className={className} />);
    const icon = screen.getByRole("img");

    expect(icon).toHaveClass(className);
  });
});
