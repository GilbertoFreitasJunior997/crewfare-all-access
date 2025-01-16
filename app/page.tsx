"use client";

import { FormProvider } from "@/components/atoms/form-provider";
import { StepperProvider } from "@/components/atoms/stepper-provider";
import { Header } from "@/components/molecules/header";
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
    const Render = step.render;
    const isActive = step === currentStep;

    if (!Render) {
      return null;
    }

    return (
      <div
        key={step.name}
        className={isActive ? "" : "hidden"}
      >
        <Render />
      </div>
    );
  });
};

const MyForm = () => {
  const form = useForm();

  const handleSuccess = (values: unknown) => {
    console.info(values);
  };

  return (
    <FormProvider
      form={form}
      onSuccess={handleSuccess}
    >
      <TestStepRender />

      <StepNavigationFooter />
    </FormProvider>
  );
};

export default function Home() {
  return (
    <StepperProvider steps={steps}>
      <div className="min-h-screen w-screen flex flex-col">
        <Header />

        <div className="grow w-full md:grid md:grid-cols-[248px_1fr]">
          <Stepper title="Create Event" />

          <main className="h-fit p-5">
            <MyForm />
          </main>
        </div>
      </div>
    </StepperProvider>
  );
}
