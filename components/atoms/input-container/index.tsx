import { PropsWithChildren } from "react";

export type InputContainerProps = PropsWithChildren & {
  className?: string;
};

export const InputContainer = ({
  className,
  children,
}: InputContainerProps) => {
  return <div className={className}> {children} </div>;
};
