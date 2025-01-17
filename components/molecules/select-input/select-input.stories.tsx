import { InputStoriesWrapper } from "@/lib/stories/input-stories-wrapper";
import { inputBaseMeta } from "@/lib/stories/utils";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { SelectInput, type SelectInputProps } from ".";

const meta: Meta<typeof SelectInput> = {
  title: "Design System/Molecules/SelectInput",
  component: SelectInput,
  args: {
    ...inputBaseMeta.args,
    label: "Select an option",
    name: "select",
    items: [
      { value: "option-1", label: "Option 1" },
      { value: "option-2", label: "Option 2" },
      { value: "option-3", label: "Option 3" },
    ],
  },
  argTypes: {
    ...inputBaseMeta.argTypes,
    value: {
      control: {
        type: "object",
      },
    },
    defaultValue: {
      control: {
        type: "object",
      },
    },
    items: {
      control: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "The SelectInput component provides a dropdown menu with customizable items. It supports controlled behavior, including label interaction and dynamic updates.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SelectInput>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Uncontrolled SelectInput changing values via user input.",
      },
    },
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState<
      SelectInputProps["items"][0] | undefined
    >(args.items[0]);

    return (
      <>
        <SelectInput
          {...args}
          value={value}
          onChange={setValue}
        />
        <p>Current selection: {value?.label ?? "None"}</p>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Uses local state to control the value of the SelectInput and displays the selected item's label as text.",
      },
    },
  },
};

export const WithCustomItems: Story = {
  args: {
    items: [
      { value: "custom-1", label: "Custom Option 1" },
      { value: "custom-2", label: "Custom Option 2" },
    ],
  },
  render: (args) => {
    const [value, setValue] = useState<
      SelectInputProps["items"][0] | undefined
    >(args.items[0]);

    return (
      <>
        <SelectInput
          {...args}
          value={value}
          onChange={setValue}
        />
        <p>Current selection: {value?.label ?? "None"}</p>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates a SelectInput with custom items and controlled behavior.",
      },
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
      description: {
        story:
          "Demonstrates the SelectInput usage in a form context with required validation enabled.",
      },
    },
  },
};
