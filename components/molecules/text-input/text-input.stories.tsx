// text-input.stories.tsx
import { InputStoriesWrapper } from "@/lib/stories/input-stories-wrapper";
import { inputBaseMeta } from "@/lib/stories/utils";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TextInput } from ".";

const meta: Meta<typeof TextInput> = {
  title: "Design System/Molecules/TextInput",
  component: TextInput,
  args: {
    ...inputBaseMeta.args,
    label: "Text Input",
    name: "text",
  },
  argTypes: {
    ...inputBaseMeta.argTypes,
    value: {
      control: { type: "text" },
    },
    defaultValue: {
      control: { type: "text" },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "The TextInput component is a flexible input field that can operate in both controlled and uncontrolled modes. It supports validation and integrates with form contexts.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    defaultValue: "Uncontrolled default value",
  },
  parameters: {
    docs: {
      storyDescription:
        "TextInput component in uncontrolled mode, using a default value without external state management.",
    },
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <>
        <TextInput
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
      storyDescription:
        "Demonstrates the TextInput component in controlled mode, where the state is managed by a parent component.",
    },
  },
};

export const WithForm: Story = {
  args: {
    isRequired: true,
  },
  decorators: [
    (Story) => (
      <InputStoriesWrapper>
        <Story />
      </InputStoriesWrapper>
    ),
  ],
  parameters: {
    docs: {
      storyDescription:
        "Demonstrates the TextInput component used inside a form context with validation enabled.",
    },
  },
};
