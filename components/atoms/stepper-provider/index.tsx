"use client";

import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useState,
} from "react";

export type Step = {
  name: string;
  render?: FC;
};

export type StepStatus = "indeterminate" | "success" | "error";

export type StepperContextValue = {
  currentStep: Step;
  steps: Step[];
  hasNextStep: boolean;
  hasPreviousStep: boolean;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  goToStep: (step: Step) => void;
  getStepStatus: (step: Step) => StepStatus;
  setStepStatus: (step: Step, status: StepStatus) => void;
};
export const StepperContext = createContext({} as StepperContextValue);

export type StepperProviderProps = PropsWithChildren & {
  steps: Step[];
};

export const StepperProvider = ({ steps, children }: StepperProviderProps) => {
  const [currentStep, setCurrentStep] = useState(steps[0]);
  const [stepsStatus, setStepsStatus] = useState<Map<Step, StepStatus>>(
    new Map(steps.map((step) => [step, "indeterminate"])),
  );

  const currentStepIndex = steps.indexOf(currentStep);
  const hasNextStep = currentStepIndex < steps.length - 1;
  const hasPreviousStep = currentStepIndex > 0;

  const goToStep = useCallback((step: Step) => {
    setCurrentStep(step);
  }, []);

  const goToNextStep = useCallback(() => {
    if (!hasNextStep) {
      return;
    }

    const nextStep = steps[currentStepIndex + 1];
    setCurrentStep(nextStep);
  }, [steps, currentStepIndex, hasNextStep]);

  const goToPreviousStep = () => {
    if (!hasPreviousStep) {
      return;
    }

    const previousStep = steps[currentStepIndex - 1];
    setCurrentStep(previousStep);
  };

  const getStepStatus = (step: Step) => {
    const status = stepsStatus.get(step);

    return status ?? "indeterminate";
  };

  const setStepStatus = (step: Step, status: StepStatus) => {
    setStepsStatus((old) => {
      const newMap = new Map(old);
      newMap.set(step, status);

      return newMap;
    });
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
        getStepStatus,
        setStepStatus,
      }}
    >
      {children}
    </StepperContext>
  );
};
