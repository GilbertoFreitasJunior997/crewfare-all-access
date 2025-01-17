"use client";

import type { Form, FormBase } from "@/hooks/use-form";
import type { HasChildren, HasClassName } from "@/lib/types";
import { createContext } from "react";

export type FormContextValues<
  TForm extends FormBase = FormBase,
  TGroup extends string = string,
> = {
  form: Form<TForm, TGroup>;
};
export const FormContext = createContext({} as FormContextValues);

export type FormProviderProps<
  TForm extends FormBase = FormBase,
  TGroup extends string = string,
> = FormContextValues<TForm, TGroup> & HasClassName & HasChildren;

export const FormProvider = <
  TForm extends FormBase = FormBase,
  TGroup extends string = string,
>({
  form,
  className,
  children,
}: FormProviderProps<TForm, TGroup>) => {
  return (
    <FormContext value={{ form: form as Form }}>
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
