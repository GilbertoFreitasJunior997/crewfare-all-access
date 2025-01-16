"use client";

import { useInput } from "@/hooks/use-input";
import { LabelHTMLAttributes, MouseEvent, memo } from "react";
import { twMerge } from "tailwind-merge";

export type InputLabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export const inputLabelClassName =
  "text-sm mb-3 block cursor-pointer select-none w-min text-nowrap";

export const InputLabel = memo(
  ({ className, onClick, ...props }: InputLabelProps) => {
    const { name, label, showLabel, isDisabled } = useInput();

    if (!label || !showLabel) {
      return null;
    }

    const handleClick = (e: MouseEvent<HTMLLabelElement>) => {
      if (isDisabled) {
        return;
      }

      onClick?.(e);
    };

    return (
      <label
        htmlFor={name}
        {...props}
        onClick={handleClick}
        className={twMerge(inputLabelClassName, className)}
      >
        {label}
      </label>
    );
  },
);
