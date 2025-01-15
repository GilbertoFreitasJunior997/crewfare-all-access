"use client";

import { PropsWithChildren, createContext } from "react";
import { Step } from "../stepper-provider";

export type StepContextValue = {
  step: Step;
};
export const StepContext = createContext({} as StepContextValue);

export type StepProviderProps = PropsWithChildren & {
  step: Step;
};

export const StepProvider = ({ step, children }: StepProviderProps) => {
  return (
    <StepContext
      value={{
        step,
      }}
    >
      {children}
    </StepContext>
  );
};
