import Link from "next/link";
import Container from "./Container";

const NAV_LINKS = [
  { href: "/#recursos", label: "Recursos" },
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/faq", label: "FAQ" },
  { href: "/suporte", label: "Suporte" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-bg/70 backdrop-blur-xl">
      <Container className="flex h-[68px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-primary shadow-[0_0_0_1px_rgba(45,189,110,0.25),0_4px_14px_-4px_rgba(45,189,110,0.55)]">
            <span className="h-2.5 w-2.5 rounded-[2px] bg-bg" />
          </span>
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
