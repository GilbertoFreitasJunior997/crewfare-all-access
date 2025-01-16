"use client";

import { StepperProvider } from "@/components/atoms/stepper-provider";
import { steps } from "@/lib/steps";
import type { PropsWithChildren } from "react";

export const LayoutProviders = ({ children }: PropsWithChildren) => (
  <StepperProvider steps={steps}>{children}</StepperProvider>
);
