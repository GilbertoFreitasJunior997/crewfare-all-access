"use client";

import { InputContainer } from "@/components/atoms/input-container";
import { InputLabel } from "@/components/atoms/input-label";
import { InputBase, InputProvider } from "@/components/atoms/input-provider";
import { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

export const inputBoxClassName = twMerge(
  "h-12 px-3 w-full bg-secondary rounded-lg border border-secondary outline-none focus:border-border text-sm placeholder:text-placeholder font-medium",
);

export type TextInputProps = InputBase<string> & {
  className?: string;
};

export const TextInput = ({ className, ...props }: TextInputProps) => (
  <InputProvider
    {...props}
    emptyValue=""
  >
    {({ value, onChange }) => {
      const { name } = props;

      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
      };

      return (
        <InputContainer className={className}>
          <InputLabel />

          <input
            name={name}
            className={inputBoxClassName}
            value={value}
            onChange={handleChange}
          />
        </InputContainer>
      );
    }}
  </InputProvider>
);
