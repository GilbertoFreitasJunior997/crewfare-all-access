"use client";

import { useFormProvider } from "@/hooks/use-form-provider";
import { useInputBox } from "@/hooks/use-input-box";
import { ReactNode, createContext, useEffect, useRef } from "react";

export const inputValidationDebounceTimerMs = 260;

export type InputContextValue = {
  name: string;
  label?: string;
};
export const InputContext = createContext({} as InputContextValue);

export type InputRules = {
  isRequired?: boolean | string;
};

// generic input props, goes to all inputs
export type InputBase<T> = InputContextValue &
  InputRules & {
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
};
export const InputProvider = <T,>({
  name,
  label,
  value: controlledValue,
  onChange,
  emptyValue,
  isRequired,
  children,
}: InputProviderProps<T>) => {
  const { form } = useFormProvider();
  const debounceTimeout = useRef<ReturnType<typeof setTimeout>>(null);

  const handleChange = (newValue: T | undefined) => {
    onChange?.(newValue as T);

    if (!form) {
      return;
    }

    const value = form.setValue(name, newValue);

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
    });
  }, [form?.register, name, label, emptyValue, isRequired]);

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
