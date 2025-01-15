"use client";

import * as PopoverPrimitive from "@radix-ui/react-popover";
import { format } from "date-fns";
import {
  CalendarDaysIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import { twMerge } from "tailwind-merge";
import { Button } from "../button";
import { inputContainerClassName } from "../text-input";
import { dateRangeInputClassNames } from "./consts";

export type DateRangeInputProps = {
  className?: string;
};

export const DateRangeInput = ({ className }: DateRangeInputProps) => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2025, 0, 15),
    to: new Date(2025, 0, 20),
  });

  const formatDisplayDate = (date?: Date) =>
    date ? format(date, "MM/dd/y") : undefined;
  const formattedFrom = formatDisplayDate(date?.from);
  const formattedTo = formatDisplayDate(date?.to);

  return (
    <PopoverPrimitive.Root>
      <PopoverPrimitive.Trigger asChild={true}>
        <Button
          variant="secondary"
          className={twMerge(
            inputContainerClassName,
            "justify-between",
            className,
          )}
        >
          {date ? (
            <>
              {formattedFrom} - {formattedTo}
            </>
          ) : (
            <span>Pick a date</span>
          )}

          <CalendarDaysIcon className="text-accent" />
        </Button>
      </PopoverPrimitive.Trigger>

      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          align="start"
          sideOffset={4}
          className="w-auto z-50 rounded-md border border-border bg-secondary shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
        >
          <DayPicker
            autoFocus={true}
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            showOutsideDays={true}
            className="p-3"
            classNames={dateRangeInputClassNames}
            mode="range"
            components={{
              NextMonthButton: (props) => (
                <button {...props}>
                  <ChevronRightIcon className="size-4" />
                </button>
              ),
              PreviousMonthButton: (props) => (
                <button {...props}>
                  <ChevronLeftIcon className="size-4" />
                </button>
              ),
            }}
          />
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
};
