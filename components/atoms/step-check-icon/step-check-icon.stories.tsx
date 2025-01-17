import type { Meta, StoryObj } from "@storybook/react";
import { StepCheckIcon } from ".";

const meta: Meta<typeof StepCheckIcon> = {
  title: "Design System/Atoms/StepCheckIcon",
  component: StepCheckIcon,
  args: {
    fill: "green",
  },
  argTypes: {
    fill: {
      control: {
        type: "color",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A small checkmark icon, used for indicating completion or success in a step process.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof StepCheckIcon>;

export const Default: Story = {};
