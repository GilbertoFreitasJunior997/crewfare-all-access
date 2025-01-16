"use client";

import { InputContainer } from "@/components/atoms/input-container";
import {
  type InputBase,
  InputProvider,
  type InputProviderRenderProps,
} from "@/components/atoms/input-provider";
import { ToggleButtonItem } from "@/components/atoms/toggle-button-item";
import { twMerge } from "tailwind-merge";

const Inner = ({
  trueText,
  falseText,
  value,
  onChange,
}: ToggleButtonInputProps & InputProviderRenderProps<boolean>) => {
  const handleEnable = () => {
    onChange(true);
  };

  const handleDisable = () => {
    onChange(false);
  };

  return (
    <InputContainer className="relative bg-primary/10 border border-primary/40 rounded-lg">
      <div
        className={twMerge(
          "absolute transition-transform h-full w-1/2 rounded-lg bg-primary -z-10",
          value ? "translate-x-0" : "translate-x-full",
        )}
      />

      <ToggleButtonItem
        text={trueText}
        isSelected={!!value}
        onSelect={handleEnable}
      />
      <ToggleButtonItem
        text={falseText}
        isSelected={!value}
        onSelect={handleDisable}
      />
    </InputContainer>
  );
};

export type ToggleButtonInputProps = InputBase<boolean> & {
  trueText: string;
  falseText: string;
};
export const ToggleButtonInput = (props: ToggleButtonInputProps) => (
  <InputProvider
    {...props}
    emptyValue={true}
  >
    {(providerProps) => (
      <Inner
        {...props}
        {...providerProps}
      />
    )}
  </InputProvider>
);
