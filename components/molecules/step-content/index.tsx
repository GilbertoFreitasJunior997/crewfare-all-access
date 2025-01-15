import { ArrowLeftIcon } from "@/components/atoms/arrow-left-icon";
import { ArrowRightIcon } from "@/components/atoms/arrow-right-icon";
import { Button } from "@/components/atoms/button";
import { StepProvider } from "@/components/atoms/step-provider";
import { Step } from "@/components/atoms/stepper-provider";
import { PropsWithChildren } from "react";

export type StepContentProps = PropsWithChildren & {
  step: Step;
};

export const StepContent = ({ step, children }: StepContentProps) => {
  const { name } = step;

  return (
    <StepProvider step={step}>
      <h3 className="text-xl font-semibold">{name}</h3>

      <section className="mt-5">{children}</section>

      <section className="flex flex-col items-end justify-center mt-6 space-y-12">
        <div className="flex gap-6">
          <Button
            variant="secondary"
            size="icon"
          >
            <ArrowLeftIcon />
          </Button>
          <Button
            variant="secondary"
            size="icon"
          >
            <ArrowRightIcon />
          </Button>
        </div>

        <Button>Save</Button>
      </section>
    </StepProvider>
  );
};
