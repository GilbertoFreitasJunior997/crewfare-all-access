import { memo } from "react";
import { twMerge } from "tailwind-merge";
import { AlertIcon } from "../alert-icon";
import { StepCheckIcon } from "../step-check-icon";
import type { Step, StepStatus } from "../stepper-provider";

export type StepItemProps = {
  /**
   * The index of the step item, used for display.
   *
   * @example 1
   */
  index: number;

  /**
   * The step data for this item
   */
  step: Step;

  /**
   * The current status of the step, which can be one of:
   * - "indeterminate": The step is in progress.
   * - "success": The step has been completed successfully.
   * - "error": There was an error in the step.
   *
   * @example "success"
   */
  status: StepStatus;

  /**
   * Whether the step is currently active.
   *
   * @default false
   */
  isActive: boolean;

  /**
   * Callback function to select the step. Triggered when the step is clicked.
   *
   * @param step The step being selected.
   *
   * @example (step) => { console.log(step) }
   */
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
