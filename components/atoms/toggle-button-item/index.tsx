import { twMerge } from "tailwind-merge";

export type ToggleButtonItemProps = {
  text: string;
  isSelected: boolean;
  onSelect: (text: string) => void;
};
export const ToggleButtonItem = ({
  text,
  isSelected,
  onSelect,
}: ToggleButtonItemProps) => {
  const handleSelect = () => {
    onSelect(text);
  };

  return (
    <button
      type="button"
      onClick={handleSelect}
      className={twMerge(
        "py-2 px-[29.5px] text-sm font-bold rounded-lg transition-colors duration-75 grow",
        isSelected ? "text-foreground" : "text-primary",
      )}
    >
      {text}
    </button>
  );
};
