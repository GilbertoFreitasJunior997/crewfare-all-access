import { iconMeta } from "@/lib/stories/utils";
import type { Meta, StoryObj } from "@storybook/react";
import { DropIndicatorIcon } from ".";

const meta: Meta<typeof DropIndicatorIcon> = {
  title: "Design System/Atoms/DropIndicatorIcon",
  component: DropIndicatorIcon,
  ...iconMeta,
  parameters: {
    docs: {
      description: {
        component:
          "An icon indicating a drop action, styled with a custom design.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DropIndicatorIcon>;

export const Default: Story = {};
