import { Container } from "@/components/atoms/container";
import type { SelectInputItem } from "@/components/atoms/select-input-item";
import { BannerInput } from "@/components/molecules/banner-input";
import { CheckboxInput } from "@/components/molecules/checkbox-input";
import { SelectInput } from "@/components/molecules/select-input";
import { StepContent } from "@/components/molecules/step-content";
import { TextInput } from "@/components/molecules/text-input";
import { ToggleButtonInput } from "@/components/molecules/toggle-button-input";
import type { CreateEventFormData } from "@/components/templates/create-event-form";
import { useFormProvider } from "@/hooks/use-form-provider";
import { steps } from "@/lib/steps";
import { twMerge } from "tailwind-merge";

const eventTypes: SelectInputItem[] = [
  {
    value: "public",
    label: "Public Event",
  },
  {
    value: "private",
    label: "Private Event",
  },
  {
    value: "other",
    label: "Other Event",
  },
];

export function BasicInformationStep() {
  const { form } = useFormProvider<CreateEventFormData>();
  if (!form) {
    return null;
  }

  const { getValue, clearValue } = form;

  const hasBannerOverlayTitle = getValue("hasBannerOverlayTitle");
  const overlayTitle = getValue("overlayTitle");

  const handleHasOverlayTitleChange = (isChecked: boolean) => {
    if (isChecked) {
      return;
    }

    clearValue("overlayTitle");
  };

  return (
    <StepContent step={steps[0]}>
      <Container className="grid grid-cols-2">
        <div className="col-span-2 flex items-center justify-center">
          <ToggleButtonInput
            name="eventToggle"
            trueText="Enable Event"
            falseText="Disable Event"
          />
        </div>

        <SelectInput
          name="eventType"
          label="Event Type"
          items={eventTypes}
          className="col-span-2 md:col-span-1"
          isRequired={true}
        />
        <TextInput
          name="eventName"
          label="Event Name"
          className="col-span-2 md:col-span-1"
          isRequired={true}
        />
        <BannerInput
          name="banner"
          label="Banner"
          className="col-span-2"
          text={overlayTitle}
          showText={hasBannerOverlayTitle}
          isRequired={"Please provide a Banner"}
        />

        <CheckboxInput
          name="hasBannerOverlayTitle"
          label="Overlay Title on Banner"
          className="col-span-2"
          onChange={handleHasOverlayTitleChange}
        />

        <TextInput
          name="overlayTitle"
          label="Overlay Title"
          className={twMerge(
            "col-span-2",
            hasBannerOverlayTitle ? "" : "hidden",
          )}
          isRequired={hasBannerOverlayTitle}
        />
      </Container>
    </StepContent>
  );
}
