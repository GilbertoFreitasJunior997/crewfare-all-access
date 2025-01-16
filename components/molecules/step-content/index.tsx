"use client";

import { AlertIcon } from "@/components/atoms/alert-icon";
import { StepProvider } from "@/components/atoms/step-provider";
import { Step } from "@/components/atoms/stepper-provider";
import { useStepper } from "@/hooks/use-stepper";
import { PropsWithChildren } from "react";

export type StepContentProps = PropsWithChildren & {
  step: Step;
};

export const StepContent = ({ step, children }: StepContentProps) => {
  const { getStepStatus } = useStepper();
  const { name } = step;
  const status = getStepStatus(step);

  return (
    <StepProvider step={step}>
      <div className="flex items-center gap-3">
        <h3 className="text-xl font-semibold">{name}</h3>

        {status === "error" && <AlertIcon className="size-5" />}
      </div>

      <section className="mt-5">{children}</section>
    </StepProvider>
  );
};
