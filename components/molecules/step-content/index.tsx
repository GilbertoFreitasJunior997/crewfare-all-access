"use client";

import { ArrowLeftIcon } from "@/components/atoms/arrow-left-icon";
import { ArrowRightIcon } from "@/components/atoms/arrow-right-icon";
import { Button } from "@/components/atoms/button";
import { StepProvider } from "@/components/atoms/step-provider";
import { Step } from "@/components/atoms/stepper-provider";
import { useStepper } from "@/hooks/use-stepper";
import { PropsWithChildren } from "react";

export type StepContentProps = PropsWithChildren & {
  step: Step;
};

export const StepContent = ({ step, children }: StepContentProps) => {
  const { name } = step;
  const { hasNextStep, hasPreviousStep, goToNextStep, goToPreviousStep } =
    useStepper();

  return (
    <StepProvider step={step}>
      <h3 className="text-xl font-semibold">{name}</h3>

      <section className="mt-5">{children}</section>

      <section className="flex flex-col items-end justify-center mt-6 space-y-12">
        <div className="flex gap-6">
          <Button
            variant="secondary"
            size="icon"
            disabled={!hasPreviousStep}
            onClick={goToPreviousStep}
          >
            <ArrowLeftIcon />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            disabled={!hasNextStep}
            onClick={goToNextStep}
          >
            <ArrowRightIcon />
          </Button>
        </div>

        <Button type="submit">Save</Button>
      </section>
    </StepProvider>
  );
};
