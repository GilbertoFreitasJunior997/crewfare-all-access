import type { AnyObject } from "@/lib/types";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { addDays } from "date-fns";
import { useState } from "react";
import { Calendar } from ".";

const meta: Meta<typeof Calendar> = {
  title: "Design System/Atoms/Calendar",
  component: Calendar,
  args: {
    mode: "single",
    numberOfMonths: 1,
    selected: undefined,
    onSelect: fn(),
  },
  argTypes: {
    mode: {
      control: { type: "select" },
      options: ["single", "range"],
      description:
        "Defines whether the calendar selects a single date or a date range.",
    },
    numberOfMonths: {
      control: { type: "number", min: 1, max: 4 },
      description: "Number of months displayed in the calendar.",
    },
    selected: {
      control: { disable: true },
      description: "The currently selected date or range.",
    },
    disabled: {
      control: { type: "object" },
      description:
        "Object defining the disabled date range with `before` and `after` keys.",
    },
    onSelect: {
      table: { category: "Events" },
      description: "Callback triggered when a date or range is selected.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "Customized calendar component based on React-Day-Picker.",
      },
    },
  },
  render: (args) => {
    const [date, setDate] = useState<Date>();

    return (
      <Calendar
        mode="single"
        {...(args as AnyObject)}
        selected={date}
        onSelect={(...params) => {
          (args as AnyObject).onSelect?.(...params);
          // @ts-ignore
          setDate(...params);
        }}
      />
    );
  },
};
export default meta;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {};

export const Range: Story = {
  args: {
    mode: "range",
    numberOfMonths: 2,
  },
};

export const LimitedPeriod: Story = {
  args: {
    disabled: {
      before: new Date(),
      after: addDays(new Date(), 30),
    },
  },
};
