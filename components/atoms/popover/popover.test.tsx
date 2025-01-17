import { render, screen } from "@testing-library/react";
import { Popover } from ".";
import { Button } from "../button";

// actions like clicking arent tested because its lib scoped
describe("Popover", () => {
  it("renders correctly", () => {
    render(
      <Popover.Root>
        <Popover.Trigger asChild>
          <Button variant="secondary">Open Popover</Button>
        </Popover.Trigger>
        <Popover.Content className="w-80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ea
          necessitatibus vel vitae, expedita, rem delectus architecto laboriosam
          suscipit consectetur doloribus sapiente quos cum optio minus! Suscipit
          odio natus quod!
        </Popover.Content>
      </Popover.Root>,
    );

    const trigger = screen.getByRole("button");
    expect(trigger).toBeInTheDocument();
  });
});
