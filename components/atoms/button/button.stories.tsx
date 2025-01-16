import type { Meta, StoryObj } from "@storybook/react";
import { HomeIcon } from "lucide-react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Atoms/Button",
  component: Button,
  args: {
    children: "Click me!",
    disabled: false,
    size: "default",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
    size: {
      control: { type: "select" },
      options: ["default", "icon"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    children: {
      control: { type: "text" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Icon: Story = {
  args: {
    variant: "secondary",
    children: <HomeIcon />,
    size: "icon",
  },
  argTypes: {
    children: { control: false },
  },
};
