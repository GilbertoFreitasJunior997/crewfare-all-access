import { InputStoriesWrapper } from "@/lib/stories/input-stories-wrapper";
import { inputBaseMeta } from "@/lib/stories/utils";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { NumberInput } from ".";

const meta: Meta<typeof NumberInput> = {
  title: "Design System/Molecules/NumberInput",
  component: NumberInput,
  args: {
    ...inputBaseMeta.args,
    label: "Value",
    name: "value",
  },
  argTypes: {
    ...inputBaseMeta.argTypes,
    value: {
      control: {
        type: "number",
      },
    },
    defaultValue: {
      control: {
        type: "number",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "The NumberInput component allows the user to input a numerical value with support for incrementing and decrementing using buttons. It is controlled and includes an optional suffix, a minimum value, and an option to restrict to integer input. Ideal for use cases like quantity inputs or price adjustments.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState<number>(1);

    return (
      <>
        <p>(Must be controlled without form)</p>
        <NumberInput
          {...args}
          value={value}
          onChange={setValue}
        />
        <p>Current value: {value}</p>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Uses local state to control the value of the NumberInput and displays it as text.",
      },
    },
  },
};

export const WithSuffix: Story = {
  args: {
    suffix: "kg",
  },
  render: (args) => {
    const [value, setValue] = useState<number>(1);

    return (
      <>
        <NumberInput
          {...args}
          value={value}
          onChange={setValue}
        />
        <p>Current value: {value} kg</p>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates the NumberInput with a suffix, which appears next to the value when the input is not focused.",
      },
    },
  },
};

export const WithMinValue: Story = {
  args: {
    min: 5,
    allowIntegersOnly: true,
  },
  render: (args) => {
    const [value, setValue] = useState<number>(5);

    return (
      <>
        <NumberInput
          {...args}
          value={value}
          onChange={setValue}
        />
        <p>Current value: {value}</p>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Shows how the NumberInput works with a minimum value, preventing the user from entering a number below the specified value.",
      },
    },
  },
};

export const WithForm: Story = {
  args: {
    isRequired: true,
  },
  decorators: (Story) => (
    <InputStoriesWrapper>
      <Story />
    </InputStoriesWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Shows how the NumberInput works within a form context with validation enabled.",
      },
    },
  },
};
