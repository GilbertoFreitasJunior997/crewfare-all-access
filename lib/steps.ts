import { Step } from "@/components/atoms/stepper-provider";
import { BasicInformationStep } from "@/components/templates/basic-information-step";
import { DatesStep } from "@/components/templates/dates-step";
import { DetailsStep } from "@/components/templates/details-step";

export const steps: Step[] = [
  {
    name: "Basic Information",
    component: BasicInformationStep,
  },
  {
    name: "Details",
    component: DetailsStep,
  },
  {
    name: "Dates",
    component: DatesStep,
  },
];
