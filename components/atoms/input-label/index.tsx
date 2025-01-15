"use client";

import { useInput } from "@/hooks/use-input";
import { memo } from "react";
import { twMerge } from "tailwind-merge";

export type InputLabelProps = {
  className?: string;
};

export const InputLabel = memo(({ className }: InputLabelProps) => {
  const { name, label } = useInput();

  return (
    <label
      htmlFor={name}
      className={twMerge("text-sm mb-3 block", className)}
    >
      {label ?? name}
    </label>
  );
});
