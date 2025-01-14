import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { inputContainerClassName } from "../text-input";

export type SelectInputItem = {
  label: string;
  value: string;
};

export type SelectInputProps = {
  items: SelectInputItem[];
  className?: string;
};

const SelectItem = ({ label, value }: SelectInputItem) => (
  <SelectPrimitive.Item
    value={value}
    className="relative flex w-full cursor-pointer items-center rounded-md py-2 pl-2 pr-8 text-sm outline-none focus:bg-background/40 focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[state=checked]:bg-background/50"
  >
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="size-4 text-accent" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{label}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
);

export const SelectInput = ({ items, className }: SelectInputProps) => {
  return (
    <SelectPrimitive.Root>
      <SelectPrimitive.Trigger
        className={twMerge(
          inputContainerClassName,
          "flex items-center justify-between whitespace-nowrap [&>span]:line-clamp-1 font-medium data-[state=open]:border-border text-placeholder",
          className,
        )}
      >
        <SelectPrimitive.Value placeholder="Select..." />
        <SelectPrimitive.Icon asChild>
          <ChevronDown className="size-5 text-accent" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          position="popper"
          className="relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-border bg-secondary shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1"
        >
          <SelectPrimitive.ScrollUpButton className="flex cursor-default items-center justify-center py-1">
            <ChevronUp className="size-4" />
          </SelectPrimitive.ScrollUpButton>
          <SelectPrimitive.Viewport className="p-1 h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] space-y-[2px]">
            {items.map((item) => (
              <SelectItem
                key={item.value}
                {...item}
              />
            ))}
          </SelectPrimitive.Viewport>
          <SelectPrimitive.ScrollDownButton className="flex cursor-default items-center justify-center py-1">
            <ChevronDown className="size-4" />
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
};
