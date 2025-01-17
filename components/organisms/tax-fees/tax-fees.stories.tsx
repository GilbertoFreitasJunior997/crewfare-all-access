import { FormProvider } from "@/components/atoms/form-provider";
import { useForm } from "@/hooks/use-form";
import type { Meta, StoryObj } from "@storybook/react";
import { TaxFees } from ".";

const meta: Meta<typeof TaxFees> = {
  title: "Design System/Organisms/TaxFees",
  component: TaxFees,
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
  parameters: {
    docs: {
      description: {
        component:
          "The `TaxFees` component allows users to add, edit, and remove tax/fee rows. Each row contains a name, amount, and type (fixed or percentage). The component manages multiple tax/fee rows dynamically and validates form fields.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TaxFees>;

export const Default: Story = {};
