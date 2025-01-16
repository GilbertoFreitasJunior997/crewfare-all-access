"use client";

import { FormProvider } from "@/components/atoms/form-provider";
import { StepperProvider } from "@/components/atoms/stepper-provider";
import { Header } from "@/components/molecules/header";
import { Stepper } from "@/components/molecules/stepper";
import { BasicInformationStep } from "@/components/templates/basic-information-step";
import { useForm } from "@/hooks/use-form";
import { steps } from "@/lib/steps";

export default function Home() {
  const form = useForm();
  const { handleSubmit } = form;

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
            <form onSubmit={handleSubmit(handleSuccess)}>
              <FormProvider form={form}>
                <BasicInformationStep />
              </FormProvider>
            </form>
          </main>
        </div>
      </div>
    </StepperProvider>
  );
}
