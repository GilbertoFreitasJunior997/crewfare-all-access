import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { inputContainerClassName } from "../text-input";

export type NumberInputProps = InputHTMLAttributes<HTMLInputElement>;

export const NumberInput = ({ className, ...props }: NumberInputProps) => {
  return (
    <div className={twMerge("w-full relative", className)}>
      <input
        className={twMerge(inputContainerClassName, "appearance-none pr-9")}
        type="number"
        {...props}
      />

      <div className="flex flex-col absolute right-1 top-1/2 -translate-y-1/2 -space-y-[6px] w-6">
        <button
          type="button"
          aria-label="Increase value"
          className="size-4"
          tabIndex={-1}
        >
          <ChevronUpIcon className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Decrease value"
          className="size-4"
          tabIndex={-1}
        >
          <ChevronDownIcon className="size-4" />
        </button>
      </div>
    </div>
  );
};
