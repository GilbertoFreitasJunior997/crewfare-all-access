import { render, screen } from "@testing-library/react";
import { ArrowLeftIcon } from ".";

describe("ArrowLeftIcon", () => {
  it("renders correctly", () => {
    render(<ArrowLeftIcon />);
    const icon = screen.getByRole("img");

    expect(icon).toBeInTheDocument();
  });

  it("applies custom fill color", () => {
    const customFill = "#FF5733";
    render(<ArrowLeftIcon fill={customFill} />);
    const icon = screen.getByRole("img");

    const pathElement = icon.querySelector("path");
    expect(pathElement).toHaveAttribute("stroke", customFill);
  });

  it("applies custom className", () => {
    const className = "custom-class";
    render(<ArrowLeftIcon className={className} />);
    const icon = screen.getByRole("img");

    expect(icon).toHaveClass(className);
  });
});
