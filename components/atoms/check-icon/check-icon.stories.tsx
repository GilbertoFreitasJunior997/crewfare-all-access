import { iconMeta } from "@/lib/stories/utils";
import type { Meta, StoryObj } from "@storybook/react";
import { CheckIcon } from ".";

const meta: Meta<typeof CheckIcon> = {
  title: "Design System/Atoms/CheckIcon",
  component: CheckIcon,
  args: {
    fill: "green",
  },
  ...iconMeta,
  parameters: {
    docs: {
      description: {
        component:
          "A simple checkmark icon used for indicating successful or completed actions.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof CheckIcon>;

export const Default: Story = {};
