import { TextInput } from "@/components/atoms/text-input";

export default function Home() {
  return (
    <div className="min-h-screen w-screen grid place-content-center">
      <div className="space-y-2">
        <TextInput placeholder="Type here" />
      </div>
    </div>
  );
}
