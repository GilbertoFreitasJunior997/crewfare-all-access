import { FormProvider } from "@/components/atoms/form-provider";
import { useForm } from "@/hooks/use-form";
import type { Meta, StoryObj } from "@storybook/react";
import { addDays } from "date-fns";
import { EventStartEndDates } from ".";

const meta: Meta<typeof EventStartEndDates> = {
  title: "Design System/Organisms/EventStartEndDates",
  component: EventStartEndDates,
  decorators: [
    (Story) => {
      const form = useForm();

      return (
        <FormProvider form={form}>
          <Story />
        </FormProvider>
      );
    },
  ],
  args: {
    hasBookableRange: true,
    disabledDates: undefined,
  },
  argTypes: {
    hasBookableRange: {
      control: "boolean",
      description:
        "Controls whether users can select date ranges. If `false`, all inputs are disabled.",
    },
    disabledDates: {
      control: "object",
      description:
        "An optional object defining date intervals that are disabled for selection.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "The `EventStartEndDates` component manages a list of date ranges for events. It supports adding and removing rows dynamically and handles validation through the form provider.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof EventStartEndDates>;

export const Default: Story = {};

export const LimitedPeriod: Story = {
  args: {
    hasBookableRange: true,
    disabledDates: {
      before: new Date(),
      after: addDays(new Date(), 30),
    },
  },
  parameters: {
    docs: {
      storyDescription:
        "Demonstrates the `EventStartEndDates` component with a limited period, where date ranges before today and a month after are disabled.",
    },
  },
};
