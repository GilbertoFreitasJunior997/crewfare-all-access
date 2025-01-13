import { ArrowRightIcon } from "@/components/atoms/arrow-right-icon";
import { Button, ButtonProps } from "@/components/atoms/button";

export const ButtonNext = (props: ButtonProps) => (
  <Button
    size="icon"
    variant="secondary"
    {...props}
  >
    <ArrowRightIcon />
  </Button>
);
