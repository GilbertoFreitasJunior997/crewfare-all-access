import { StepContext } from "@/components/atoms/step-provider";
import { useContext } from "react";

export const useStep = () => useContext(StepContext);
