import Section from "../layout/Section";
import Reveal from "../ui/Reveal";

const STEPS = [
  {
    step: "01",
    title: "Você treina, o app registra",
    description:
      "Cargas, séries, repetições e sensação de esforço são coletadas a cada sessão — sem fricção, direto do treino.",
  },
  {
    step: "02",
    title: "A IA analisa seu padrão",
    description:
      "O motor de estagnação cruza volume, frequência e progressão de carga para identificar tendências de platô.",
  },
  {
    step: "03",
    title: "Seu plano se ajusta sozinho",
    description:
      "Treino e dieta são recalculados automaticamente, com a mudança certa no momento certo — não no fim do mês.",
  },
];

export default function StepFlow() {
  return (
    <Section id="como-funciona" dark glow>
      <Reveal>
        <div className="max-w-[560px]">
          <p className="font-mono text-[12px] uppercase tracking-wide text-primary">
            Como funciona
          </p>
          <h2 className="mt-4 text-balance font-display text-[32px] font-semibold tracking-tight text-bg md:text-[40px]">
            Da série de hoje ao ajuste de amanhã.
          </h2>
        </div>
      </Reveal>

      <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
        {STEPS.map((s, i) => (
          <Reveal key={s.step} delay={i * 100}>
            <div className="relative md:pl-8 md:first:pl-0 md:border-l md:border-line-deep md:first:border-l-0">
              <span className="font-mono text-[13px] text-primary">
                {s.step}
              </span>
              <h3 className="mt-4 font-display text-[18.5px] font-semibold tracking-tight text-bg">
                {s.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-bg/55">
                {s.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
