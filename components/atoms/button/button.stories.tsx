import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { HomeIcon } from "lucide-react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Design System/Atoms/Button",
  component: Button,
  args: {
    children: "Click me!",
    isDisabled: false,
    size: "default",
    type: "button",
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
    isDisabled: {
      control: { type: "boolean" },
      description:
        "Disables the button, removing interactivity and applying disabled styling.",
    },
    children: {
      control: { type: "text" },
    },
    type: {
      control: {
        type: "select",
      },
    },
    className: {
      control: {
        disable: true,
      },
    },
    onClick: {
      table: {
        category: "Events",
        disable: false,
      },
    },
  },
  parameters: {
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

export const Default: Story = {};
export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
  parameters: {
    docs: {
      description: {
        story:
          "This secondary button variant is ideal for less prominent actions. It has a more subdued visual style compared to the primary variant.",
      },
    },
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
  parameters: {
    docs: {
      description: {
        story:
          "This button variant uses an icon in place of text. It's great for compact actions, like navigation buttons, with the 'icon' size style applied.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "This disabled button cannot be interacted with and is styled with a subdued look to indicate its disabled state.",
      },
    },
  },
};
