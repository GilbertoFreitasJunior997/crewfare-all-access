import { twMerge } from "tailwind-merge";
import { Step } from "../stepper-provider";

export type StepItemProps = {
  step: Step;
  isActive: boolean;
  index: number;
  onSelect: (step: Step) => void;
};

export const StepItem = ({
  index,
  step,
  isActive,
  onSelect,
}: StepItemProps) => {
  const { name } = step;

  const handleClick = () => {
    onSelect(step);
  };

  return (
    <li>
      <button
        className={twMerge(
          "flex items-center gap-3 h-12 px-2 py-3 rounded-lg border cursor-pointer w-full transition-colors",
          isActive
            ? "bg-background border-secondary"
            : "border-transparent hover:bg-background/60",
        )}
        onClick={handleClick}
        type="button"
      >
        <div
          className={twMerge(
            "size-6 rounded-full grid place-content-center text-xs font-semibold transition-colors",
            isActive
              ? "bg-primary text-white"
              : "bg-secondary text-placeholder",
          )}
        >
          {index + 1}
        </div>

        <span className="text-sm">{name}</span>
      </button>
    </li>
  );
};
