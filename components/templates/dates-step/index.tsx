import { Container } from "@/components/atoms/container";
import { DateRangeInput } from "@/components/molecules/date-range-input";
import { StepContent } from "@/components/molecules/step-content";
import {
  EventStartEndDates,
  eventStartEndDatesGroupName,
} from "@/components/organisms/event-start-end-dates";
import { TaxFees } from "@/components/organisms/tax-fees";
import { useFormProvider } from "@/hooks/use-form-provider";
import { steps } from "@/lib/steps";
import { useMemo } from "react";
import { DateInterval, DateRange } from "react-day-picker";

export const DatesStep = () => {
  const { form } = useFormProvider();

  const bookableRange = form?.getValue<DateRange>("bookableDates");
  const hasBookableRange = !!(bookableRange?.from && bookableRange?.to);
  const disabledDates = useMemo<DateInterval | undefined>(
    () =>
      bookableRange?.from && bookableRange.to
        ? { before: bookableRange.from, after: bookableRange.to }
        : undefined,
    [bookableRange],
  );

  const handleBookableDateChange = () => {
    if (!form) {
      return;
    }
    const { clearValue, clearGroupValue } = form;

    clearValue("defaultCheckInOutDates");
    clearGroupValue(eventStartEndDatesGroupName);
  };

  return (
    <StepContent step={steps[2]}>
      <Container className="grid grid-cols-1">
        <DateRangeInput
          name="bookableDates"
          label="Bookable Start & End Dates"
          isRequired={true}
          info="Please select the Bookable dates before setting the Event or Check-In/Out Start and End dates"
          onChange={handleBookableDateChange}
        />

        <EventStartEndDates
          hasBookableRange={hasBookableRange}
          disabledDates={disabledDates}
        />

        <DateRangeInput
          name="defaultCheckInOutDates"
          label="Default Check-In & Check-Out Dates"
          isRequired={true}
          isDisabled={!hasBookableRange}
          disabled={disabledDates}
        />
      </Container>

      <TaxFees />
    </StepContent>
  );
};
