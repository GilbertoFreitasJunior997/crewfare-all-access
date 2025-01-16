"use client";

import { InputRules } from "@/components/atoms/input-provider";
import { Step } from "@/components/atoms/stepper-provider";
import { FormEvent, useCallback, useRef, useState } from "react";
import { useStepper } from "../use-stepper";

export type FormField<T = unknown> = InputRules<T> & {
  name: string;
  label?: string;
  emptyValue?: T;
  step?: Step;
};

export const useForm = () => {
  const stepper = useStepper();

  const fields = useRef<FormField[]>([]);

  const [values, setValues] = useState<Record<string, unknown>>({});
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});

  const hasSubmitted = useRef(false);

  const getFieldByName = useCallback((name: string) => {
    const field = fields.current.find((field) => field.name === name);
    return field;
  }, []);

  const register = useCallback(
    <T>(newField: FormField<T>) => {
      const { name, emptyValue } = newField;

      const hasField = !!getFieldByName(name);

      if (hasField) {
        fields.current = fields.current.map((field) =>
          field.name === name
            ? ({ ...field, ...newField } as FormField<unknown>)
            : field,
        );
      } else {
        setValues((values) => ({ ...values, [name]: emptyValue }));
        fields.current = [...fields.current, newField as FormField<unknown>];
      }

      validate(name, emptyValue);
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
    const { name, label, isRequired, customValidation } = field;

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

    if (customValidation) {
      const errorMessage = customValidation(value);

      if (errorMessage) {
        return errorMessage;
      }
    }

    return undefined;
  };

  const validateStep = (
    step: Step,
    newValue?: { name: string; value: unknown },
  ) => {
    if (!Object.keys(stepper).length) {
      return;
    }
    const { setStepStatus } = stepper;

    const stepFields = fields.current.filter((field) => field.step === step);

    for (const field of stepFields) {
      const { name } = field;

      // this prevents delayed states
      // since "validate" is called after setValue, the values object is stale for the "name" key
      let value: unknown = undefined;
      if (newValue && newValue.name === name) {
        value = newValue.value;
      } else {
        value = getValue(name);
      }

      const error = checkField(field, value);

      if (error) {
        setStepStatus(step, "error");
        return;
      }
    }

    setStepStatus(step, "success");
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

    if (!field.step) {
      return;
    }
    validateStep(field.step, { name, value });
  };

  const handleSubmit = (
    onSuccess: (values: Record<string, unknown>) => void,
  ) => {
    return (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      hasSubmitted.current = true;

      const steps = new Set<Step>();
      const values: Record<string, unknown> = {};
      const errors: Record<string, string> = {};

      for (const field of fields.current) {
        const { name, step } = field;
        if (step) {
          steps.add(step);
        }

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
        for (const step of steps) {
          validateStep(step);
        }
        return;
      }

      if (Object.keys(stepper).length) {
        const { setStepStatus } = stepper;

        for (const step of steps) {
          setStepStatus(step, "success");
        }
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
