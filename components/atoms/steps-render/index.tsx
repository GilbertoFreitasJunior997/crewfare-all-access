"use client";

import { useStepper } from "@/hooks/use-stepper";
import { steps } from "@/lib/steps";

export const StepsRender = () => {
  const { currentStep } = useStepper();
  if (!currentStep) {
    return null;
  }

  return steps.map((step) => {
    const Component = step.component;
    const isActive = step === currentStep;

    return (
      <div
        key={step.name}
        className={isActive ? "" : "hidden"}
      >
        <Component />
      </div>
    );
  });
};
