import { InputStoriesWrapper } from "@/lib/stories/input-stories-wrapper";
import { inputBaseMeta } from "@/lib/stories/utils";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { CheckboxInput } from ".";

const meta: Meta<typeof CheckboxInput> = {
  title: "Design System/Molecules/CheckboxInput",
  component: CheckboxInput,
  args: {
    ...inputBaseMeta.args,
    label: "Accept Terms",
    name: "terms",
  },
  argTypes: {
    ...inputBaseMeta.argTypes,
    value: {
      control: {
        type: "boolean",
      },
    },
    defaultValue: {
      control: {
        type: "boolean",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "The CheckboxInput component is used to capture a boolean value (true or false) from the user. It allows users to select or deselect an option and is ideal for terms and conditions agreements, preferences, or any binary choices. The component is styled with Tailwind CSS and includes visual feedback when checked or unchecked.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CheckboxInput>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Displays the checkbox with the label 'Accept Terms' and allows toggling.",
      },
    },
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState<boolean>(false);

    return (
      <>
        <CheckboxInput
          {...args}
          value={value}
          onChange={setValue}
        />
        <p>{`Value: ${String(value)}`}</p>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Uses local state to control the checkbox value and display it as text.",
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
          "Demonstrates how the CheckboxInput can be used inside a form context with required validation enabled.",
      },
    },
  },
};
