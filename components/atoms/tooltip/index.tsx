"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const Provider = TooltipPrimitive.Provider;

const Root = TooltipPrimitive.Root;

const Trigger = TooltipPrimitive.Trigger;

const Content = ({
  className,
  sideOffset = 4,
  ...props
}: ComponentProps<typeof TooltipPrimitive.Content>) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      sideOffset={sideOffset}
      className={twMerge(
        "z-50 overflow-hidden rounded-lg bg-white text-background-accent px-[9px] py-2 text-xs font-semibold",
        "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </TooltipPrimitive.Portal>
);
Content.displayName = TooltipPrimitive.Content.displayName;

export const Tooltip = { Root, Trigger, Content, Provider };
