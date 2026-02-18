import { ReactNode } from "react";

type SectionWrapperProps = {
  title: string;
  subtitle?: string;
  actionButton?: { label: string; onClick?: () => void };
  actionButtonClassName?: string;
  titleClassName?: string;
  titleAccent?: boolean;
  children: ReactNode;
  className?: string;
  greenBg?: boolean;
  /** When set, used as section background (overrides greenBg/white). Used for screenshot hero section only. */
  backgroundStyle?: React.CSSProperties;
};

export default function SectionWrapper({
  title,
  subtitle,
  actionButton,
  actionButtonClassName,
  titleClassName,
  titleAccent,
  children,
  className = "",
  greenBg = false,
  backgroundStyle,
}: SectionWrapperProps) {
  const bgClass = backgroundStyle ? "" : greenBg ? "bg-[var(--section-green)]" : "bg-white";
  return (
    <section
      style={backgroundStyle}
      className={`px-4 py-5 ${bgClass} ${className}`}
    >
      <div className="mx-auto max-w-lg">
        <div className="mb-4 flex flex-row-reverse flex-wrap items-start justify-between gap-2">
          <div className={`flex-1 min-w-0 ${titleClassName ?? ""}`}>
            <h2 className="text-xl font-bold text-gray-900">{title}</h2>
            {titleAccent && (
              <div className="mt-1.5 h-0.5 w-10 bg-[#FDD700]" aria-hidden />
            )}
            {subtitle && (
              <p className="mt-0.5 text-sm text-gray-500">{subtitle}</p>
            )}
          </div>
          {actionButton && (
            <a
              href="#"
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium shadow-sm hover:opacity-95 ${actionButtonClassName ?? "bg-[var(--accent-green)] text-white"}`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              {actionButton.label}
            </a>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
