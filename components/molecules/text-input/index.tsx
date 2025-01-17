"use client";

import { InputContainer } from "@/components/atoms/input-container";
import { InputLabel } from "@/components/atoms/input-label";
import {
  type InputBase,
  InputProvider,
} from "@/components/atoms/input-provider";
import type { HasClassName } from "@/lib/types";
import { type ChangeEvent, memo } from "react";

export type TextInputProps = InputBase<string> & HasClassName;

export const TextInput = memo(({ className, ...props }: TextInputProps) => (
  <InputProvider
    {...props}
    emptyValue=""
    hasValidationDebounce={true}
  >
    {({ name, value, onChange, inputBoxClassName }) => {
      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        onChange(newValue);
      };

      return (
        <InputContainer className={className}>
          <InputLabel />

          <input
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            placeholder="Type here"
            className={inputBoxClassName}
          />
        </InputContainer>
      );
    }}
  </InputProvider>
));
