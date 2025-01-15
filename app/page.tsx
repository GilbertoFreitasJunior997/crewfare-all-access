"use client";

import { Button } from "@/components/atoms/button";
import { FormProvider } from "@/components/atoms/form-provider";
import { StepperProvider } from "@/components/atoms/stepper-provider";
import { Header } from "@/components/molecules/header";
import { NumberInput } from "@/components/molecules/number-input";
import { Stepper } from "@/components/molecules/stepper";
import { useForm } from "@/hooks/use-form";
import { useFormProvider } from "@/hooks/use-form-provider";
import { steps } from "@/lib/steps";

const SampleDisplay = () => {
  const { form } = useFormProvider();

  if (!form) {
    return null;
  }

  return (
    <div>
      {form.fields.map((field) => (
        <div key={field.name}>
          {field.name}: {String(field.value)}
        </div>
      ))}
    </div>
  );
};

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

          <main className="h-fit p-5 grid grid-cols-2 gap-6">
            <form onSubmit={handleSubmit(handleSuccess)}>
              <FormProvider form={form}>
                <NumberInput name="DaysWithForm" />

                <SampleDisplay />
              </FormProvider>

              <Button type="submit"> Submit </Button>
            </form>

            <NumberInput name="Days" />
          </main>
        </div>
      </div>
    </StepperProvider>
  );
}
