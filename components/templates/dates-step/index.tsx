import { Container } from "@/components/atoms/container";
import { DateRangeInput } from "@/components/molecules/date-range-input";
import { StepContent } from "@/components/molecules/step-content";
import { EventStartEndDates } from "@/components/organisms/event-start-end-dates";
import { TaxFees } from "@/components/organisms/tax-fees";
import { useFormProvider } from "@/hooks/use-form-provider";
import { steps } from "@/lib/steps";
import { DateRange } from "react-day-picker";

export const DatesStep = () => {
  const { form } = useFormProvider();

  const bookableRange = form?.getValue<DateRange>("defaultCheckInOutDates");
  const hasBookableRange = !!bookableRange?.from && !!bookableRange?.to;

  return (
    <StepContent step={steps[2]}>
      <Container className="grid grid-cols-1">
        <DateRangeInput
          name="defaultCheckInOutDates"
          label="Default Check-In & Check-Out Dates"
          isRequired={true}
          info="Please select the Check-In and Check-Out dates before setting the Event or Booking Start and End dates"
        />

        <EventStartEndDates hasBookableRange={hasBookableRange} />

        <DateRangeInput
          name="bookableStartEndDates"
          label="Bookable Start & End Dates"
          isRequired={true}
          isDisabled={!hasBookableRange}
        />
      </Container>

      <TaxFees />
    </StepContent>
  );
};
