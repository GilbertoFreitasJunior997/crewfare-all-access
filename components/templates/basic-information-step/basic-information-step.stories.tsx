import { FormProvider } from "@/components/atoms/form-provider";
import { StepperProvider } from "@/components/atoms/stepper-provider";
import type { CreateEventFormData } from "@/components/templates/create-event-form";
import { useForm } from "@/hooks/use-form";
import { steps } from "@/lib/steps";
import type { Meta, StoryObj } from "@storybook/react";
import { BasicInformationStep } from ".";

const meta: Meta<typeof BasicInformationStep> = {
  title: "Design System/Template/BasicInformationStep",
  component: BasicInformationStep,
  decorators: [
    (Story) => {
      const form = useForm<CreateEventFormData>();

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
          "The `BasicInformationStep` component is used in event creation forms. It includes form fields for event name, event type, banner, and an optional overlay title on the banner. It handles form state management, including dynamic visibility for the overlay title.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof BasicInformationStep>;

export const Default: Story = {};
