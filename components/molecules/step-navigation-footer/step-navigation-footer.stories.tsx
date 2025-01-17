import { FormProvider } from "@/components/atoms/form-provider";
import { StepperProvider } from "@/components/atoms/stepper-provider";
import { useForm } from "@/hooks/use-form";
import { steps } from "@/lib/steps";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { StepNavigationFooter } from ".";

const meta: Meta<typeof StepNavigationFooter> = {
  title: "Design System/Molecules/StepNavigationFooter",
  component: StepNavigationFooter,
  args: {
    onError: fn(),
    onSuccess: fn(),
  },
  argTypes: {
    onSuccess: {
      control: {
        disable: true,
      },
      table: {
        category: "Events",
      },
    },
    onError: {
      control: {
        disable: true,
      },
      table: {
        category: "Events",
      },
    },
  },
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
          "The `StepNavigationFooter` component provides navigation controls for multi-step forms, including 'Previous', 'Next', and 'Save' buttons. It integrates with the form and stepper contexts.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof StepNavigationFooter>;

export const Default: Story = {};
