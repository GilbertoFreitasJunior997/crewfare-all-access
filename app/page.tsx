import { Step, StepperProvider } from "@/components/atoms/stepper-provider";
import { Header } from "@/components/molecules/header";
import { Stepper } from "@/components/molecules/stepper";
import { BasicInformationStep } from "@/components/templates/basic-information-step";

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

export default function Home() {
  return (
    <StepperProvider steps={steps}>
      <div className="min-h-screen w-screen flex flex-col">
        <Header />

        <div className="grow w-full md:grid md:grid-cols-[248px_1fr]">
          <Stepper title="Create Event" />

          <main className="h-full p-5">
            <BasicInformationStep />
          </main>
        </div>
      </div>
    </StepperProvider>
  );
}
