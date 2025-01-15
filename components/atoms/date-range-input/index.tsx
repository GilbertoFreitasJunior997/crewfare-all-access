"use client";

import { format } from "date-fns";
import { CalendarDaysIcon } from "lucide-react";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { twMerge } from "tailwind-merge";
import { Button } from "../button";
import { Calendar } from "../calendar";
import { Popover } from "../popover";
import { inputContainerClassName } from "../text-input";

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
        <Calendar
          defaultMonth={date?.from}
          selected={date}
          onSelect={setDate}
          numberOfMonths={2}
          mode="range"
        />
      </Popover.Content>
    </Popover.Root>
  );
};
