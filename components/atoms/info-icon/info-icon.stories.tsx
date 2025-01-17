import type { Meta, StoryObj } from "@storybook/react";
import { InfoIcon } from ".";

const meta: Meta<typeof InfoIcon> = {
  title: "Design System/Atoms/InfoIcon",
  component: InfoIcon,
  parameters: {
    docs: {
      description: {
        component:
          "A simple info icon, typically used to represent informational messages.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof InfoIcon>;

export const Default: Story = {};
