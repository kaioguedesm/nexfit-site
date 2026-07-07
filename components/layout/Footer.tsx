import Link from "next/link";
import Container from "./Container";

const COLUMNS = [
  {
    title: "Produto",
    links: [
      { href: "/#recursos", label: "Recursos" },
      { href: "/#como-funciona", label: "Como funciona" },
      { href: "/faq", label: "Perguntas frequentes" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacidade", label: "Política de Privacidade" },
      { href: "/termos", label: "Termos de Uso" },
      { href: "/exclusao-de-conta", label: "Exclusão de Conta" },
    ],
  },
  {
    title: "Suporte",
    links: [
      { href: "/suporte", label: "Central de Suporte" },
      { href: "mailto:suporte@nexfit.app.br", label: "suporte@nexfit.app.br" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-nexfit.svg"
                alt="Nex Fit"
                width={16}
                height={32}
                className="h-8 w-auto"
              />
              <span className="font-display text-[15px] font-semibold">
                Nex Fit
              </span>
            </div>
            <p className="mt-4 max-w-[240px] text-[13.5px] leading-relaxed text-ink-soft">
              O sistema de evolução contínua para o seu treino. Inteligência
              artificial que se adapta a você, todos os dias.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-[12px] font-medium uppercase tracking-wide text-ink-faint">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13.5px] text-ink-soft transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 text-[12.5px] text-ink-faint md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Nex Fit. Todos os direitos reservados.</p>
          <p>Feito para quem treina sério.</p>
        </div>
      </Container>
    </footer>
  );
}
