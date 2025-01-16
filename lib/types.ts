import type { ReactNode } from "react";

export type HasChildren = {
  /**
   * Content or elements displayed inside the element
   */
  children?: ReactNode;
};

export type HasClassName = {
  /**
   * A list of classes to append to the root element
   */
  className?: string;
};
