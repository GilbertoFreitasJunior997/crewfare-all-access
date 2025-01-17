import { ArrowLeftIcon } from "@/components/atoms/arrow-left-icon";
import { ArrowRightIcon } from "@/components/atoms/arrow-right-icon";
import { Button } from "@/components/atoms/button";
import type { FormBase, FormErrors } from "@/hooks/use-form";
import { useFormProvider } from "@/hooks/use-form-provider";
import { useStepper } from "@/hooks/use-stepper";
import { useState } from "react";
import { SaveButton, saveButtonAnimationDurationMs } from "../save-button";

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
    }, saveButtonAnimationDurationMs);

    onError?.(errors);
  };

  return (
    <section className="flex flex-col items-end justify-center mt-6 space-y-12">
      <div className="flex gap-6">
        <Button
          variant="secondary"
          size="icon"
          isDisabled={!hasPreviousStep}
          onClick={goToPreviousStep}
        >
          <ArrowLeftIcon />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          isDisabled={!hasNextStep}
          onClick={goToNextStep}
        >
          <ArrowRightIcon />
        </Button>
      </div>

      <SaveButton
        isShaking={isButtonShaking}
        onClick={handleSubmit(onSuccess, handleError)}
      />
    </section>
  );
};
