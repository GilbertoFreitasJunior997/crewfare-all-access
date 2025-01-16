import { Container } from "@/components/atoms/container";
import { NumberInput } from "@/components/molecules/number-input";
import { StepContent } from "@/components/molecules/step-content";
import { TextInput } from "@/components/molecules/text-input";
import { steps } from "@/lib/steps";

const validateLink = (value: string) => {
  const regex = /^[a-zA-Z0-9-/]*$/;

  if (regex.test(value)) {
    return undefined;
  }

  return "Links can only have letters, numbers, and dashes";
};

export const DetailsStep = () => {
  return (
    <StepContent step={steps[1]}>
      <Container className="grid grid-cols-2">
        <TextInput
          name="link"
          label="Link"
          className="col-span-2"
          isRequired={true}
          customValidation={validateLink}
        />

        <TextInput
          name="eventAddress"
          label="Event Address"
          className="col-span-1"
          isRequired={true}
        />
        <TextInput
          name="venueName"
          label="Venue Name"
          className="col-span-1"
          isRequired={true}
        />

        <TextInput
          name="featuredHotelsTitle"
          label="Featured Hotels Title"
          className="col-span-1"
          isRequired={true}
          defaultValue="Featured hotels"
        />
        <NumberInput
          name="minimumNights"
          label="Minimum Nights"
          className="col-span-1"
          isRequired={true}
          allowIntegersOnly={true}
          min={0}
        />
      </Container>
    </StepContent>
  );
};
