import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { type MouseEvent, useRef, useState } from "react";
import { SaveButton, saveButtonAnimationDurationMs } from ".";

const meta: Meta<typeof SaveButton> = {
  title: "Design System/Molecules/SaveButton",
  component: SaveButton,
  args: {
    isShaking: false,
    onClick: fn(),
  },
  argTypes: {
    className: {
      control: {
        disable: true,
      },
    },
    isShaking: {
      control: {
        type: "boolean",
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
        component: "A button component that shakes when `isShaking` is true",
      },
    },
  },
  render: (args) => {
    const [isShaking, setIsShaking] = useState(!!args.isShaking);
    const timeout = useRef<ReturnType<typeof setTimeout>>(null);

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      args.onClick?.(e);
      setIsShaking(true);

      if (timeout.current) {
        clearTimeout(timeout.current);
      }

      timeout.current = setTimeout(() => {
        setIsShaking(false);
      }, saveButtonAnimationDurationMs);
    };

    return (
      <SaveButton
        {...args}
        isShaking={isShaking || args.isShaking}
        onClick={handleClick}
      />
    );
  },
};
export default meta;

type Story = StoryObj<typeof SaveButton>;

export const Default: Story = {};
