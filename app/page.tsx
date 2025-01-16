"use client";

import { FormProvider } from "@/components/atoms/form-provider";
import { StepNavigationFooter } from "@/components/molecules/step-navigation-footer";
import { Stepper } from "@/components/molecules/stepper";
import { useForm } from "@/hooks/use-form";
import { useStepper } from "@/hooks/use-stepper";
import { steps } from "@/lib/steps";

const TestStepRender = () => {
  const { currentStep } = useStepper();
  if (!currentStep) {
    return null;
  }

  return steps.map((step) => {
    const Component = step.component;
    const isActive = step === currentStep;

    return (
      <div
        key={step.name}
        className={isActive ? "" : "hidden"}
      >
        <Component />
      </div>
    );
  });
};

const MyForm = () => {
  const form = useForm();

  return (
    <FormProvider form={form}>
      <TestStepRender />

      <StepNavigationFooter />
    </FormProvider>
  );
};

export default function Home() {
  return (
    <div className="grow w-full lg:grid lg:grid-cols-[248px_1fr] lg:pl-[180px]">
      <Stepper title="Create Event" />

      <main className="h-fit p-5 space-y-2">
        <MyForm />
      </main>
    </div>
  );
}
