import { Button } from "@/components/atoms/button";
import { FormProvider } from "@/components/atoms/form-provider";
import { Toaster } from "@/components/atoms/toaster";
import { useForm } from "@/hooks/use-form";
import { toast } from "sonner";
import type { HasChildren } from "../types";

export const InputStoriesWrapper = ({ children }: HasChildren) => {
  const form = useForm();
  const { handleSubmit } = form;

  const handleSuccess = (data: object) => {
    // biome-ignore lint/suspicious/noConsoleLog:
    console.log(data);
    toast.success(JSON.stringify(data).substring(0, 100));
  };

  const handleError = (errors: object) => {
    // biome-ignore lint/suspicious/noConsoleLog:
    console.log(errors);
    toast.error(JSON.stringify(errors).substring(0, 100));
  };

  return (
    <FormProvider form={form}>
      {children}

      <Toaster />
      <Button
        type="submit"
        onClick={handleSubmit(handleSuccess, handleError)}
      >
        Save
      </Button>
    </FormProvider>
  );
};
