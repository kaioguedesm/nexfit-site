"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Container from "./Container";

const NAV_LINKS = [
  { href: "/#recursos", label: "Recursos" },
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/faq", label: "FAQ" },
  { href: "/suporte", label: "Suporte" },
];

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function onScroll() {
      const node = headerRef.current;
      if (!node) return;
      if (window.scrollY > 8) {
        node.dataset.scrolled = "true";
      } else {
        node.dataset.scrolled = "false";
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      data-scrolled="false"
      className="sticky top-0 z-50 border-b border-transparent bg-bg/70 backdrop-blur-xl transition-[border-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] data-[scrolled=true]:border-line/60 data-[scrolled=true]:shadow-[0_1px_0_rgba(12,18,16,0.04),0_12px_24px_-20px_rgba(12,18,16,0.25)]"
    >
      <Container className="flex h-[68px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-nexfit.svg"
            alt="Nex Fit"
            width={16}
            height={32}
            className="h-8 w-auto"
          />
          <span className="font-display text-[15px] font-semibold tracking-tight">
            Nex Fit
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-[13.5px] text-ink-soft transition-colors duration-200 hover:text-ink"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <Link
          href="/#baixar"
          className="rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-bg transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-primary-deep hover:shadow-[0_4px_16px_-4px_rgba(22,84,58,0.5)] active:scale-[0.97]"
        >
          Baixar o app
        </Link>
      </Container>
    </header>
  );
}
