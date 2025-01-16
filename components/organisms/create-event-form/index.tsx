"use client";

import { FormProvider } from "@/components/atoms/form-provider";
import { StepsRender } from "@/components/atoms/steps-render";
import { StepNavigationFooter } from "@/components/molecules/step-navigation-footer";
import { useForm } from "@/hooks/use-form";

export const CreateEventForm = () => {
  const form = useForm();

  return (
    <FormProvider form={form}>
      <StepsRender />

      <StepNavigationFooter />
    </FormProvider>
  );
};
