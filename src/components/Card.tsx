import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-[var(--card-radius)] bg-white p-4 shadow-[var(--card-shadow)] ${className}`}
    >
      {children}
    </div>
  );
}
