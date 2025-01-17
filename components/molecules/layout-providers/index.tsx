"use client";

import { StepperProvider } from "@/components/atoms/stepper-provider";
import { steps } from "@/lib/steps";
import type { HasChildren } from "@/lib/types";

export const LayoutProviders = ({ children }: HasChildren) => (
  <StepperProvider steps={steps}>{children}</StepperProvider>
);
