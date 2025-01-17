import { FormProvider } from "@/components/atoms/form-provider";
import { StepperProvider } from "@/components/atoms/stepper-provider";
import { useForm } from "@/hooks/use-form";
import { steps } from "@/lib/steps";
import type { Meta, StoryObj } from "@storybook/react";
import { DetailsStep } from ".";

const meta: Meta<typeof DetailsStep> = {
  title: "Design System/Templates/DetailsStep",
  component: DetailsStep,
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
          "The `DetailsStep` component is used in event creation forms to manage event-specific details such as link, address, venue, hotels, and minimum stay requirements.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DetailsStep>;

export const Default: Story = {};
