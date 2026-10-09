// putt components here like a default button all h1 p and so on elements as a collection

import type { ReactNode } from "react";
type GeneralUiProps = {
  children?: ReactNode;
  className?: string;
};
type SectionProps = GeneralUiProps & {};

export function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`mx-auto w-full ${className}`}>{children}</section>
  );
}

type ContainerProps = GeneralUiProps & {};

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-5 my-10 p-8 shadow-md ${className}`}>{children}</div>
  );
}

// headers text
