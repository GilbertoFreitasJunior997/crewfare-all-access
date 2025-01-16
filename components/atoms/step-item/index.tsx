import { memo } from "react";
import { twMerge } from "tailwind-merge";
import { AlertIcon } from "../alert-icon";
import { StepCheckIcon } from "../step-check-icon";
import type { Step, StepStatus } from "../stepper-provider";

export type StepItemProps = {
  index: number;
  step: Step;
  status: StepStatus;
  isActive: boolean;
  onSelect: (step: Step) => void;
};

export const StepItem = memo(
  ({ index, step, status, isActive, onSelect }: StepItemProps) => {
    const { name } = step;

    const handleClick = () => {
      onSelect(step);
    };

    return (
      <li>
        <button
          className={twMerge(
            "flex items-center justify-between h-12 px-2 py-3 rounded-lg border cursor-pointer w-full transition-colors",
            isActive
              ? "bg-background border-secondary"
              : "border-transparent hover:bg-background/60",
          )}
          onClick={handleClick}
          type="button"
        >
          <div className="flex items-center gap-3">
            <div
              className={twMerge(
                "size-6 rounded-full grid place-content-center text-xs font-semibold transition-colors text-white",
                status === "success"
                  ? "bg-accent text-background-accent"
                  : isActive
                    ? "bg-primary "
                    : "bg-secondary text-placeholder",
              )}
            >
              {status === "success" && !isActive ? (
                <StepCheckIcon />
              ) : (
                index + 1
              )}
            </div>

            <span className="text-sm">{name}</span>
          </div>

          <div>{status === "error" && <AlertIcon />}</div>
        </button>
      </li>
    );
  },
);
