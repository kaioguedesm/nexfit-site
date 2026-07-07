"use client";

import { useRef, ReactNode } from "react";

export default function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const maxTilt = 4.5;
      node.style.transform = `perspective(900px) rotateX(${(-py * maxTilt).toFixed(2)}deg) rotateY(${(px * maxTilt).toFixed(2)}deg) translateY(-4px)`;
    });
  }

  function handleMouseLeave() {
    const node = ref.current;
    if (!node) return;
    if (frame.current) cancelAnimationFrame(frame.current);
    node.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform [transform-style:preserve-3d] ${className}`}
    >
      {children}
    </div>
  );
}
