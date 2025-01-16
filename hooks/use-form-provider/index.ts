"use client";

import { FormContext } from "@/components/atoms/form-provider";
import { useContext } from "react";
import type { Form, FormBase } from "../use-form";

export const useFormProvider = <
  TForm extends FormBase = FormBase,
  TGroup extends string = string,
>() => {
  const { form } = useContext(FormContext);

  return {
    form: form as Form<TForm, TGroup> | undefined,
  };
};
