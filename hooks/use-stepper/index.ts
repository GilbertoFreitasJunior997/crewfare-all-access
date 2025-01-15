import { StepperContext } from "@/components/atoms/stepper-provider";
import { useContext } from "react";

export const useStepper = () => useContext(StepperContext);
