import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { useId } from "react";
import { twMerge } from "tailwind-merge";
import { CheckIcon } from "../check-icon";

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
    <div className="col-span-2 flex items-center">
      <CheckboxPrimitive.Root
        className={twMerge(
          "size-[18px] border border-[#A3A3A3] rounded-[4px] data-[state=checked]:border-accent data-[state=checked]:bg-accent transition-colors duration-75",
          className,
        )}
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
