import { steps } from "@/app/page";
import { Container } from "@/components/atoms/container";
import { ToggleButton } from "@/components/atoms/toggle-button";
import { BannerInput } from "@/components/molecules/banner-input";
import { CheckboxInput } from "@/components/molecules/checkbox-input";
import { SelectInput } from "@/components/molecules/select-input";
import { StepContent } from "@/components/molecules/step-content";
import { TextInput } from "@/components/molecules/text-input";

const toggleOptions = ["Enable Event", "Disable Event"];
export const BasicInformationStep = () => {
  return (
    <StepContent step={steps[0]}>
      <Container className="grid grid-cols-2 gap-5">
        <div className="col-span-2 flex items-center justify-center">
          <ToggleButton options={toggleOptions} />
        </div>

        <SelectInput
          items={[]}
          className="col-span-1"
        />
        <TextInput className="col-span-1" />

        <BannerInput className="col-span-2" />
        <CheckboxInput className="col-span-2">
          Overlay Title on Banner
        </CheckboxInput>
      </Container>
    </StepContent>
  );
};
