import type { ReactNode } from "react";

type ButtonProps = {
  onClick?: () => void;
  children?: ReactNode;
  className?: string;
};

export function Button({ onClick, children, className = "" }: ButtonProps) {
  return (
    <button
      className={` ${className} focus:outline-none; my-2 rounded px-4 py-2 font-semibold text-black`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
