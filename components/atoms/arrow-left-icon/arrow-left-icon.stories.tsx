import type { Meta, StoryObj } from "@storybook/react";
import { ArrowLeftIcon } from ".";

const meta: Meta<typeof ArrowLeftIcon> = {
  title: "Design System/Atoms/ArrowLeftIcon",
  component: ArrowLeftIcon,
  parameters: {
    docs: {
      description: {
        component: "An arrow icon pointing to left.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof ArrowLeftIcon>;

export const Default: Story = {};
