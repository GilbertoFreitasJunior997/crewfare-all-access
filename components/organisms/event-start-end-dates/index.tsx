"use client";

import { AddRowButton } from "@/components/atoms/add-row-button";
import { inputLabelClassName } from "@/components/atoms/input-label";
import { TrashButton } from "@/components/atoms/trash-button";
import { DateRangeInput } from "@/components/molecules/date-range-input";
import type { FormFieldGroup } from "@/hooks/use-form";
import { useFormProvider } from "@/hooks/use-form-provider";
import { useMemo, useState } from "react";
import type { DateInterval } from "react-day-picker";
import { twMerge } from "tailwind-merge";

export const eventStartEndDatesGroupName = "eventStartEndDates";
const fieldName = "date";

type StartEndDateRowProps = {
  fieldKey: number;
  isFirst: boolean;
  hasBookableRange: boolean;
  disabledDates?: DateInterval;
  onRemoveClick: () => void;
};
const StartEndDateRow = ({
  fieldKey,
  isFirst,
  hasBookableRange,
  disabledDates,
  onRemoveClick,
}: StartEndDateRowProps) => {
  const group: FormFieldGroup = useMemo<FormFieldGroup>(
    () => ({
      name: eventStartEndDatesGroupName,
      key: fieldKey,
    }),
    [fieldKey],
  );

  return (
    <section className={twMerge(isFirst ? "" : "relative pr-9")}>
      <DateRangeInput
        name={fieldName}
        className="grow"
        group={group}
        isRequired={true}
        showLabel={false}
        label="Event Start and End Dates"
        isDisabled={!hasBookableRange}
        disabled={disabledDates}
      />

      {!isFirst && (
        <TrashButton
          onClick={onRemoveClick}
          className="absolute right-0 top-[10px]"
        />
      )}
    </section>
  );
};

export type EventStartEndDatesProps = {
  hasBookableRange: boolean;
  disabledDates?: DateInterval;
};
export const EventStartEndDates = ({
  hasBookableRange,
  disabledDates,
}: EventStartEndDatesProps) => {
  const { form } = useFormProvider();

  const [dateRangeRows, setDateRangeRows] = useState<number[]>([
    new Date().getMilliseconds(),
  ]);

  const handleAddRow = () => {
    setDateRangeRows((old) => [...old, new Date().getMilliseconds()]);
  };

  const handleRemoveRow = (key: number) => {
    if (dateRangeRows.length <= 1) {
      return;
    }

    setDateRangeRows((old) => old.filter((row) => row !== key));

    if (!form) {
      return;
    }
    const { unregister } = form;

    unregister(fieldName, {
      name: eventStartEndDatesGroupName,
      key,
    });
  };

  return (
    <div>
      <span className={inputLabelClassName}>Event Start and End Dates</span>

      <section className="flex flex-col gap-5">
        {dateRangeRows.map((key, index) => {
          const isFirst = index === 0;

          return (
            <StartEndDateRow
              key={key}
              fieldKey={key}
              isFirst={isFirst}
              disabledDates={disabledDates}
              hasBookableRange={hasBookableRange}
              onRemoveClick={() => handleRemoveRow(key)}
            />
          );
        })}
      </section>

      <AddRowButton
        onClick={handleAddRow}
        isDisabled={!hasBookableRange}
      >
        Add Event Date Range
      </AddRowButton>
    </div>
  );
};
