"use client";

import { InputContainer } from "@/components/atoms/input-container";
import { InputLabel } from "@/components/atoms/input-label";
import {
  InputBase,
  InputProvider,
  InputProviderRenderProps,
} from "@/components/atoms/input-provider";
import { SelectInputItem } from "@/components/atoms/select-input-item";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { ElementRef, memo, useRef } from "react";
import { twMerge } from "tailwind-merge";

const Inner = ({
  items,
  className,
  value,
  onChange,
  inputBoxClassName,
}: SelectInputProps &
  InputProviderRenderProps<SelectInputItem | undefined>) => {
  const triggerRef = useRef<ElementRef<typeof SelectPrimitive.Trigger>>(null);

  const handleChange = (selected: string) => {
    if (selected === "") {
      return;
    }

    const newValue = items.find((item) => item.value === selected);

    onChange(newValue);
  };

  const handleLabelClick = () => {
    triggerRef.current?.click();
  };

  return (
    <InputContainer className={className}>
      <InputLabel onClick={handleLabelClick} />

      <SelectPrimitive.Root
        value={value?.value}
        onValueChange={handleChange}
      >
        <SelectPrimitive.Trigger
          ref={triggerRef}
          className={twMerge(
            inputBoxClassName,
            "flex items-center justify-between whitespace-nowrap [&>span]:line-clamp-1 font-medium data-[state=open]:border-border text-placeholder",
            value ? "text-foreground" : "",
          )}
        >
          <SelectPrimitive.Value placeholder="Select..." />
          <SelectPrimitive.Icon asChild>
            <ChevronDownIcon className="size-5 text-accent" />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            position="popper"
            className="relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-border bg-secondary shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1"
          >
            <SelectPrimitive.ScrollUpButton className="flex cursor-default items-center justify-center py-1">
              <ChevronUpIcon className="size-4" />
            </SelectPrimitive.ScrollUpButton>
            <SelectPrimitive.Viewport className="p-1 h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] space-y-[2px]">
              {items.map((item) => (
                <SelectInputItem
                  key={item.value}
                  {...item}
                />
              ))}
            </SelectPrimitive.Viewport>
            <SelectPrimitive.ScrollDownButton className="flex cursor-default items-center justify-center py-1">
              <ChevronDownIcon className="size-4" />
            </SelectPrimitive.ScrollDownButton>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    </InputContainer>
  );
};

export type SelectInputProps = InputBase<SelectInputItem | undefined> & {
  items: SelectInputItem[];
  className?: string;
};

export const SelectInput = memo((props: SelectInputProps) => (
  <InputProvider
    {...props}
    defaultValue={props.defaultValue ?? props.items[0]}
    emptyValue={undefined}
  >
    {(providerProps) => (
      <Inner
        {...props}
        {...providerProps}
      />
    )}
  </InputProvider>
));
