import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = forwardRef<HTMLInputElement, IProps>(
  ({ className, ...rest }, ref) => {
    return (
      <input ref={ref} className={cn("input-base", className)} {...rest} />
    );
  },
);

Input.displayName = "Input";

export default Input;
