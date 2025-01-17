import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { TrashButton } from ".";

const meta: Meta<typeof TrashButton> = {
  title: "Design System/Atoms/TrashButton",
  component: TrashButton,
  args: {
    onClick: fn(),
  },
  argTypes: {
    onClick: {
      table: {
        category: "Events",
        disable: false,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "The TrashButton component is a button styled to look like a trash icon. It is typically used for actions such as deleting or removing items. The button is customizable with additional classes and has a hover effect.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TrashButton>;

export const Default: Story = {
  args: {},
};

export const Custom: Story = {
  args: {
    className: "bg-primary",
  },
};
