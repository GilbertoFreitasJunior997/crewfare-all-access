"use client";

import { useInput } from "@/hooks/use-input";
import { LabelHTMLAttributes, memo } from "react";
import { twMerge } from "tailwind-merge";

export type InputLabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export const InputLabel = memo(({ className, ...props }: InputLabelProps) => {
  const { name, label } = useInput();

  return (
    <label
      htmlFor={name}
      {...props}
      className={twMerge(
        "text-sm mb-3 block cursor-pointer select-none w-min",
        className,
      )}
    >
      {label ?? name}
    </label>
  );
});
