"use client";

import type { FormFieldGroup } from "@/hooks/use-form";
import { useFormProvider } from "@/hooks/use-form-provider";
import { getFieldName } from "@/hooks/use-form/utils";
import { useInputBox } from "@/hooks/use-input-box";
import { useStep } from "@/hooks/use-step";
import { type ReactNode, createContext, useEffect, useRef } from "react";

export const inputValidationDebounceTimerMs = 260;

export type InputContextValue = {
  name: string;
  label?: string;
  showLabel?: boolean;
  isDisabled?: boolean;
  info?: ReactNode;
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
    showLabel?: boolean;
    label?: string;
    value?: T;
    onChange?: (oldValue: T) => void;
    group?: FormFieldGroup;
    defaultValue?: T;
  };

// props passed to the children render of the HOC
export type InputProviderRenderProps<T> = {
  name: string;
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
  name: baseName,
  label,
  showLabel = true,
  value: controlledValue,
  onChange,
  emptyValue,
  isRequired,
  customValidation,
  group,
  hasValidationDebounce,
  isDisabled,
  info,
  defaultValue,
  children,
}: InputProviderProps<T>) => {
  const { form } = useFormProvider();
  const providedStep = useStep();
  const name = getFieldName(baseName, group);

  const debounceTimeout = useRef<ReturnType<typeof setTimeout>>(null);

  const handleChange = (newValue: T | undefined) => {
    if (isDisabled) {
      return;
    }

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
      group,
      defaultValue,
    });
  }, [
    form?.register,
    name,
    label,
    emptyValue,
    isRequired,
    providedStep?.step,
    customValidation,
    group,
    defaultValue,
  ]);

  const value = form ? (form.getValue<T>(name) ?? emptyValue) : controlledValue;
  const { inputBoxClassName } = useInputBox({ name, isDisabled });

  const Input = children({
    name,
    value,
    onChange: handleChange,
    inputBoxClassName,
  });

  return (
    <InputContext
      value={{
        name,
        label,
        showLabel,
        isDisabled,
        info,
      }}
    >
      {Input}
    </InputContext>
  );
};
