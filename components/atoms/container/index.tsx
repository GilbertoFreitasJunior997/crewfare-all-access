import type { HasChildren, HasClassName } from "@/lib/types";
import { twMerge } from "tailwind-merge";

export type ContainerProps = HasChildren & HasClassName;

export const Container = ({ className, children }: ContainerProps) => {
  return (
    <section
      className={twMerge(
        "border border-border rounded-xl p-5 gap-5",
        className,
      )}
      data-testid="container"
    >
      {children}
    </section>
  );
};
