import { render, screen } from "@testing-library/react";
import { Container } from ".";

describe("Container", () => {
  it("renders correctly", () => {
    render(<Container>Content</Container>);
    const container = screen.getByTestId("container");

    expect(container).toBeInTheDocument();
    expect(container).toHaveTextContent("Content");
  });

  it("applies custom className", () => {
    const customClass = "custom-class";
    render(<Container className={customClass}>Content</Container>);
    const container = screen.getByTestId("container");

    expect(container).toHaveClass(customClass);
  });

  it("renders children correctly", () => {
    render(
      <Container>
        <div>Children</div>
      </Container>,
    );
    const children = screen.getByText("Children");

    expect(children).toBeInTheDocument();
  });
});
