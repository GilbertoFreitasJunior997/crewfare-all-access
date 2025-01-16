import { Container } from "@/components/atoms/container";
import { SelectInputItem } from "@/components/atoms/select-input-item";
import { ToggleButton } from "@/components/atoms/toggle-button";
import { BannerInput } from "@/components/molecules/banner-input";
import { CheckboxInput } from "@/components/molecules/checkbox-input";
import { SelectInput } from "@/components/molecules/select-input";
import { StepContent } from "@/components/molecules/step-content";
import { TextInput } from "@/components/molecules/text-input";
import { steps } from "@/lib/steps";

const toggleOptions = ["Enable Event", "Disable Event"];
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

export const BasicInformationStep = () => {
  return (
    <StepContent step={steps[0]}>
      <Container className="grid grid-cols-2 gap-5">
        <div className="col-span-2 flex items-center justify-center">
          <ToggleButton options={toggleOptions} />
        </div>

        <SelectInput
          name="eventType"
          label="Event Type"
          items={eventTypes}
          className="col-span-1"
        />
        <TextInput
          name="eventName"
          label="Event Name"
          className="col-span-1"
        />

        <BannerInput
          name="banner"
          label="Banner"
          className="col-span-2"
        />
        <CheckboxInput
          name="bannerOverlayTitle"
          label="Overlay Title on Banner"
          className="col-span-2"
        />
      </Container>
    </StepContent>
  );
};
