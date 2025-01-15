"use client";

import { PropsWithChildren, createContext, useState } from "react";

export type Step = {
  name: string;
};

export type StepperContextValue = {
  currentStep: Step;
  steps: Step[];
  hasNextStep: boolean;
  hasPreviousStep: boolean;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  goToStep: (step: Step) => void;
};
export const StepperContext = createContext({} as StepperContextValue);

export type StepperProviderProps = PropsWithChildren & {
  steps: Step[];
};

export const StepperProvider = ({ steps, children }: StepperProviderProps) => {
  const [currentStep, setCurrentStep] = useState(steps[0]);

  const currentStepIndex = steps.indexOf(currentStep);
  const hasNextStep = currentStepIndex < steps.length - 1;
  const hasPreviousStep = currentStepIndex > 0;

  const goToStep = (step: Step) => {
    setCurrentStep(step);
  };

  const goToNextStep = () => {
    if (!hasNextStep) {
      return;
    }

    const nextStep = steps[currentStepIndex + 1];
    setCurrentStep(nextStep);
  };

  const goToPreviousStep = () => {
    if (!hasPreviousStep) {
      return;
    }

    const previousStep = steps[currentStepIndex - 1];
    setCurrentStep(previousStep);
  };

  return (
    <StepperContext
      value={{
        currentStep,
        steps,
        hasNextStep,
        hasPreviousStep,
        goToNextStep,
        goToPreviousStep,
        goToStep,
      }}
    >
      {children}
    </StepperContext>
  );
};
