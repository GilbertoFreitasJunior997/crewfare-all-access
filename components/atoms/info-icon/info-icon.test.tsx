import { render, screen } from "@testing-library/react";
import { InfoIcon } from "./";

describe("InfoIcon", () => {
  it("renders correctly", () => {
    render(<InfoIcon />);

    const svgElement = screen.getByRole("img");
    const pathElements = svgElement.querySelectorAll("path");

    for (const path of pathElements) {
      expect(path).toHaveAttribute("fill", "white");
    }
  });

  it("applies custom fill color", () => {
    render(<InfoIcon fill="red" />);

    const svgElement = screen.getByRole("img");
    const pathElements = svgElement.querySelectorAll("path");

    for (const path of pathElements) {
      expect(path).toHaveAttribute("fill", "red");
    }
  });

  it("applies custom className", () => {
    render(<InfoIcon className="custom-class" />);

    const svgElement = screen.getByRole("img");
    expect(svgElement).toHaveClass("custom-class");
  });
});
