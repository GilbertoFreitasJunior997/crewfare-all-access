import { ArrowLeftIcon } from "@/components/atoms/arrow-left-icon";
import { ArrowRightIcon } from "@/components/atoms/arrow-right-icon";
import { Button } from "@/components/atoms/button";
import { useStepper } from "@/hooks/use-stepper";

export const StepNavigationFooter = () => {
  const { hasNextStep, hasPreviousStep, goToNextStep, goToPreviousStep } =
    useStepper();

  return (
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
  );
};
