import { cn } from "@/lib/utils";
import {
  Button as ButtonPrimitive,
  ButtonProps as ButtonPrimitiveProps,
} from "@radix-ui/themes";
import React, { FC, useMemo } from "react";

interface ButtonProps extends Omit<ButtonPrimitiveProps, "variant"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...props
}) => {
  const className = useMemo(() => {
    switch (variant) {
      case "primary":
        return "bg-black text-white dark:bg-white dark:text-black border-black dark:border-white dark:hover:bg-black dark:hover:text-white hover:bg-white hover:text-black";
      case "secondary":
        return "bg-transparent text-black dark:text-white border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black";
      default:
        return "";
    }
  }, [variant]);

  return (
    <ButtonPrimitive
      {...props}
      className={cn(
        className,
        props.className,
        "p-6 rounded-none border-2 cursor-pointer border-solid transition-all",
      )}
    >
      {children}
    </ButtonPrimitive>
  );
};
