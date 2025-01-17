import type { HasClassName } from "@/lib/types";
import { Trash2Icon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import type { ButtonProps } from "../button";

export type TrashButtonProps = HasClassName & Pick<ButtonProps, "onClick">;

export const TrashButton = ({ className, onClick }: TrashButtonProps) => {
  return (
    <button
      type="button"
      className={twMerge(
        "text-danger-foreground hover:bg-secondary/40 h-fit p-1 rounded-lg transition-colors",
        className,
      )}
      onClick={onClick}
    >
      <Trash2Icon className="size-5" />
    </button>
  );
};
