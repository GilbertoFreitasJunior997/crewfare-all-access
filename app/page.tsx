"use client";

import { Button } from "@/components/atoms/button";
import { FormProvider } from "@/components/atoms/form-provider";
import { Step, StepperProvider } from "@/components/atoms/stepper-provider";
import { Header } from "@/components/molecules/header";
import { Stepper } from "@/components/molecules/stepper";
import { TextInput } from "@/components/molecules/text-input";
import { useForm } from "@/hooks/use-form";
import { useFormProvider } from "@/hooks/use-form-provider";

export const steps: Step[] = [
  {
    name: "Basic Information",
  },
  {
    name: "Details",
  },
  {
    name: "Dates",
  },
];

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
                <TextInput name="NameWithForm" />

                <SampleDisplay />
              </FormProvider>

              <Button type="submit"> Submit </Button>
            </form>

            <TextInput name="Name" />
          </main>
        </div>
      </div>
    </StepperProvider>
  );
}
