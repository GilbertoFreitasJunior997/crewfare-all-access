import { SelectInput } from "@/components/atoms/select-input";
import { TextInput } from "@/components/atoms/text-input";

export default function Home() {
  return (
    <div className="min-h-screen w-screen grid place-content-center px-32">
      <div className="grid grid-cols-4 gap-2">
        <SelectInput
          className="col-span-2"
          items={[
            { label: "Public Event", value: "a" },
            { label: "Private Event", value: "b" },
            { label: "Other Event", value: "c" },
          ]}
        />
        <TextInput className="col-span-2" />
      </div>
    </div>
  );
}
