import { StepperProvider } from "@/components/atoms/stepper-provider";
import { steps } from "@/lib/steps";
import type { Meta, StoryObj } from "@storybook/react";
import { Stepper } from ".";

const meta: Meta<typeof Stepper> = {
  title: "Design System/Molecules/Stepper",
  component: Stepper,
  decorators: [
    (Story) => (
      <StepperProvider steps={steps}>
        <Story />
      </StepperProvider>
    ),
  ],
  args: {
    title: "Navigation Steps",
  },
  argTypes: {
    title: {
      control: "text",
      description:
        "The title displayed at the top of the stepper. It provides context for the steps being navigated.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Navigation Steps" },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "The `Stepper` component provides a navigational interface for multi-step processes, displaying steps with statuses and allowing navigation between them. It supports expandable and collapsible functionality for better UI adaptability.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Stepper>;

export const Default: Story = {};
