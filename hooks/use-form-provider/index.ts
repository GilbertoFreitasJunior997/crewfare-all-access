"use client";

import { FormContext } from "@/components/atoms/form-provider";
import { useContext } from "react";
import { Form } from "../use-form";

export const useFormProvider = () => {
  const { form } = useContext(FormContext);

  return {
    form: form as Form | undefined,
  };
};
