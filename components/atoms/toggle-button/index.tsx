"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";

type ToggleItemProps = {
  text: string;
  isSelected: boolean;
  onSelect: (text: string) => void;
};
const ToggleItem = ({ text, isSelected, onSelect }: ToggleItemProps) => {
  const handleSelect = () => {
    onSelect(text);
  };

  return (
    <button
      type="button"
      onClick={handleSelect}
      className={twMerge(
        "py-2 px-[29.5px] text-sm font-bold rounded-lg transition-colors duration-75",
        isSelected ? "bg-primary" : "text-primary",
      )}
    >
      {text}
    </button>
  );
};

export type ToggleButtonProps = {
  options: string[];
};

export const ToggleButton = ({ options }: ToggleButtonProps) => {
  const [selected, setSelected] = useState(options[0]);

  const handleSelect = (text: string) => {
    setSelected(text);
  };

  return (
    <div className="bg-primary/10 border border-primary/40 rounded-lg">
      {options.map((option) => {
        const isSelected = selected === option;

        return (
          <ToggleItem
            key={option}
            text={option}
            isSelected={isSelected}
            onSelect={handleSelect}
          />
        );
      })}
    </div>
  );
};
