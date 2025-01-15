import { Logo } from "@/components/atoms/logo";
import { memo } from "react";

export const Header = memo(() => {
  return (
    <div className="w-full h-20 bg-black flex items-center justify-center">
      <Logo />
    </div>
  );
});
