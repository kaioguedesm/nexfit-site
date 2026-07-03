import { ReactNode } from "react";
import Container from "../layout/Container";

export function LegalLayout({
  eyebrow,
  title,
  updatedAt,
  children,
}: {
  eyebrow: string;
  title: string;
  updatedAt: string;
  children: ReactNode;
}) {
  return (
    <div className="py-20 md:py-28">
      <Container className="max-w-[760px]">
        <p className="font-mono text-[12px] uppercase tracking-wide text-primary-deep">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-display text-[34px] font-semibold tracking-tight text-ink md:text-[42px]">
          {title}
        </h1>
        <p className="mt-3 text-[13.5px] text-ink-faint">
          Última atualização: {updatedAt}
        </p>

        <div className="legal-content mt-12 space-y-8">{children}</div>
      </Container>
    </div>
  );
}

export function LegalBlock({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h2 className="font-display text-[19px] font-semibold text-ink">
        {heading}
      </h2>
      <div className="mt-3 space-y-3 text-[14.5px] leading-relaxed text-ink-soft [&_a]:text-primary-deep [&_a]:underline [&_a]:underline-offset-2 [&_li]:ml-5 [&_li]:list-disc">
        {children}
      </div>
    </div>
  );
}
