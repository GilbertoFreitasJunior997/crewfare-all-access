import { Step } from "@/components/atoms/stepper-provider";
import { BasicInformationStep } from "@/components/templates/basic-information-step";
import { DetailsStep } from "@/components/templates/details-step";

export const steps: Step[] = [
  {
    name: "Basic Information",
    render: BasicInformationStep,
  },
  {
    name: "Details",
    render: DetailsStep,
  },
  {
    name: "Dates",
  },
];
