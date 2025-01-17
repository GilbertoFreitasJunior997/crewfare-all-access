import { Button } from "@/components/atoms/button";
import type { HasClassName } from "@/lib/types";
import { motion } from "framer-motion";
import type { MouseEvent } from "react";

export const saveButtonAnimationDurationMs = 100;

export type SaveButtonProps = HasClassName & {
  isShaking?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

export const SaveButton = ({
  isShaking,
  className,
  onClick,
}: SaveButtonProps) => {
  return (
    <motion.div
      animate={{
        x: isShaking ? [0, -8, 16, -16, 0] : 0,
      }}
      transition={{ duration: saveButtonAnimationDurationMs / 1000 }}
      className={className}
    >
      <Button
        type="submit"
        onClick={onClick}
      >
        Save
      </Button>
    </motion.div>
  );
};
