import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}
const Input = React.forwardRef(
  ({ className, ...rest }: InputProps, ref: React.Ref<HTMLInputElement>) => (
    <input
      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:black block w-full p-2.5 ${className}`}
      ref={ref}
      {...rest}
    />
  )
);
export default Input;
