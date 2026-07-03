import Section from "../layout/Section";
import CTAButton from "../ui/CTAButton";
import Reveal from "../ui/Reveal";

export default function FinalCTA() {
  return (
    <Section>
      <Reveal>
        <div className="relative flex flex-col items-center overflow-hidden rounded-xl2 border border-line/70 bg-primary-soft/50 px-8 py-20 text-center md:px-16 md:py-28">
          <div
            aria-hidden
            className="glow-primary pointer-events-none absolute inset-x-0 top-0 h-[300px] opacity-70"
          />
          <div className="relative">
            <h2 className="max-w-[520px] text-balance font-display text-[30px] font-semibold tracking-tight text-ink md:text-[42px]">
              Pare de treinar no automático.
            </h2>
            <p className="mx-auto mt-5 max-w-[420px] text-[15px] leading-relaxed text-ink-soft">
              Comece com o Nex Fit e deixe a IA identificar o que está
              travando o seu progresso.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <CTAButton href="#baixar" variant="primary">
                Baixar na App Store
              </CTAButton>
              <CTAButton href="#baixar" variant="ghost">
                Baixar no Google Play
              </CTAButton>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
