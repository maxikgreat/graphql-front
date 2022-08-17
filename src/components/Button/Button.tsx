import { PropsWithChildren } from "react";

interface ButtonProps {
  appearance?: "default" | "outline";
  className?: string;
}

export const Button = ({
  children,
  appearance = "default",
  className = "",
}: PropsWithChildren<ButtonProps>) => {
  const defaultClassName = "bg-blue-900 text-white hover:bg-blue-700";
  const outlineClassName =
    "border-2 border-blue-900 text-blue-900 hover:bg-blue-700 hover:text-white hover:border-blue-700";

  const appearanceClassName =
    appearance === "default" ? defaultClassName : outlineClassName;

  return (
    <button
      className={`${appearanceClassName} transition-colors px-4 py-2 rounded-xl ${className}`}
    >
      {children}
    </button>
  );
};
