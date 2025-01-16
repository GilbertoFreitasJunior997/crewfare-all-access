import { Step } from "@/components/atoms/stepper-provider";
import { BasicInformationStep } from "@/components/templates/basic-information-step";

export const steps: Step[] = [
  {
    name: "Basic Information",
    render: BasicInformationStep,
  },
  {
    name: "Details",
  },
  {
    name: "Dates",
  },
];
