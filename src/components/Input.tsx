import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({ className, ...rest }: InputProps) {
  return (
    <input
      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:black block w-full p-2.5 ${className}`}
      {...rest}
    />
  );
}
