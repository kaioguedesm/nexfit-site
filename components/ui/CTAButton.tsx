import Link from "next/link";
import { ReactNode } from "react";

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "light";
  className?: string;
}) {
  const styles = {
    primary:
      "sheen bg-primary text-bg-deep shadow-[0_1px_0_rgba(255,255,255,0.4)_inset,0_8px_24px_-8px_rgba(45,189,110,0.65)] hover:bg-primary-deep hover:text-bg hover:shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_10px_28px_-6px_rgba(22,84,58,0.6)] hover:-translate-y-0.5",
    ghost: "border border-line text-ink hover:border-ink",
    light: "bg-bg text-ink-deep hover:bg-primary-soft",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[14.5px] font-medium transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] active:scale-[0.97] active:duration-100 ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function TextCTA({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center gap-1.5 text-[14.5px] font-medium text-ink-soft transition-colors duration-200 hover:text-ink ${className}`}
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-ink transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:w-full" />
      </span>
      <span className="transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}
