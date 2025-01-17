"use client";

import { FormProvider } from "@/components/atoms/form-provider";
import type { SelectInputItem } from "@/components/atoms/select-input-item";
import { StepsRender } from "@/components/atoms/steps-render";
import type { BannerInputValue } from "@/components/molecules/banner-input";
import type { DateRangeInputValue } from "@/components/molecules/date-range-input";
import { StepNavigationFooter } from "@/components/molecules/step-navigation-footer";
import { type FormErrors, useForm } from "@/hooks/use-form";
import { toast } from "sonner";

export type CreateEventFormData = {
  eventToggle: boolean;
  eventType: SelectInputItem;
  eventName: string;
  banner: BannerInputValue;
  hasBannerOverlayTitle: boolean;
  overlayTitle: string;

  link: string;
  eventAddress: string;
  venueName: string;
  featuredHotelsTitle: string;
  minimumNights: number;

  bookableDates: DateRangeInputValue;
  date: DateRangeInputValue;
  defaultCheckInOutDates: DateRangeInputValue;

  name: string;
  amount: number;
  type: SelectInputItem;
};
export type CreateEventFormGroups = "taxesFees" | "eventStartEndDates";

export const CreateEventForm = () => {
  const form = useForm();

  const handleSuccess = (data: CreateEventFormData) => {
    toast.success("Success! Check data on console.");
    // biome-ignore lint/suspicious/noConsoleLog: show success data
    console.log(data);
  };

  const handleError = (errors: FormErrors) => {
    toast.error("Error... Check errors on console.");
    // biome-ignore lint/suspicious/noConsoleLog: show errors
    console.log(errors);
  };

  return (
    <FormProvider form={form}>
      <StepsRender />

      <StepNavigationFooter
        onSuccess={handleSuccess}
        onError={handleError}
      />
    </FormProvider>
  );
};
