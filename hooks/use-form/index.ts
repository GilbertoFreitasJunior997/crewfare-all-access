"use client";

import { Step } from "@/components/atoms/stepper-provider";
import { FormEvent, useCallback, useState } from "react";

export type FormField<T = unknown> = {
  name: string;
  value: T;
  step?: Step;
};

export const useForm = () => {
  const [fields, setFields] = useState<FormField[]>([]);

  const getFieldByName = useCallback(
    (name: string) => {
      const field = fields.find((field) => field.name === name);
      return field;
    },
    [fields],
  );

  const register = useCallback(
    (newField: FormField) => {
      const { name } = newField;

      const hasField = !!getFieldByName(name);

      if (hasField) {
        return;
      }

      setFields((value) => [...value, newField]);
    },
    [getFieldByName],
  );

  const getValue = <T>(name: string) => {
    const field = getFieldByName(name);

    if (!field) {
      return;
    }

    return field.value as T;
  };

  const setValue = <T>(name: string, value: T) => {
    setFields((fields) =>
      fields.map((field) =>
        field.name === name ? { ...field, value } : field,
      ),
    );
  };

  const handleSubmit = (
    onSuccess: (values: Record<string, unknown>) => void,
  ) => {
    return (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const values: Record<string, unknown> = {};

      for (const field of fields) {
        values[field.name] = field.value;
      }

      onSuccess(values);
    };
  };

  return {
    fields,
    register,
    getValue,
    setValue,
    handleSubmit,
  };
};

export type Form = ReturnType<typeof useForm>;
