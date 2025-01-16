"use client";

import { useFormProvider } from "@/hooks/use-form-provider";
import { useInputBox } from "@/hooks/use-input-box";
import { useStep } from "@/hooks/use-step";
import { ReactNode, createContext, useEffect, useRef } from "react";

export const inputValidationDebounceTimerMs = 260;

export type InputContextValue = {
  name: string;
  label?: string;
};
export const InputContext = createContext({} as InputContextValue);

export type InputRules<T = unknown> = {
  isRequired?: boolean | string;
  customValidation?: (value: T) => string | undefined;
};

// generic input props, goes to all inputs
export type InputBase<T> = InputContextValue &
  InputRules<T> & {
    name: string;
    label?: string;
    value?: T;
    onChange?: (oldValue: T) => void;
  };

// props passed to the children render of the HOC
export type InputProviderRenderProps<T> = {
  value: T | undefined;
  onChange: (oldValue: T | undefined) => void;
  inputBoxClassName: string;
};

export type InputProviderProps<T> = InputBase<T> & {
  children: (props: InputProviderRenderProps<T>) => ReactNode;
  emptyValue?: T;
  hasValidationDebounce?: boolean;
};
export const InputProvider = <T,>({
  name,
  label,
  value: controlledValue,
  onChange,
  emptyValue,
  isRequired,
  customValidation,
  hasValidationDebounce,
  children,
}: InputProviderProps<T>) => {
  const { form } = useFormProvider();
  const providedStep = useStep();

  const debounceTimeout = useRef<ReturnType<typeof setTimeout>>(null);

  const handleChange = (newValue: T | undefined) => {
    onChange?.(newValue as T);

    if (!form) {
      return;
    }

    const value = form.setValue(name, newValue);

    if (!hasValidationDebounce) {
      form.validate(name, value);

      return;
    }

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      form.validate(name, value);
    }, inputValidationDebounceTimerMs);
  };

  useEffect(() => {
    if (!form?.register) {
      return;
    }

    form.register({
      name,
      label,
      emptyValue,
      isRequired,
      step: providedStep.step ?? undefined,
      customValidation,
    });
  }, [
    form?.register,
    name,
    label,
    emptyValue,
    isRequired,
    providedStep?.step,
    customValidation,
  ]);

  const value = form ? (form.getValue<T>(name) ?? emptyValue) : controlledValue;
  const { inputBoxClassName } = useInputBox({ name });

  const Input = children({
    value,
    onChange: handleChange,
    inputBoxClassName,
  });

  return (
    <InputContext
      value={{
        name,
        label,
      }}
    >
      {Input}
    </InputContext>
  );
};
