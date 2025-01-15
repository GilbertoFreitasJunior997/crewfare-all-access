import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type ContainerProps = PropsWithChildren & {
  className?: string;
};

export const Container = ({ className, children }: ContainerProps) => {
  return (
    <section
      className={twMerge("border border-border rounded-xl p-5", className)}
    >
      {children}
    </section>
  );
};
