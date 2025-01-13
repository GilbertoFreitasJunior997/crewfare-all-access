import { NumberInput } from "@/components/atoms/number-input";
import { TextInput } from "@/components/atoms/text-input";

export default function Home() {
  return (
    <div className="min-h-screen w-screen grid place-content-center px-32">
      <div className="grid grid-cols-4 gap-2">
        <NumberInput className="col-span-2" />
        <TextInput className="col-span-2" />
      </div>
    </div>
  );
}
