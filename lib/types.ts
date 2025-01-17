import type { ReactNode } from "react";

// utility types extracted so storybook can read the jsdocs
export type HasChildren = {
  /**
   * Content or elements displayed inside the element
   */
  children?: ReactNode;
};

// utility types extracted so storybook can read the jsdocs
export type HasClassName = {
  /**
   * A list of classes to append to the root element
   */
  className?: string;
};

// utility types extracted so storybook can read the jsdocs
export type IconCustomProps = HasClassName & {
  /**
   * Icon color
   */
  fill?: string;
};

// biome-ignore lint/suspicious/noExplicitAny: helper type
export type AnyObject = Record<string, any>;
