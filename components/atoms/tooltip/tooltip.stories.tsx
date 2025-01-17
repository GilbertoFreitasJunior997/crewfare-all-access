import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from ".";
import { Button } from "../button";

const meta: Meta = {
  title: "Design System/Atoms/Tooltip",
  component: () => (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Button variant="secondary">Hover over me</Button>
        </Tooltip.Trigger>
        <Tooltip.Content className="w-80">
          This is a tooltip with some helpful information. Hover over the button
          to see it.
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  ),
  parameters: {
    docs: {
      description: {
        component:
          "The `Tooltip` component is used to display additional information when a user hovers over an element. It consists of a `Root` to wrap the `Trigger` and `Content`, with the `Trigger` activating the `Content` to show the tooltip.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
