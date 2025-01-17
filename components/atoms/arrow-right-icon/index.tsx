import type { IconCustomProps } from "@/lib/types";

export const ArrowRightIcon = ({
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
      d="M1 1L5.8 7L0.999999 13"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
