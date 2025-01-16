import { ArrowLeftIcon } from "@/components/atoms/arrow-left-icon";
import { ArrowRightIcon } from "@/components/atoms/arrow-right-icon";
import { Button } from "@/components/atoms/button";
import type { FormBase, FormErrors } from "@/hooks/use-form";
import { useFormProvider } from "@/hooks/use-form-provider";
import { useStepper } from "@/hooks/use-stepper";
import { motion } from "framer-motion";
import { useState } from "react";

const stepNavigationFooterSaveAnimationMs = 100;

export type StepNavigationFooterProps<TForm extends FormBase> = {
  onSuccess?: (data: TForm) => void;
  onError?: (errors: FormErrors<TForm>) => void;
};
export const StepNavigationFooter = <TForm extends FormBase>({
  onSuccess,
  onError,
}: StepNavigationFooterProps<TForm>) => {
  const { form } = useFormProvider<TForm>();
  const { hasNextStep, hasPreviousStep, goToNextStep, goToPreviousStep } =
    useStepper();

  const [isButtonShaking, setIsButtonShaking] = useState(false);

  if (!form) {
    return null;
  }
  const { handleSubmit } = form;

  const handleError = (errors: FormErrors<TForm>) => {
    setIsButtonShaking(true);
    setTimeout(() => {
      setIsButtonShaking(false);
    }, stepNavigationFooterSaveAnimationMs);

    onError?.(errors);
  };

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

      <motion.div
        animate={{
          x: isButtonShaking ? [0, -8, 16, -16, 0] : 0,
        }}
        transition={{ duration: stepNavigationFooterSaveAnimationMs / 1000 }}
      >
        <Button
          type="submit"
          onClick={handleSubmit(onSuccess, handleError)}
        >
          Save
        </Button>
      </motion.div>
    </section>
  );
};
