import Section from "../layout/Section";
import FeatureCard from "../ui/FeatureCard";
import TiltCard from "../ui/TiltCard";
import Reveal from "../ui/Reveal";

const FEATURES = [
  {
    index: "01",
    title: "IA de treino personalizado",
    description:
      "Cada série, carga e progressão é recalculada a partir do seu histórico real — não de uma planilha genérica.",
  },
  {
    index: "02",
    title: "IA de plano alimentar",
    description:
      "Nutrição ajustada ao seu objetivo, rotina e resposta ao treino, revisada continuamente.",
  },
  {
    index: "03",
    title: "Detecção de estagnação",
    description:
      "Um motor de pontuação multidimensional identifica platôs antes que eles afetem seu resultado.",
  },
  {
    index: "04",
    title: "Coach sob demanda",
    description:
      "Orientação clara sobre execução, ajustes de carga e decisões de treino, no momento em que você precisa.",
  },
  {
    index: "05",
    title: "Streak e desafios",
    description:
      "Consistência tratada como métrica central — porque resultado vem de repetição, não de picos isolados.",
  },
  {
    index: "06",
    title: "Estatísticas reais de progresso",
    description:
      "Evolução de carga, volume e frequência em um painel claro, sem gráficos decorativos.",
  },
];

export default function FeatureGrid() {
  return (
    <Section id="recursos" glow>
      <Reveal>
        <div className="max-w-[560px]">
          <p className="font-mono text-[12px] uppercase tracking-wide text-primary-deep">
            Recursos
          </p>
          <h2 className="mt-4 text-balance font-display text-[clamp(1.75rem,1.4rem+1.6vw,2.5rem)] font-semibold tracking-tight text-ink">
            Tudo o que rege sua evolução, em um só lugar.
          </h2>
        </div>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <Reveal key={f.index} delay={i * 70}>
            <TiltCard className="h-full">
              <FeatureCard {...f} />
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
