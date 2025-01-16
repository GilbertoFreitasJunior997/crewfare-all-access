"use client";

import { InputRules } from "@/components/atoms/input-provider";
import { Step } from "@/components/atoms/stepper-provider";
import { FormEvent, useCallback, useRef, useState } from "react";
import { useStepper } from "../use-stepper";
import { getBaseFieldNameFromGroup, getFieldName } from "./utils";

export type FormFieldGroup = {
  name: string;
  key: number | string;
};

export type FormField<T = unknown> = InputRules<T> & {
  name: string;
  label?: string;
  emptyValue?: T;
  step?: Step;
  group?: FormFieldGroup;
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

  const unregister = (names: string | string[], group?: FormFieldGroup) => {
    const baseNames = Array.isArray(names) ? names : [names];
    const steps = new Set<Step>();

    for (const baseName of baseNames) {
      const name = getFieldName(baseName, group);
      const removedField = fields.current.find((field) => field.name === name);

      if (!removedField) {
        return;
      }

      if (removedField.step) {
        steps.add(removedField.step);
      }

      fields.current = fields.current.filter((field) => field !== removedField);
    }

    if (!hasSubmitted.current) {
      return;
    }

    for (const step of steps) {
      validateStep(step);
    }
  };

  const getValue = <T>(baseName: string, group?: FormFieldGroup) => {
    const name = getFieldName(baseName, group);
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
        const { name, step, group } = field;
        if (step) {
          steps.add(step);
        }

        const value = getValue(field.name);
        const error = checkField(field, value);

        if (error) {
          errors[name] = error;
        }

        if (!group) {
          values[name] = value;
          continue;
        }

        // if its an group (like tax/fee)
        // sets the value as an map, where the key is the group key (like the first row)
        // then sets the value for the key as an object containing the "columns" (fields) of that row
        // later, this map is turned to an array
        // an array isn't used here because it needs to keep track of the unique keys (row "id")
        type GroupValue = Map<string | number, Record<string, unknown>>;
        let groupValue = values[group.name] as GroupValue | undefined;

        if (!groupValue) {
          values[group.name] = new Map<
            string | number,
            Record<string, unknown>
          >();

          groupValue = values[group.name] as GroupValue;
        }

        const valueKey = getBaseFieldNameFromGroup(name);

        groupValue.set(group.key, {
          ...groupValue.get(group.key),
          [valueKey]: value,
        });
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

      // converts the maps into arrays, ignoring their keys ("row id")
      for (const key in values) {
        const value = values[key];
        if (!(value instanceof Map)) {
          continue;
        }

        values[key] = [...value.values()];
      }

      setErrors({});
      onSuccess(values);
    };
  };

  return {
    fields,
    register,
    unregister,
    getValue,
    setValue,
    getError,
    validate,
    handleSubmit,
  };
};

export type Form = ReturnType<typeof useForm>;
