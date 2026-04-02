import { forwardRef, type InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = forwardRef<HTMLInputElement, IProps>(
  ({ className, ...rest }, ref) => {
    return (
      <input ref={ref} className={className} {...rest} />
    );
  },
);

Input.displayName = "Input";

export default Input;
