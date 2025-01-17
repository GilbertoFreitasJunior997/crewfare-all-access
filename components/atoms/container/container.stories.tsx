import type { Meta, StoryObj } from "@storybook/react";
import { Container } from ".";

const meta: Meta<typeof Container> = {
  title: "Design System/Atoms/Container",
  component: Container,
  parameters: {
    docs: {
      description: {
        component:
          "A flexible container component with border, padding, and rounded corners. It accepts children and allows additional styling via the `className` prop.",
      },
    },
  },
  argTypes: {
    className: {
      control: { type: "text" },
      defaultValue: "",
    },
    children: {
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: "This is a container",
    className: "",
  },
};

export const Customized: Story = {
  args: {
    children: "This is a customized container",
    className: "bg-background-accent text-white shadow-lg",
  },
};
