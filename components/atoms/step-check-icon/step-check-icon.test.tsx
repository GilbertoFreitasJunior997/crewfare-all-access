import { render, screen } from "@testing-library/react";
import { StepCheckIcon } from ".";

describe("StepCheckIcon", () => {
  it("renders correctly", () => {
    render(<StepCheckIcon />);
    const icon = screen.getByRole("img");

    expect(icon).toBeInTheDocument();
  });

  it("applies custom fill color", () => {
    const customFill = "#FF5733";
    render(<StepCheckIcon fill={customFill} />);
    const icon = screen.getByRole("img");

    const pathElement = icon.querySelector("path");
    expect(pathElement).toHaveAttribute("stroke", customFill);
  });

  it("applies custom className", () => {
    const className = "custom-class";
    render(<StepCheckIcon className={className} />);
    const icon = screen.getByRole("img");

    expect(icon).toHaveClass(className);
  });
});
