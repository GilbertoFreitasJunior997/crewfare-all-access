import { InputContainer } from "@/components/atoms/input-container";
import { InputLabel } from "@/components/atoms/input-label";
import { InputBase, InputProvider } from "@/components/atoms/input-provider";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { ChangeEvent, memo } from "react";
import { twMerge } from "tailwind-merge";

export type NumberInputProps = InputBase<number> & {
  className?: string;
};

export const NumberInput = memo(({ className, ...props }: NumberInputProps) => (
  <InputProvider
    {...props}
    emptyValue={Number.NaN}
    hasValidationDebounce={true}
  >
    {({ value, onChange, inputBoxClassName }) => {
      const { name } = props;

      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.valueAsNumber;

        onChange(newValue);
      };

      const inputValue = value === undefined ? undefined : String(value);

      return (
        <InputContainer className={twMerge("w-full", className)}>
          <InputLabel />

          <div className="relative">
            <input
              id={name}
              name={name}
              className={twMerge(inputBoxClassName, "appearance-none pr-9")}
              type="number"
              value={inputValue}
              onChange={handleChange}
            />

            <div className="flex flex-col absolute right-1 top-1/2 -translate-y-1/2 -space-y-[6px] w-6">
              <button
                type="button"
                aria-label="Increase value"
                className="size-4"
                tabIndex={-1}
              >
                <ChevronUpIcon className="size-4 text-accent" />
              </button>
              <button
                type="button"
                aria-label="Decrease value"
                className="size-4"
                tabIndex={-1}
              >
                <ChevronDownIcon className="size-4 text-accent" />
              </button>
            </div>
          </div>
        </InputContainer>
      );
    }}
  </InputProvider>
));
