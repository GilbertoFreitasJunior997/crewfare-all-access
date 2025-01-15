"use client";

import { Form } from "@/hooks/use-form";
import { PropsWithChildren, createContext } from "react";

export type FormContextValues = {
  form: Form;
};
export const FormContext = createContext({} as FormContextValues);

export type FormProviderProps = PropsWithChildren & FormContextValues;
export const FormProvider = ({ form, children }: FormProviderProps) => {
  return <FormContext value={{ form }}>{children}</FormContext>;
};
