import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const variants = cva("rounded-lg font-bold bg-primary transition-colors", {
  variants: {
    variant: {
      primary: "bg-primary hover:bg-primary/90",
      secondary: "bg-secondary hover:bg-secondary/90",
    },
    size: {
      default: "h-12 px-[42px]",
      icon: "size-12 flex items-center justify-center",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

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
  return (
    <button
      type="button"
      className={twMerge(variants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
};
