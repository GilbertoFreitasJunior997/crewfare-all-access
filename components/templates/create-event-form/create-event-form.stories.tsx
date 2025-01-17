import { StepperProvider } from "@/components/atoms/stepper-provider";
import { Toaster } from "@/components/atoms/toaster";
import { steps } from "@/lib/steps";
import type { Meta, StoryObj } from "@storybook/react";
import { CreateEventForm } from ".";

const meta: Meta<typeof CreateEventForm> = {
  title: "Design System/Templates/CreateEventForm",
  component: CreateEventForm,
  decorators: [
    (Story) => {
      return (
        <StepperProvider steps={steps}>
          <Story />

          <Toaster />
        </StepperProvider>
      );
    },
  ],
  parameters: {
    docs: {
      description: {
        component:
          "The `CreateEventForm` is the main form component for creating an event. It includes multiple steps, such as basic information, event details, and tax/fee setup.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CreateEventForm>;

export const Default: Story = {};
