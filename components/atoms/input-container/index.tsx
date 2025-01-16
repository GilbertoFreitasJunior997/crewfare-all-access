import type { PropsWithChildren } from "react";
import { InputError } from "../input-error";

export type InputContainerProps = PropsWithChildren & {
  className?: string;
};

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
