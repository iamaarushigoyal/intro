import * as React from "react";
import { cn } from "@/src/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost' | 'icon';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          "disabled:pointer-events-none disabled:opacity-50",
          variant === 'default' && "bg-primary text-primary-foreground shadow hover:bg-primary/90",
          variant === 'ghost' && "hover:bg-accent hover:text-accent-foreground",
          variant === 'icon' && "hover:bg-accent hover:text-accent-foreground",
          size === 'default' && "h-9 px-4 py-2",
          size === 'sm' && "h-8 rounded-md px-3 text-xs",
          size === 'lg' && "h-10 rounded-md px-8",
          size === 'icon' && "h-9 w-9",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };