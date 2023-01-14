import { PropsWithChildren } from "react";

export interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {
  color?: "black" | "white";
  className?: string;
}

export default function PrimaryButton({
  className,
  color = "black",
  ...rest
}: PrimaryButtonProps) {
  return (
    <button
      type="submit"
      className={`text-${
        color === "black" ? "white" : "black"
      } bg-${color} focus:ring-4 focus:outline-none focus:ring-${color} font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center ${className}`}
      {...rest}
    >
      {rest.children}
    </button>
  );
}
