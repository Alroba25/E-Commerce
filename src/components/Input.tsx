import { forwardRef, type InputHTMLAttributes } from "react";
<<<<<<< HEAD
=======
import { cn } from "@/lib/utils";
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = forwardRef<HTMLInputElement, IProps>(
  ({ className, ...rest }, ref) => {
    return (
<<<<<<< HEAD
      <input ref={ref} className={className} {...rest} />
=======
      <input ref={ref} className={cn("input-base", className)} {...rest} />
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
    );
  },
);

Input.displayName = "Input";

export default Input;
