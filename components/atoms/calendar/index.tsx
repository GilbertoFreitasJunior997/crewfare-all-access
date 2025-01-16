import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { DayPicker, type DayPickerProps } from "react-day-picker";
import { twMerge } from "tailwind-merge";

export const Calendar = (props: DayPickerProps) => {
  return (
    <DayPicker
      autoFocus={true}
      showOutsideDays={true}
      className="p-3"
      classNames={{
        months: "flex gap-1 justify-center flex-col md:flex-row",
        month: "space-y-2",
        month_caption: "text-center",
        caption_label: "text-sm font-semibold",
        button_previous: "absolute left-2",
        button_next: "absolute right-2",
        weekdays: "flex",
        weekday: "text-placeholder w-8 font-normal text-[0.8rem]",
        week: "flex w-full mt-1",
        day_button: "text-sm",
        day: "size-8 flex items-center justify-center fist:rounded-l-md last:rounded-r-md",
        range_start: "day-range-start rounded-none rounded-s-md",
        range_middle:
          "aria-selected:bg-background/50 aria-selected:text-accent-foreground rounded-none",
        range_end: "day-range-end rounded-none rounded-e-md",
        selected: "bg-primary",
        today: "bg-background rounded-md",
        outside: "opacity-30 aria-selected:opacity-50",
        disabled: "opacity-30",
      }}
      components={{
        NextMonthButton: ({ className, ...props }) => (
          <button
            {...props}
            className={twMerge(className, props.disabled ? "hidden" : "")}
          >
            <ChevronRightIcon className="size-4" />
          </button>
        ),
        PreviousMonthButton: ({ className, ...props }) => (
          <button
            {...props}
            className={twMerge(className, props.disabled ? "hidden" : "")}
          >
            <ChevronLeftIcon className="size-4" />
          </button>
        ),
      }}
      {...props}
    />
  );
};
