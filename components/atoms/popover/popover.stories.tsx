import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from ".";
import { Button } from "../button";

const meta: Meta = {
  title: "Design System/Atoms/Popover",
  component: () => (
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
    </Popover.Root>
  ),
  parameters: {
    docs: {
      description: {
        component:
          "Popover is a component used to display content in a floating box that appears when triggered by a user interaction. It is composed of three parts: the `Root`, the `Trigger`, and the `Content`. The `Trigger` activates the `Content`, and the `Root` wraps the trigger and content together.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PopoverDemo: Story = {};
