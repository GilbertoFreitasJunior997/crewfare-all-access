"use client";

import type { InputRules } from "@/components/atoms/input-provider";
import type { Step } from "@/components/atoms/stepper-provider";
import { useCallback, useRef, useState } from "react";
import { useStepper } from "../use-stepper";
import { getBaseFieldNameFromGroup, getFieldName } from "./utils";

export type FormFieldGroup = {
  name: string;
  key: number;
};

export type FormField<
  TValue = unknown,
  TForm extends FormBase = FormBase,
> = InputRules<TValue> & {
  name: keyof TForm;
  label?: string;
  emptyValue?: TValue;
  step?: Step;
  group?: FormFieldGroup;
  defaultValue?: TValue;
};

export type FormBase = Record<string, unknown>;
export type FormErrors<TForm extends FormBase = FormBase> = {
  [key in keyof TForm]: string | undefined;
};

export const useForm = <
  TForm extends FormBase = FormBase,
  TGroup extends string = string,
>() => {
  const stepper = useStepper();

  const fields = useRef<FormField<TForm[keyof TForm], TForm>[]>([]);

  const [values, setValues] = useState({} as TForm);
  const [errors, setErrors] = useState({} as FormErrors<TForm>);

  const hasSubmitted = useRef(false);

  const getFieldByName = useCallback((name: keyof TForm) => {
    const field = fields.current.find((field) => field.name === name);
    return field;
  }, []);

  const checkField = useCallback(
    <TValue extends TForm[keyof TForm]>(
      field: FormField<TValue, TForm>,
      value: TValue,
    ) => {
      const { name, label, isRequired, customValidation } = field;

      if (isRequired) {
        const isBoolean = typeof value === "boolean";

        if (
          !isBoolean &&
          (typeof value === "number" ? Number.isNaN(value) : !value)
        ) {
          const errorMessage =
            typeof isRequired === "string"
              ? isRequired
              : `Please enter the ${label ?? String(name)}`;

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
    },
    [],
  );

  const getValue = useCallback(
    <TKey extends keyof TForm>(
      baseName: TKey,
      group?: FormFieldGroup,
    ): TForm[TKey] => {
      const name = getFieldName(String(baseName), group);
      const value = values[name] as TForm[TKey];

      return value;
    },
    [values],
  );

  const validateStep = useCallback(
    (step: Step, errors: FormErrors<TForm>) => {
      const stepFields = fields.current.filter((field) => field.step === step);

      for (const field of stepFields) {
        const { name } = field;

        const hasError = !!errors[name];

        if (hasError) {
          stepper?.setStepStatus?.(step, "error");
          return;
        }
      }

      stepper?.setStepStatus?.(step, "success");
    },
    [stepper?.setStepStatus],
  );

  const validate = useCallback(
    <TKey extends keyof TForm>(name: TKey, preValue = null as TForm[TKey]) => {
      if (!hasSubmitted.current) {
        return;
      }

      const field = getFieldByName(name);
      if (!field) {
        return;
      }
      const value = preValue === null ? getValue(name) : preValue;
      const error = checkField(field, value);

      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors, [name]: error };

        // defer state update (unfortunately there is nested function state updates)
        setTimeout(() => {
          if (field.step) {
            validateStep(field.step, newErrors);
          }
        }, 0);

        return newErrors;
      });
    },
    [checkField, getFieldByName, getValue, validateStep],
  );

  const register = useCallback(
    (newField: FormField<TForm[keyof TForm], TForm>) => {
      const { name, emptyValue, defaultValue } = newField;

      const hasField = !!getFieldByName(name);
      const initialValue = defaultValue ?? emptyValue;

      if (hasField) {
        fields.current = fields.current.map((field) =>
          field.name === name ? { ...field, ...newField } : field,
        );

        validate(name);
      } else {
        setValues((values) => ({
          ...values,
          [name]: initialValue,
        }));
        fields.current = [...fields.current, newField];

        validate(name, initialValue as TForm[keyof TForm]);
      }
    },
    [getFieldByName, validate],
  );

  const unregister = (
    names: keyof TForm | (keyof TForm)[],
    group?: FormFieldGroup,
  ) => {
    const baseNames = Array.isArray(names) ? names : [names];
    const steps = new Set<Step>();

    for (const baseName of baseNames) {
      const name = getFieldName(String(baseName), group);
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
      validateStep(step, errors);
    }
  };

  const setValue = <TKey extends keyof TForm>(
    name: TKey,
    value: TForm[TKey],
  ) => {
    setValues((values) => ({ ...values, [name]: value }));

    return value;
  };

  const clearValue = (name: keyof TForm) => {
    const field = getFieldByName(name);
    if (!field) {
      return;
    }

    setValues((values) => ({ ...values, [name]: field.emptyValue }));
  };

  const clearGroupValue = (groupName: TGroup) => {
    const clearedValues = {} as Partial<TForm>;

    for (const field of fields.current) {
      const { name, group, emptyValue } = field;

      if (group?.name !== groupName) {
        continue;
      }

      clearedValues[name] = emptyValue;
    }

    setValues((values) => ({ ...values, ...clearedValues }));
  };

  const getError = (name: string) => {
    const error = errors[name];

    return error;
  };

  const handleSubmit = (
    onSuccess?: (values: TForm) => void,
    onError?: (errors: FormErrors<TForm>) => void,
  ) => {
    return (e: { preventDefault: VoidFunction }) => {
      e.preventDefault();
      hasSubmitted.current = true;

      const steps = new Set<Step>();
      const values = {} as TForm;
      const errors = {} as FormErrors<TForm>;

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
          (values as FormBase)[group.name] = new Map<number, FormBase>();

          groupValue = values[group.name] as GroupValue;
        }

        const valueKey = getBaseFieldNameFromGroup(String(name));

        groupValue.set(group.key, {
          ...groupValue.get(group.key),
          [valueKey]: value,
        });
      }

      const hasErrors = !!Object.keys(errors).length;

      if (hasErrors) {
        setErrors(errors);
        for (const step of steps) {
          validateStep(step, errors);
        }
        onError?.(errors);
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

        (values as FormBase)[key] = [...value.values()];
      }

      setErrors({} as FormErrors<TForm>);
      onSuccess?.(values);
    };
  };

  return {
    fields,
    register,
    unregister,
    getValue,
    setValue,
    clearValue,
    clearGroupValue,
    getError,
    validate,
    handleSubmit,
  };
};

export type Form<
  TForm extends FormBase = FormBase,
  TGroup extends string = string,
> = ReturnType<typeof useForm<TForm, TGroup>>;
