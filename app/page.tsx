"use client";

import { FormProvider } from "@/components/atoms/form-provider";
import { StepperProvider } from "@/components/atoms/stepper-provider";
import { Header } from "@/components/molecules/header";
import { Stepper } from "@/components/molecules/stepper";
import { useForm } from "@/hooks/use-form";
import { useStepper } from "@/hooks/use-stepper";
import { steps } from "@/lib/steps";

const TestStepRender = () => {
  const { currentStep } = useStepper();
  if (!currentStep) {
    return null;
  }

  const { render: Render } = currentStep;

  if (!Render) {
    return null;
  }

  return <Render />;
};

export default function Home() {
  const form = useForm();

  const handleSuccess = (values: unknown) => {
    console.info(values);
  };

  return (
    <StepperProvider steps={steps}>
      <div className="min-h-screen w-screen flex flex-col">
        <Header />

        <div className="grow w-full md:grid md:grid-cols-[248px_1fr]">
          <Stepper title="Create Event" />

          <main className="h-fit p-5">
            <FormProvider
              form={form}
              onSuccess={handleSuccess}
            >
              <TestStepRender />
            </FormProvider>
          </main>
        </div>
      </div>
    </StepperProvider>
  );
}
