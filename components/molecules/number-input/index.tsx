import { InputContainer } from "@/components/atoms/input-container";
import { InputLabel } from "@/components/atoms/input-label";
import {
  InputBase,
  InputProvider,
  InputProviderRenderProps,
} from "@/components/atoms/input-provider";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { ChangeEvent, memo, useState } from "react";
import { twMerge } from "tailwind-merge";

const Inner = ({
  name,
  value,
  suffix,
  min,
  allowIntegersOnly,
  onChange,
  className,
  inputBoxClassName,
}: NumberInputProps & InputProviderRenderProps<number>) => {
  const [hasFocus, setHasFocus] = useState(false);

  const handleChange = (value: number) => {
    let newValue = value;
    if (min !== undefined && newValue < min) {
      newValue = min;
    }

    onChange(newValue);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.valueAsNumber;
    if (allowIntegersOnly) {
      newValue = Number.parseInt(String(newValue));
    }
    handleChange(newValue);
  };

  const handleFocus = () => {
    setHasFocus(true);
  };

  const handleBlur = () => {
    setHasFocus(false);
  };

  const handleAddClick = () => {
    const newValue = (value || 0) + 1;
    handleChange(newValue);
  };

  const handleSubractClick = () => {
    const newValue = (value || 0) - 1;
    handleChange(newValue);
  };

  const displayValue =
    Number.isNaN(value) || value === undefined
      ? ""
      : `${value}${suffix ? (hasFocus ? "" : suffix) : ""}`;

  return (
    <InputContainer className={twMerge("w-full", className)}>
      <InputLabel />

      <div className="relative">
        <input
          id={name}
          name={name}
          className={twMerge(inputBoxClassName, "appearance-none pr-9")}
          type={hasFocus ? "number" : "text"}
          value={displayValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <div className="flex flex-col absolute right-1 top-1/2 -translate-y-1/2 -space-y-[6px] w-6">
          <button
            type="button"
            aria-label="Increase value"
            className="size-4"
            tabIndex={-1}
            onClick={handleAddClick}
          >
            <ChevronUpIcon className="size-4 text-accent" />
          </button>
          <button
            type="button"
            aria-label="Decrease value"
            className="size-4"
            tabIndex={-1}
            onClick={handleSubractClick}
          >
            <ChevronDownIcon className="size-4 text-accent" />
          </button>
        </div>
      </div>
    </InputContainer>
  );
};

export type NumberInputProps = InputBase<number> & {
  className?: string;
  suffix?: string;
  allowIntegersOnly?: boolean;
  min?: number;
};
export const NumberInput = memo((props: NumberInputProps) => (
  <InputProvider
    {...props}
    emptyValue={Number.NaN}
    defaultValue={props.defaultValue ?? props.min}
    hasValidationDebounce={true}
  >
    {(providerProps) => (
      <Inner
        {...props}
        {...providerProps}
      />
    )}
  </InputProvider>
));
