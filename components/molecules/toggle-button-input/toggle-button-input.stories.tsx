import { InputStoriesWrapper } from "@/lib/stories/input-stories-wrapper";
import { inputBaseMeta } from "@/lib/stories/utils";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ToggleButtonInput } from ".";

const meta: Meta<typeof ToggleButtonInput> = {
  title: "Design System/Molecules/ToggleButtonInput",
  component: ToggleButtonInput,
  args: {
    ...inputBaseMeta.args,
    label: "Toggle Button",
    name: "toggle",
    trueText: "Enabled",
    falseText: "Disabled",
  },
  argTypes: {
    ...inputBaseMeta.argTypes,
    value: {
      control: { type: "boolean" },
    },
    defaultValue: {
      control: { type: "boolean" },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "The ToggleButtonInput component allows users to toggle between two states (true/false) with clear visual feedback. It is controlled and must be used within a form context for proper state management.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ToggleButtonInput>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState<boolean>(true);

    return (
      <>
        <p>(Must be controlled without form)</p>
        <ToggleButtonInput
          {...args}
          value={value}
          onChange={setValue}
        />
        <p>Current value: {value ? "Enabled" : "Disabled"}</p>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates the ToggleButtonInput component being used in a controlled manner outside of a form. State is managed by a parent component.",
      },
    },
  },
};

export const WithForm: Story = {
  args: {
    isRequired: true,
  },
  render: (args) => (
    <InputStoriesWrapper>
      <ToggleButtonInput {...args} />
    </InputStoriesWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates the ToggleButtonInput component being used inside a form context with required validation.",
      },
    },
  },
};
