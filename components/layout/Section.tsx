import { ReactNode } from "react";
import Container from "./Container";

export default function Section({
  children,
  className = "",
  id,
  dark = false,
  glow = false,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  glow?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative py-[clamp(5rem,4rem+6vw,10rem)] ${
        dark ? "bg-bg-deep text-bg" : ""
      } ${className}`}
    >
      {glow && (
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-x-0 top-0 h-[420px] ${
            dark ? "glow-primary-dark" : "glow-primary"
          }`}
        />
      )}
      <Container className="relative">{children}</Container>
    </section>
  );
}
