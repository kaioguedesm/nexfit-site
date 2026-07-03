import Container from "../layout/Container";
import CTAButton, { TextCTA } from "../ui/CTAButton";
import EvolutionRing from "./EvolutionRing";
import HeroSpotlight from "./HeroSpotlight";

export default function Hero() {
  return (
    <div className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
      <div
        aria-hidden
        className="glow-primary pointer-events-none absolute inset-x-0 top-0 h-[520px]"
      />

      <HeroSpotlight>
        <Container className="relative">
          <div className="grid items-center gap-16 md:grid-cols-2 md:gap-8">
            <div>
              <span
                className="inline-flex animate-fadeUp items-center gap-1.5 rounded-full border border-line/80 bg-bg/60 px-3 py-1 text-[12px] text-ink-soft opacity-0 backdrop-blur-sm"
                style={{ animationDelay: "80ms" }}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-pulseGlow rounded-full bg-primary" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_6px_rgba(45,189,110,0.8)]" />
                </span>
                Sistema de evolução contínua
              </span>

              <h1
                className="mt-8 animate-fadeUp text-balance font-display text-[44px] font-semibold leading-[1.04] tracking-[-0.02em] text-ink opacity-0 md:text-[76px]"
                style={{ animationDelay: "200ms" }}
              >
                Seu treino
                <br />
                <span className="text-primary-deep">não estagna.</span>
              </h1>

              <p
                className="mt-7 max-w-[420px] animate-fadeUp text-[17px] leading-relaxed text-ink-soft opacity-0 md:text-[18px]"
                style={{ animationDelay: "340ms" }}
              >
                Nex Fit identifica o momento exato em que seu progresso trava
                e ajusta treino, dieta e estímulo — antes que você perceba a
                estagnação.
              </p>

              <div
                className="mt-11 flex animate-fadeUp flex-wrap items-center gap-7 opacity-0"
                style={{ animationDelay: "460ms" }}
                id="baixar"
              >
                <CTAButton href="#" variant="primary">
                  Baixar na App Store
                </CTAButton>
                <TextCTA href="#">Ver no Google Play</TextCTA>
              </div>

              <p
                className="mt-6 animate-fadeUp font-mono text-[11.5px] tracking-wide text-ink-faint opacity-0"
                style={{ animationDelay: "560ms" }}
              >
                Em breve disponível para iOS e Android
              </p>
            </div>

            <div
              className="animate-fadeUp opacity-0"
              style={{ animationDelay: "260ms" }}
            >
              <EvolutionRing />
            </div>
          </div>
        </Container>
      </HeroSpotlight>
    </div>
  );
}
