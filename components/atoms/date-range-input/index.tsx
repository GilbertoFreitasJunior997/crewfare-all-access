"use client";

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
import { Popover } from "../popover";
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
    <Popover.Root>
      <Popover.Trigger asChild={true}>
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
      </Popover.Trigger>

      <Popover.Content>
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
      </Popover.Content>
    </Popover.Root>
  );
};
