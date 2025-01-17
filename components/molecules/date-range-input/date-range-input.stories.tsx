import { InputStoriesWrapper } from "@/lib/stories/input-stories-wrapper";
import { inputBaseMeta } from "@/lib/stories/utils";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DateRangeInput, type DateRangeInputValue } from ".";

const meta: Meta<typeof DateRangeInput> = {
  title: "Design System/Molecules/DateRangeInput",
  component: DateRangeInput,
  args: {
    ...inputBaseMeta.args,
    label: "Select Date Range",
    name: "dateRange",
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
  },
  parameters: {
    docs: {
      description: {
        component:
          "The DateRangeInput component allows the user to select a range of dates using a calendar. The input is controlled and displays the selected date range in the format 'MM/DD/YYYY - MM/DD/YYYY'. It includes a calendar popover for date selection and supports disabled dates within a specified range.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DateRangeInput>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState<DateRangeInputValue>(undefined);

    return (
      <>
        <p>(Must be controlled without form)</p>
        <DateRangeInput
          {...args}
          value={value}
          onChange={setValue}
        />
        <p>
          {value ? `${value.from} - ${value.to}` : "No date range selected"}
        </p>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Uses local state to control the selected date range and displays it as text.",
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
          "Demonstrates how the DateRangeInput can be used inside a form context with required validation enabled.",
      },
    },
  },
};
