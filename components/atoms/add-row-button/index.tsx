import type { HasChildren, HasClassName } from "@/lib/types";
import { PlusIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import type { ButtonProps } from "../button";

export type AddRowButtonProps = HasChildren &
  HasClassName &
  Pick<ButtonProps, "onClick" | "isDisabled">;

export const AddRowButton = ({
  className,
  onClick,
  isDisabled = false,
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
