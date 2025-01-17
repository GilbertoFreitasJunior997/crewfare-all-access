import type { Meta, StoryObj } from "@storybook/react";
import { StepItem } from ".";

const meta: Meta<typeof StepItem> = {
  title: "Design System/Atoms/StepItem",
  component: StepItem,
  args: {
    index: 1,
    step: { name: "First Step", component: () => null },
    status: "indeterminate",
    isActive: false,
    onSelect: () => {},
  },
  argTypes: {
    index: {
      control: {
        type: "number",
        min: 0,
        max: 5,
      },
    },
    status: {
      control: {
        type: "select",
        options: ["indeterminate", "success", "error"],
      },
    },
    isActive: {
      control: {
        type: "boolean",
      },
    },
    onSelect: { action: "onSelect" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "The `StepItem` component represents a single step in the stepper process, showing different styles based on its status (indeterminate, success, error) and whether it's active or not.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof StepItem>;

export const Default: Story = {};

export const SuccessStep: Story = {
  args: {
    status: "success",
    isActive: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The step item is marked as successful and is currently active. This indicates the user has completed this step.",
      },
    },
  },
};

export const ErrorStep: Story = {
  args: {
    status: "error",
    isActive: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The step item is marked with an error status, indicating a problem with the step. It's not active.",
      },
    },
  },
};

export const ActiveStep: Story = {
  args: {
    isActive: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The step item is marked as active, even though its status could be `indeterminate`, `success`, or `error`. This can be used to highlight the current step.",
      },
    },
  },
};
