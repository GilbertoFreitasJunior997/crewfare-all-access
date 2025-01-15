"use client";

import { useFormProvider } from "@/hooks/use-form-provider";
import { ReactNode, createContext, useEffect } from "react";

export type InputContextValue = {
  name: string;
  label?: string;
};
export const InputContext = createContext({} as InputContextValue);

// generic input props, goes to all inputs
export type InputBase<T> = InputContextValue & {
  name: string;
  label?: string;
  value?: T;
  onChange?: (oldValue: T) => void;
  ignoreForm?: boolean;
};

// props passed to the children render of the HOC
export type InputProviderRenderProps<T> = {
  value: T | undefined;
  onChange: (oldValue: T) => void;
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
  children,
}: InputProviderProps<T>) => {
  const { form } = useFormProvider();

  const handleChange = (newValue: T) => {
    onChange?.(newValue);
    form?.setValue(name, newValue);
  };

  useEffect(() => {
    if (!form?.register) {
      return;
    }

    form.register({
      name,
      value: emptyValue,
    });
  }, [form?.register, name, emptyValue]);

  const value = form ? (form.getValue<T>(name) ?? emptyValue) : controlledValue;

  const Input = children({
    value,
    onChange: handleChange,
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
