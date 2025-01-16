import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { AddRowButton } from ".";

const meta: Meta<typeof AddRowButton> = {
  title: "Design System/Atoms/AddRowButton",
  component: AddRowButton,
  args: {
    children: "Add row",
    isDisabled: false,
    onClick: fn(),
  },
  argTypes: {
    isDisabled: {
      control: { type: "boolean" },
      description:
        "Disables the button, removing interactivity and applying disabled styling.",
    },
    children: {
      control: { type: "text" },
    },
    className: {
      control: {
        disable: true,
      },
    },
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
        component: "Predefined button used for adding rows (e.g. Tax/Fees)",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof AddRowButton>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};
