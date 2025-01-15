import { BannerInput } from "@/components/atoms/banner-input";
import { CheckboxInput } from "@/components/atoms/checkbox-input";
import { DateRangeInput } from "@/components/atoms/date-range-input";
import { SelectInput } from "@/components/atoms/select-input";

export default function Home() {
  return (
    <div className="min-h-screen w-screen px-4 flex flex-col items-center justify-center">
      <div className="grid grid-cols-4 gap-2 w-full">
        <SelectInput
          className="col-span-2"
          items={[
            { label: "Public Event", value: "a" },
            { label: "Private Event", value: "b" },
            { label: "Other Event", value: "c" },
          ]}
        />

        <CheckboxInput>Overlay Title on Banner</CheckboxInput>

        <DateRangeInput className="col-span-4" />

        <BannerInput className="col-span-4" />
      </div>
    </div>
  );
}
