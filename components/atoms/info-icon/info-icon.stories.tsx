import { iconMeta } from "@/lib/stories/utils";
import type { Meta, StoryObj } from "@storybook/react";
import { InfoIcon } from ".";

const meta: Meta<typeof InfoIcon> = {
  title: "Design System/Atoms/InfoIcon",
  component: InfoIcon,
  ...iconMeta,
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
