import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}
const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={cn("w-full mx-auto px-3 max-w-screen-xl", className)}>
      {children}
    </div>
  );
};

export default Container;
