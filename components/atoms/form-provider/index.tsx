"use client";

import { Form } from "@/hooks/use-form";
import { PropsWithChildren, createContext } from "react";

export type FormContextValues = {
  form: Form;
};
export const FormContext = createContext({} as FormContextValues);

export type FormProviderProps = PropsWithChildren &
  FormContextValues & {
    onSuccess: (data: object) => void;
    className?: string;
  };

export const FormProvider = ({
  form,
  onSuccess,
  className,
  children,
}: FormProviderProps) => {
  const { handleSubmit } = form;

  return (
    <FormContext value={{ form }}>
      <form
        className={className}
        onSubmit={handleSubmit(onSuccess)}
        noValidate={true}
      >
        {children}
      </form>
    </FormContext>
  );
};
