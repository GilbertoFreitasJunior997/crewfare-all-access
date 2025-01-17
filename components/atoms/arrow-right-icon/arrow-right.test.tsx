import { render, screen } from "@testing-library/react";
import { ArrowRightIcon } from ".";

describe("ArrowRightIcon", () => {
  it("renders correctly", () => {
    render(<ArrowRightIcon />);
    const icon = screen.getByRole("img");

    expect(icon).toBeInTheDocument();
  });

  it("applies custom fill color", () => {
    const customFill = "#FF5733";
    render(<ArrowRightIcon fill={customFill} />);
    const icon = screen.getByRole("img");

    const pathElement = icon.querySelector("path");
    expect(pathElement).toHaveAttribute("stroke", customFill);
  });

  it("applies custom className", () => {
    const className = "custom-class";
    render(<ArrowRightIcon className={className} />);
    const icon = screen.getByRole("img");

    expect(icon).toHaveClass(className);
  });
});
