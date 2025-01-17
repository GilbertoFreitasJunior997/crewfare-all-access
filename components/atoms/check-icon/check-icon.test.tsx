import { render, screen } from "@testing-library/react";
import { CheckIcon } from ".";

describe("CheckIcon", () => {
  it("renders correctly", () => {
    render(<CheckIcon />);
    const icon = screen.getByRole("img");

    expect(icon).toBeInTheDocument();
  });

  it("applies custom fill color", () => {
    const customFill = "#FF5733";
    render(<CheckIcon fill={customFill} />);
    const icon = screen.getByRole("img");

    const pathElement = icon.querySelector("path");
    expect(pathElement).toHaveAttribute("fill", customFill);
  });

  it("applies custom className", () => {
    const className = "custom-class";
    render(<CheckIcon className={className} />);
    const icon = screen.getByRole("img");

    expect(icon).toHaveClass(className);
  });
});
