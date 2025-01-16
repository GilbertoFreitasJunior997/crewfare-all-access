"use client";

import { Form } from "@/hooks/use-form";
import { PropsWithChildren, createContext } from "react";

export type FormContextValues = {
  form: Form;
};
export const FormContext = createContext({} as FormContextValues);

export type FormProviderProps = PropsWithChildren &
  FormContextValues & {
    className?: string;
  };

export const FormProvider = ({
  form,
  className,
  children,
}: FormProviderProps) => {
  return (
    <FormContext value={{ form }}>
      <form
        className={className}
        noValidate={true}
        onSubmit={(e) => e.preventDefault()}
      >
        {children}
      </form>
    </FormContext>
  );
};
