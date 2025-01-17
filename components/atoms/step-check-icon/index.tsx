import type { IconCustomProps } from "@/lib/types";

export const StepCheckIcon = ({
  className,
  fill = "#141416",
}: IconCustomProps) => (
  <svg
    width="11"
    height="10"
    viewBox="0 0 11 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M1.33325 6.33333L3.48859 7.95C3.62616 8.05315 3.79827 8.09916 3.96896 8.07842C4.13965 8.05767 4.29573 7.97177 4.40459 7.83867L9.99992 1"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
