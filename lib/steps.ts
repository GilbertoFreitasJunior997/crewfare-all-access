import { Step } from "@/components/atoms/stepper-provider";
// import { BasicInformationStep } from "@/components/templates/basic-information-step";
// import { DetailsStep } from "@/components/templates/details-step";
import { DatesStep } from "@/components/templates/dates-step";

export const steps: Step[] = [
  {
    name: "Basic Information",
    component: () => null,
  },
  {
    name: "Details",
    component: () => null,
  },
  {
    name: "Dates",
    component: DatesStep,
  },
];
