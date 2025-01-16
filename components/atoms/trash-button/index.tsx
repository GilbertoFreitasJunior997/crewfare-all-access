import { Trash2Icon } from "lucide-react";
import { twMerge } from "tailwind-merge";

export type TrashButtonProps = {
  className?: string;
  onClick?: () => void;
};

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
