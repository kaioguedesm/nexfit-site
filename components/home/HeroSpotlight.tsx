"use client";

import { useRef, ReactNode } from "react";

export default function HeroSpotlight({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    node.style.setProperty("--spot-x", `${x}%`);
    node.style.setProperty("--spot-y", `${y}%`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="group relative"
      style={{ ["--spot-x" as string]: "50%", ["--spot-y" as string]: "20%" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden opacity-0 transition-opacity duration-500 md:block md:group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(480px circle at var(--spot-x) var(--spot-y), rgba(45,189,110,0.08), transparent 70%)",
        }}
      />
      {children}
    </div>
  );
}
