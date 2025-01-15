import { CheckIcon } from "@/components/atoms/check-icon";
import { InputLabel } from "@/components/atoms/input-label";
import { InputBase, InputProvider } from "@/components/atoms/input-provider";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { memo } from "react";
import { twMerge } from "tailwind-merge";

export type CheckboxInputProps = InputBase<boolean> & {
  className?: string;
};
export const CheckboxInput = memo(
  ({ className, ...props }: CheckboxInputProps) => (
    <InputProvider
      {...props}
      emptyValue={false}
    >
      {({ value, onChange }) => {
        const { name } = props;

        const handleChange = (checked: CheckboxPrimitive.CheckedState) => {
          let newValue = !!checked;

          if (typeof checked === "string") {
            newValue = false;
          }

          onChange(newValue);
        };

        return (
          <div className={twMerge("flex items-center", className)}>
            <CheckboxPrimitive.Root
              id={name}
              name={name}
              checked={value}
              onCheckedChange={handleChange}
              className="size-[18px] border border-[#A3A3A3] rounded-[4px] data-[state=checked]:border-accent data-[state=checked]:bg-accent transition-colors duration-75"
            >
              <CheckboxPrimitive.Indicator className="flex items-center justify-center">
                <CheckIcon />
              </CheckboxPrimitive.Indicator>
            </CheckboxPrimitive.Root>

            <InputLabel className="pl-[11px] mb-0" />
          </div>
        );
      }}
    </InputProvider>
  ),
);
