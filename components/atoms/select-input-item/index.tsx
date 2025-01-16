import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon } from "lucide-react";

export type SelectInputItem = {
  label: string;
  value: string;
};

export const SelectInputItem = ({ label, value }: SelectInputItem) => (
  <SelectPrimitive.Item
    value={value}
    className="relative flex w-full cursor-pointer items-center rounded-md py-2 pl-2 pr-8 text-sm outline-none focus:bg-background/40 focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[state=checked]:bg-background/50"
  >
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <CheckIcon className="size-4 text-accent" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{label}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
);
