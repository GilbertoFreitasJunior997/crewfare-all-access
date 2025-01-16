"use client";

import { useInput } from "@/hooks/use-input";
import { type LabelHTMLAttributes, type MouseEvent, memo } from "react";
import { twMerge } from "tailwind-merge";
import { InfoIcon } from "../info-icon";
import { Tooltip } from "../tooltip";

export type InputLabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export const inputLabelClassName =
  "text-sm mb-3 block cursor-pointer select-none w-min text-nowrap";

export const InputLabel = memo(
  ({ className, onClick, ...props }: InputLabelProps) => {
    const { name, label, showLabel, info, isDisabled } = useInput();

    if (!label || !showLabel) {
      return null;
    }

    const handleClick = (e: MouseEvent<HTMLLabelElement>) => {
      if (isDisabled) {
        return;
      }

      onClick?.(e);
    };

    return (
      <div
        className={twMerge(
          inputLabelClassName,
          "flex items-center gap-[9px]",
          className,
        )}
      >
        <label
          htmlFor={name}
          {...props}
          onClick={handleClick}
          className="cursor-pointer"
        >
          {label}
        </label>

        {info && (
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger>
                <InfoIcon />
              </Tooltip.Trigger>
              <Tooltip.Content className="w-60">{info}</Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
        )}
      </div>
    );
  },
);
