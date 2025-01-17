import type { HasChildren, HasClassName } from "@/lib/types";
import { InputError } from "../input-error";

export type InputContainerProps = HasChildren & HasClassName;

export const InputContainer = ({
  className,
  children,
}: InputContainerProps) => {
  return (
    <div className={className}>
      {children}

      <InputError />
    </div>
  );
};
