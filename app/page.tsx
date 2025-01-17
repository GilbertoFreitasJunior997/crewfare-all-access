import { Stepper } from "@/components/molecules/stepper";
import { CreateEventForm } from "@/components/templates/create-event-form";

export default function Home() {
  return (
    <div className="grow w-full lg:grid lg:grid-cols-[248px_1fr] lg:pl-[180px]">
      <Stepper title="Create Event" />

      <main className="h-fit p-5 space-y-2">
        <CreateEventForm />
      </main>
    </div>
  );
}
