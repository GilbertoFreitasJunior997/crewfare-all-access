import { ArrowLeftIcon } from "@/components/atoms/arrow-left-icon";
import { Button, ButtonProps } from "@/components/atoms/button";

export const ButtonPrevious = (props: ButtonProps) => (
  <Button
    size="icon"
    variant="secondary"
    {...props}
  >
    <ArrowLeftIcon />
  </Button>
);
