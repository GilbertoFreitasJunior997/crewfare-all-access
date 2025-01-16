import { twMerge } from "tailwind-merge";
import { useFormProvider } from "../use-form-provider";

export type UseInputBoxParams = {
  name: string;
};
export const useInputBox = ({ name }: UseInputBoxParams) => {
  const { form } = useFormProvider();
  const error = form?.getError(name) ?? "";

  const inputBoxClassName = twMerge(
    "h-12 px-3 w-full rounded-lg border outline-none text-sm placeholder:text-placeholder font-medium",
    error
      ? "bg-danger/10 border-danger"
      : "bg-secondary border-secondary focus:border-border",
  );

  return {
    inputBoxClassName,
  };
};
