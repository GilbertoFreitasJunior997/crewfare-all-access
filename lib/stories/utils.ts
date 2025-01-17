import type { InputBase } from "@/components/atoms/input-provider";
import type { Meta } from "@storybook/react";
import type { FC } from "react";
import type { IconCustomProps } from "../types";

export const inputBaseMeta = {
  args: {
    name: "inputName",
    label: "Input",
    showLabel: true,
    isDisabled: false,
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur minus quis animi pariatur, numquam accusantium tempora eligendi temporibus, sapiente dolor earum! Veniam saepe aliquid totam molestias modi ducimus dicta rem.",
    isRequired: false,
    customValidation: undefined,
    value: undefined,
    onChange: undefined,
    group: undefined,
    defaultValue: undefined,
  },
  argTypes: {
    name: {
      control: { type: "text" },
      description: "The name of the input field.",
      defaultValue: "inputName",
    },
    label: {
      control: { type: "text" },
      description: "The label text associated with the input field.",
      defaultValue: "Label",
    },
    value: {
      description: "The value of the input field.",
    },
    onChange: {
      description: "Callback function triggered when the input value changes.",
    },
    defaultValue: {
      description: "The initial value of the input field.",
    },
    showLabel: {
      control: { type: "boolean" },
      description: "Specifies whether the label should be visible.",
      defaultValue: true,
    },
    isDisabled: {
      control: { type: "boolean" },
      description: "Disables the input field, preventing interaction.",
      defaultValue: false,
    },
    info: {
      control: { type: "text" },
      description:
        "Additional informational text displayed below the input field.",
    },
    isRequired: {
      control: { type: "boolean" },
      description: "Specifies whether the input field is required.",
      defaultValue: false,
    },
    customValidation: {
      control: { disable: true },
      description:
        "A custom validation function that returns an error message if validation fails, or undefined if validation succeeds.",
    },
    group: {
      control: {
        disable: true,
      },
    },
  },
  // biome-ignore lint/suspicious/noExplicitAny: this can be for any input
} satisfies Meta<FC<InputBase<any>>>;

export const iconMeta = {
  argTypes: {
    className: {
      control: {
        type: "text",
      },
    },
    fill: {
      control: {
        type: "color",
      },
    },
  },
} satisfies Meta<FC<IconCustomProps>>;
