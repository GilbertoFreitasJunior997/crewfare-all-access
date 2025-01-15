import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const variants = cva(
  "rounded-lg font-bold bg-primary transition-colors flex items-center justify-center",
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
      disabled: {
        true: "opacity-50",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      disabled: false,
    },
  },
);

export type ButtonProps = VariantProps<typeof variants> &
  ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren;

export const Button = ({
  variant,
  size,
  className,
  children,
  ...props
}: ButtonProps) => {
  const { disabled } = props;

  return (
    <button
      type="button"
      className={twMerge(variants({ variant, size, disabled, className }))}
      {...props}
    >
      {children}
    </button>
  );
};
