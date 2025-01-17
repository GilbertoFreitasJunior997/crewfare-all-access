import { iconMeta } from "@/lib/stories/utils";
import type { Meta, StoryObj } from "@storybook/react";
import { AlertIcon } from ".";

const meta: Meta<typeof AlertIcon> = {
  title: "Design System/Atoms/AlertIcon",
  component: AlertIcon,
  ...iconMeta,
  parameters: {
    docs: {
      description: {
        component:
          "An alert icon component that displays a red circular background with a white alert symbol.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof AlertIcon>;

export const Default: Story = {};
