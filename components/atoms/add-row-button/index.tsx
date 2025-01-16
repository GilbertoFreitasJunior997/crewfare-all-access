import { PlusIcon } from "lucide-react";
import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type AddRowButtonProps = PropsWithChildren & {
  className?: string;
  onClick?: () => void;
  isDisabled?: boolean;
};

export const AddRowButton = ({
  className,
  onClick,
  isDisabled,
  children,
}: AddRowButtonProps) => {
  return (
    <button
      type="button"
      className={twMerge(
        "mt-3 flex gap-2 items-center font-semibold text-accent hover:bg-secondary/40 transition-colors rounded-md pl-1 pr-3",
        isDisabled ? "opacity-50 pointer-events-none" : "",
        className,
      )}
      onClick={onClick}
    >
      <PlusIcon className="size-5" />
      <span className="text-sm">{children}</span>
    </button>
  );
};
