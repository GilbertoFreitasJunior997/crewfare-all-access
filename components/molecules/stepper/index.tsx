"use client";

import { StepItem } from "@/components/atoms/step-item";
import { useStepper } from "@/hooks/use-stepper";
import { MenuIcon } from "lucide-react";
import { memo, useState } from "react";
import { twMerge } from "tailwind-merge";

export type StepperProps = {
  title: string;
};

export const Stepper = memo(({ title }: StepperProps) => {
  const { steps, currentStep, goToStep, getStepStatus } = useStepper();
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggleExpanded = () => {
    setIsExpanded((value) => !value);
  };

  return (
    <aside
      className={twMerge(
        isExpanded ? "h-[68px]" : "h-full",
        "overflow-hidden md:h-full w-full bg-background-accent p-5",
      )}
    >
      <section className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-bold">{title}</h2>

        <button
          type="button"
          onClick={handleToggleExpanded}
          className="block md:hidden"
        >
          <MenuIcon />
        </button>
      </section>

      <nav>
        <ul className="space-y-px">
          {steps.map((step, index) => {
            const isActive = currentStep === step;
            const status = getStepStatus(step);

            return (
              <StepItem
                key={step.name}
                index={index}
                step={step}
                status={status}
                isActive={isActive}
                onSelect={goToStep}
              />
            );
          })}
        </ul>
      </nav>
    </aside>
  );
});
