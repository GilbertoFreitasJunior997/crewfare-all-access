import { CheckIcon } from "@/components/atoms/check-icon";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { useId } from "react";
import { twMerge } from "tailwind-merge";

export type CheckboxInputProps = CheckboxPrimitive.CheckboxProps;

export const CheckboxInput = ({
  className,
  children,
  ...props
}: CheckboxInputProps) => {
  const { id: outerId } = props;
  const innerId = useId();

  const id = outerId ?? innerId;

  return (
    <div className={twMerge("flex items-center", className)}>
      <CheckboxPrimitive.Root
        className={
          "size-[18px] border border-[#A3A3A3] rounded-[4px] data-[state=checked]:border-accent data-[state=checked]:bg-accent transition-colors duration-75"
        }
        id={id}
        {...props}
      >
        <CheckboxPrimitive.Indicator className="flex items-center justify-center">
          <CheckIcon />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      <label
        className="pl-[11px] text-sm select-none cursor-pointer"
        htmlFor={id}
      >
        {children}
      </label>
    </div>
  );
};
