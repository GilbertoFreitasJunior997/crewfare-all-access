import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./";

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: "Click me" });

    expect(button).toBeInTheDocument();
  });

  it("renders children content", () => {
    render(<Button>Custom Content</Button>);
    const button = screen.getByText("Custom Content");

    expect(button).toBeInTheDocument();
  });

  it("applies correct button type", () => {
    const { rerender } = render(<Button>Button</Button>);
    const button = screen.getByRole("button");

    expect(button).toHaveAttribute("type", "button");

    rerender(<Button type="submit">Button</Button>);
    const rerenderedButton = screen.getByRole("button");

    expect(rerenderedButton).toHaveAttribute("type", "submit");
  });

  it("handles disabled state correctly", () => {
    render(<Button isDisabled>Button</Button>);
    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
  });

  it("handles click events when enabled", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("prevents click events when disabled", () => {
    const handleClick = jest.fn();
    render(
      <Button
        isDisabled
        onClick={handleClick}
      >
        Click me
      </Button>,
    );
    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
