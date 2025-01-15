import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const inputContainerClassName = twMerge(
  "h-12 px-3 w-full bg-secondary rounded-lg border border-secondary outline-none focus:border-border text-sm placeholder:text-placeholder font-medium",
);

export type TextInputProps = InputHTMLAttributes<HTMLInputElement>;

export const TextInput = ({ className, ...props }: TextInputProps) => {
  return (
    <input
      className={twMerge(inputContainerClassName, className)}
      {...props}
    />
  );
};
