import { useFormProvider } from "@/hooks/use-form-provider";
import { useInput } from "@/hooks/use-input";

export const InputError = () => {
  const { form } = useFormProvider();
  const input = useInput();
  if (!form) {
    return null;
  }
  const { getError } = form;
  const { name } = input;

  const error = getError(name);
  if (!error) {
    return null;
  }

  return (
    <span className="text-danger-foreground text-sm font-normal mt-2">
      {error}
    </span>
  );
};
