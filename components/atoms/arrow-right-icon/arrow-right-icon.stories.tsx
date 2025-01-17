import { iconMeta } from "@/lib/stories/utils";
import type { Meta, StoryObj } from "@storybook/react";
import { ArrowRightIcon } from ".";

const meta: Meta<typeof ArrowRightIcon> = {
  title: "Design System/Atoms/ArrowRightIcon",
  component: ArrowRightIcon,
  ...iconMeta,
  parameters: {
    docs: {
      description: {
        component: "An arrow icon pointing to right.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof ArrowRightIcon>;

export const Default: Story = {};
