import { render, screen } from "@testing-library/react";
import { DropIndicatorIcon } from ".";

describe("DropIndicatorIcon", () => {
  it("renders correctly", () => {
    render(<DropIndicatorIcon />);
    const icon = screen.getByRole("img");

    expect(icon).toBeInTheDocument();
  });

  it("applies custom fill color", () => {
    const customFill = "#FF5733";
    render(<DropIndicatorIcon fill={customFill} />);
    const icon = screen.getByRole("img");

    const pathElement = icon.querySelector("path");
    expect(pathElement).toHaveAttribute("fill", customFill);
  });

  it("applies custom className", () => {
    const customClass = "custom-class";
    render(<DropIndicatorIcon className={customClass} />);
    const icon = screen.getByRole("img");

    expect(icon).toHaveClass(customClass);
  });
});
