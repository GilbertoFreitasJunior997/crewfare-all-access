import { FormProvider } from "@/components/atoms/form-provider";
import { StepperProvider } from "@/components/atoms/stepper-provider";
import { useForm } from "@/hooks/use-form";
import { steps } from "@/lib/steps";
import type { Meta, StoryObj } from "@storybook/react";
import { DatesStep } from ".";

const meta: Meta<typeof DatesStep> = {
  title: "Design System/Templates/DatesStep",
  component: DatesStep,
  decorators: [
    (Story) => {
      const form = useForm();

      return (
        <FormProvider form={form}>
          <StepperProvider steps={steps}>
            <Story />
          </StepperProvider>
        </FormProvider>
      );
    },
  ],
  parameters: {
    docs: {
      description: {
        component:
          "The `DatesStep` component is used in event creation forms to manage the bookable date range, event dates, and default check-in/check-out dates. It handles dynamically enabling/disabling form fields based on the selected range.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DatesStep>;

export const Default: Story = {};
