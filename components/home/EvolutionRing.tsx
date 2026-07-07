"use client";

import { useEffect, useRef } from "react";

export default function EvolutionRing() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const ticking = useRef(false);

  useEffect(() => {
    function update() {
      const node = wrapRef.current;
      if (node) {
        const offset = window.scrollY * 0.08;
        node.style.transform = `translateY(${offset.toFixed(1)}px)`;
      }
      ticking.current = false;
    }
    function onScroll() {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(update);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={wrapRef} className="will-change-transform">
      <div className="relative flex items-center justify-center animate-breathe">
        <div
          aria-hidden
          className="absolute h-[220px] w-[220px] rounded-full bg-primary/20 blur-[70px] md:h-[280px] md:w-[280px]"
        />

        <svg
          viewBox="0 0 240 240"
          className="relative h-[280px] w-[280px] md:h-[380px] md:w-[380px]"
          role="img"
          aria-label="Curva de evolução de treino, saindo de um platô e subindo de forma constante"
        >
          <circle
            cx="120"
            cy="120"
            r="98"
            fill="none"
            stroke="#E4E7E1"
            strokeWidth="1"
          />

          {/* Linha irregular representando estagnação, se resolvendo em curva ascendente */}
          <path
            d="M 40 150
               Q 60 155, 75 148
               T 105 150
               Q 118 152, 122 130
               C 130 95, 150 70, 175 55
               C 190 46, 200 42, 208 40"
            fill="none"
            stroke="#2DBD6E"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="530"
            strokeDashoffset="530"
            className="animate-drawRing"
          />

          {/* Ponto de inflexão — onde a estagnação é detectada */}
          <circle cx="105" cy="150" r="4" fill="#0C1210" opacity="0.15" />

          {/* Ponto final — pulso contínuo, sensação de sistema ativo */}
          <circle
            cx="208"
            cy="40"
            r="9"
            fill="#2DBD6E"
            opacity="0"
            className="animate-fadeUp"
            style={{ animationDelay: "1.7s" }}
          >
            <animate
              attributeName="opacity"
              values="0.25;0.05;0.25"
              dur="2.4s"
              begin="1.9s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values="6;11;6"
              dur="2.4s"
              begin="1.9s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="208"
            cy="40"
            r="5.5"
            fill="#2DBD6E"
            className="animate-fadeUp"
            style={{
              animationDelay: "1.6s",
              opacity: 0,
              filter: "drop-shadow(0 0 8px rgba(45,189,110,0.7))",
            }}
          />
        </svg>

        <div
          className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-fadeUp text-center opacity-0 md:bottom-8"
          style={{ animationDelay: "1.9s" }}
        >
          <p className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">
            Platô detectado → ajuste aplicado
          </p>
        </div>
      </div>
    </div>
  );
}
