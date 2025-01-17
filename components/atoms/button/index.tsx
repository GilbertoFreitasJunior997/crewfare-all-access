import type { HasChildren, HasClassName } from "@/lib/types";
import { type VariantProps, cva } from "class-variance-authority";
import type { MouseEvent } from "react";
import { twMerge } from "tailwind-merge";

const variants = cva(
  "rounded-lg font-bold bg-primary transition-colors flex items-center justify-center text-nowrap overflow-hidden",
  {
    variants: {
      variant: {
        primary: "bg-primary hover:bg-primary/90",
        secondary: "bg-secondary hover:bg-secondary/90",
      },
      size: {
        default: "h-12 px-[42px]",
        icon: "size-12",
      },
      isDisabled: {
        true: "opacity-50 pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      isDisabled: false,
    },
  },
);

export type ButtonProps = VariantProps<typeof variants> &
  HasChildren &
  HasClassName & {
    /**
     * Button HTML type
     *
     * @default "button"
     */
    type?: "button" | "submit";

    /**
     * Function called when button is clicked
     */
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  };

export const Button = ({
  variant,
  size,
  className,
  isDisabled = false,
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={twMerge(variants({ variant, size, isDisabled, className }))}
      disabled={!!isDisabled}
      {...props}
    />
  );
};
