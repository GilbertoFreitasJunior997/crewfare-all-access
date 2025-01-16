"use client";

import { InputRules } from "@/components/atoms/input-provider";
import { Step } from "@/components/atoms/stepper-provider";
import { FormEvent, useCallback, useRef, useState } from "react";

export type FormField<T = unknown> = InputRules & {
  name: string;
  label?: string;
  emptyValue?: T;
  step?: Step;
};

export const useForm = () => {
  const fields = useRef<FormField[]>([]);

  const [values, setValues] = useState<Record<string, unknown>>({});
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});

  const hasSubmitted = useRef(false);

  const getFieldByName = useCallback((name: string) => {
    const field = fields.current.find((field) => field.name === name);
    return field;
  }, []);

  const register = useCallback(
    (newField: FormField) => {
      const { name, emptyValue } = newField;

      const hasField = !!getFieldByName(name);

      if (hasField) {
        fields.current = fields.current.map((field) =>
          field.name === name ? { ...field, ...newField } : field,
        );
        return;
      }

      setValues((values) => ({ ...values, [name]: emptyValue }));
      fields.current = [...fields.current, newField];
    },
    [getFieldByName],
  );

  const getValue = <T>(name: string) => {
    const value = values[name];

    return value as T;
  };

  const setValue = <T>(name: string, value: T) => {
    setValues((values) => ({ ...values, [name]: value }));

    return value;
  };

  const getError = (name: string) => {
    const error = errors[name];

    return error;
  };

  const checkField = (field: FormField, value: unknown) => {
    const { name, label, isRequired } = field;

    if (isRequired) {
      const isBoolean = typeof value === "boolean";

      if (!isBoolean && (!value || Number.isNaN(value))) {
        const errorMessage =
          typeof isRequired === "string"
            ? isRequired
            : `Please enter the ${label ?? name}`;

        return errorMessage;
      }
    }

    return undefined;
  };

  const validate = <T = unknown>(name: string, value: T) => {
    if (!hasSubmitted.current) {
      return;
    }

    const field = getFieldByName(name);
    if (!field) {
      return;
    }
    const error = checkField(field, value);

    setErrors((errors) => ({ ...errors, [name]: error }));
  };

  const handleSubmit = (
    onSuccess: (values: Record<string, unknown>) => void,
  ) => {
    return (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      hasSubmitted.current = true;

      const values: Record<string, unknown> = {};
      const errors: Record<string, string> = {};

      for (const field of fields.current) {
        const { name } = field;
        const value = getValue(field.name);

        const error = checkField(field, value);
        if (error) {
          errors[name] = error;
        }

        values[name] = value;
      }

      const hasErrors = !!Object.keys(errors).length;

      if (hasErrors) {
        setErrors(errors);
        return;
      }

      setErrors({});
      onSuccess(values);
    };
  };

  return {
    fields,
    register,
    getValue,
    setValue,
    getError,
    validate,
    handleSubmit,
  };
};

export type Form = ReturnType<typeof useForm>;
