"use client";

import { type PropsWithChildren, createContext } from "react";
import type { Step } from "../stepper-provider";

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
