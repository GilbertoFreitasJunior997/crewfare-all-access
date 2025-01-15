import { BannerInput } from "@/components/atoms/banner-input";
import { CheckboxInput } from "@/components/atoms/checkbox-input";
import { DateRangeInput } from "@/components/atoms/date-range-input";
import { SelectInput } from "@/components/atoms/select-input";
import { Step, StepperProvider } from "@/components/atoms/stepper-provider";
import { Header } from "@/components/molecules/header";
import { Stepper } from "@/components/molecules/stepper";

const steps: Step[] = [
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

          <main className="h-full">
            <div className="grid grid-cols-4 gap-2 w-full mt-4 md:mt-12 px-3">
              <SelectInput
                className="col-span-2"
                items={[
                  { label: "Public Event", value: "a" },
                  { label: "Private Event", value: "b" },
                  { label: "Other Event", value: "c" },
                ]}
              />

              <CheckboxInput>Overlay Title on Banner</CheckboxInput>

              <DateRangeInput className="col-span-4" />

              <BannerInput className="col-span-4" />
            </div>
          </main>
        </div>
      </div>
    </StepperProvider>
  );
}
