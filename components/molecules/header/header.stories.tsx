import type { Meta, StoryObj } from "@storybook/react";
import { Header } from ".";

const meta: Meta<typeof Header> = {
  title: "Design System/Molecules/Header",
  component: Header,
  parameters: {
    docs: {
      description: {
        component:
          "The Header component provides a simple and responsive layout for branding or navigation. It includes the `Logo` component centered within a black background.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => <Header />,
  parameters: {
    docs: {
      storyDescription:
        "The default Header with a centered `Logo` component in a black background. Designed for straightforward usage with minimal customization.",
    },
  },
};
