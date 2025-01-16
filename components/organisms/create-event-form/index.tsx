"use client";

import { FormProvider } from "@/components/atoms/form-provider";
import type { SelectInputItem } from "@/components/atoms/select-input-item";
import { StepsRender } from "@/components/atoms/steps-render";
import type { BannerInputValue } from "@/components/molecules/banner-input";
import type { DateRangeInputValue } from "@/components/molecules/date-range-input";
import { StepNavigationFooter } from "@/components/molecules/step-navigation-footer";
import { useForm } from "@/hooks/use-form";

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

  return (
    <FormProvider form={form}>
      <StepsRender />

      <StepNavigationFooter />
    </FormProvider>
  );
};
