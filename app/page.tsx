import { ButtonNext } from "@/components/molecules/button-next";
import { ButtonPrevious } from "@/components/molecules/button-previous";

export default function Home() {
  return (
    <div className="min-h-screen w-screen grid place-content-center">
      <div className="flex gap-4">
        <ButtonPrevious disabled={true} />
        <ButtonNext />
      </div>
    </div>
  );
}
