"use client";

import { Button } from "@/components/atoms/button";
import { Calendar } from "@/components/atoms/calendar";
import { InputContainer } from "@/components/atoms/input-container";
import { InputLabel } from "@/components/atoms/input-label";
import {
  InputBase,
  InputProvider,
  InputProviderRenderProps,
} from "@/components/atoms/input-provider";
import { Popover } from "@/components/atoms/popover";
import { format } from "date-fns";
import { CalendarDaysIcon } from "lucide-react";
import { ElementRef, memo, useRef } from "react";
import { DateInterval, DateRange } from "react-day-picker";
import { twMerge } from "tailwind-merge";

// inner is extracted so it can use hooks at top level
const Inner = ({
  value,
  onChange,
  className,
  disabled,
  inputBoxClassName,
}: DateRangeInputProps & InputProviderRenderProps<DateRange | undefined>) => {
  const triggerRef = useRef<ElementRef<typeof Popover.Trigger>>(null);

  const handleLabelClick = () => {
    triggerRef.current?.click();
  };

  const formatDisplayDate = (date?: Date) =>
    date ? format(date, "MM/dd/y") : undefined;

  const formattedFrom = formatDisplayDate(value?.from);
  const formattedTo = formatDisplayDate(value?.to);

  return (
    <InputContainer className={twMerge("relative", className)}>
      <InputLabel onClick={handleLabelClick} />

      <Popover.Root>
        <Popover.Trigger
          ref={triggerRef}
          asChild={true}
        >
          <Button
            variant="secondary"
            className={twMerge(
              inputBoxClassName,
              "justify-between",
              value ? "" : "text-placeholder",
            )}
          >
            {value ? (
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
            defaultMonth={value?.from}
            selected={value}
            onSelect={onChange}
            numberOfMonths={2}
            mode="range"
            disabled={disabled}
            startMonth={disabled?.before}
            endMonth={disabled?.after}
          />
        </Popover.Content>
      </Popover.Root>
    </InputContainer>
  );
};

export type DateRangeInputProps = InputBase<DateRange | undefined> & {
  className?: string;
  disabled?: DateInterval;
};
export const DateRangeInput = memo((props: DateRangeInputProps) => (
  <InputProvider
    {...props}
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
