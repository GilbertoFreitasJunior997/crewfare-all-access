import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from ".";

const meta: Meta<typeof Logo> = {
  title: "Design System/Atoms/Logo",
  component: Logo,
  parameters: {
    docs: {
      description: {
        component:
          "The logo component representing the brand's visual identity.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {};
