import type { IconCustomProps } from "@/lib/types";

export const ArrowLeftIcon = ({
  className,
  fill = "white",
}: IconCustomProps) => (
  <svg
    width="7"
    height="14"
    viewBox="0 0 7 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
  >
    <path
      d="M6 1L1.2 7L6 13"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
