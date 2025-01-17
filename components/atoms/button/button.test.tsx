import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./index";

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button>Click me</Button>);

    expect(
      screen.getByRole("button", { name: "Click me" }),
    ).toBeInTheDocument();
  });

  it("renders children content", () => {
    render(<Button>Custom Content</Button>);

    expect(screen.getByText("Custom Content")).toBeInTheDocument();
  });

  it("applies correct button type", () => {
    const { rerender } = render(<Button>Button</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");

    rerender(<Button type="submit">Button</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
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

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
