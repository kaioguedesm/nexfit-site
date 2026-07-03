export default function FeatureCard({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group glass edge-lit relative rounded-xl2 border border-line/70 p-8 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_40px_-24px_rgba(22,84,58,0.35)]">
      <div className="flex items-center gap-2.5">
        <span className="h-3 w-px bg-line transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:h-4 group-hover:bg-primary" />
        <span className="font-mono text-[12px] text-ink-faint transition-colors duration-300 group-hover:text-primary-deep">
          {index}
        </span>
      </div>
      <h3 className="mt-5 font-display text-[17.5px] font-semibold tracking-tight text-ink">
        {title}
      </h3>
      <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
        {description}
      </p>
    </div>
  );
}
