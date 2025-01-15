"use client";

import { PropsWithChildren, createContext, useState } from "react";

export type Step = {
  name: string;
};

export type StepperContextValue = {
  currentStep: Step;
  steps: Step[];
  goToStep: (step: Step) => void;
};
export const StepperContext = createContext({} as StepperContextValue);

export type StepperProviderProps = PropsWithChildren & {
  steps: Step[];
};

export const StepperProvider = ({ steps, children }: StepperProviderProps) => {
  const [currentStep, setCurrentStep] = useState(steps[0]);

  const goToStep = (step: Step) => {
    setCurrentStep(step);
  };

  return (
    <StepperContext
      value={{
        currentStep,
        steps,
        goToStep,
      }}
    >
      {children}
    </StepperContext>
  );
};
