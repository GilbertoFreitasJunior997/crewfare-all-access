import type { IconCustomProps } from "@/lib/types";

export const CheckIcon = ({ className, fill = "#1D1D1F" }: IconCustomProps) => (
  <svg
    width="10"
    height="8"
    viewBox="0 0 10 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
  >
    <path
      d="M3.33333 8L0 4.7276L1.4823 3.2724L3.33333 5.09474L8.5177 0L10 1.4552L3.33333 8Z"
      fill={fill}
    />
  </svg>
);
