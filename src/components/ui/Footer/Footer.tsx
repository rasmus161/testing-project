import type { ReactNode } from "react";

type FooterProps = {
  children: ReactNode;
  className: string;
};

export function Footer({ children, className = "" }: FooterProps) {
  return (
    <footer
      className={`mt-auto flex min-h-[150px] items-center justify-center text-center ${className} `}
    >
      {children}
    </footer>
  );
}
