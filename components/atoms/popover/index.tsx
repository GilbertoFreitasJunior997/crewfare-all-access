"use client";

import * as PopoverPrimitive from "@radix-ui/react-popover";
import { twMerge } from "tailwind-merge";

const Root = PopoverPrimitive.Root;
const Trigger = PopoverPrimitive.Trigger;

const Content = ({
  className,
  align = "start",
  sideOffset = 4,
  ...props
}: PopoverPrimitive.PopoverContentProps) => {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        align={align}
        sideOffset={sideOffset}
        className={twMerge(
          "z-50 p-3 w-auto rounded-md border border-border bg-secondary shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
};

export const Popover = {
  Root,
  Trigger,
  Content,
};
