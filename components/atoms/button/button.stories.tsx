import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { HomeIcon } from "lucide-react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Design System/Atoms/Button",
  component: Button,
  args: {
    children: "Click me!",
    disabled: false,
    size: "default",
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
      description: "Defines the color scheme of the button.",
    },
    size: {
      control: { type: "select" },
      options: ["default", "icon"],
      description:
        "Specifies the size or type of the button (e.g., default or icon).",
    },
    disabled: {
      control: { type: "boolean" },
      description:
        "Disables the button, removing interactivity and applying disabled styling.",
    },
    children: {
      control: { type: "text" },
    },
  },
  parameters: {
    controls: {
      exclude: ["type", "className", "onClick"],
    },
    docs: {
      description: {
        component:
          "A versatile button component with support for different variants, sizes, and states, including primary and secondary styles, icon support, and a disabled state.",
      },
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

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
