"use client";

import { useInput } from "@/hooks/use-input";
import { twMerge } from "tailwind-merge";

export type InputLabelProps = {
  className?: string;
};

export const InputLabel = ({ className }: InputLabelProps) => {
  const { name, label } = useInput();

  return (
    <label
      htmlFor={name}
      className={twMerge("text-sm mb-3 block", className)}
    >
      {label ?? name}
    </label>
  );
};
