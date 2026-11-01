import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer transition-all duration-250 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "rounded-full px-8 py-4 bg-white text-[var(--bg)] font-semibold shadow-[0_5px_0_var(--accent-deep)] shadow-[0_12px_30px_-8px_var(--accent-glow)] active:translate-y-[3px] active:shadow-[0_2px_0_var(--accent-deep)]",
        destructive:
          "rounded-full px-8 py-4 bg-destructive text-destructive-foreground font-semibold shadow-[0_5px_0_#b91c1c] active:translate-y-[3px] active:shadow-[0_2px_0_#b91c1c]",
        outline:
          "rounded-full px-8 py-4 border border-border-strong bg-transparent text-accent-light hover:bg-[rgba(59,156,255,0.12)]",
        secondary: "rounded-full px-8 py-4 bg-surface text-text font-semibold hover:bg-[rgba(255,255,255,0.08)]",
        ghost: "rounded-full px-8 py-4 bg-transparent text-accent-light hover:bg-[rgba(59,156,255,0.12)]",
        link: "text-accent-light underline-offset-4 hover:underline hover:text-text",
      },
      size: {
        default: "h-auto text-sm",
        sm: "h-auto rounded-md px-3 text-xs",
        lg: "h-auto rounded-md px-8",
        icon: "h-9 w-9 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
