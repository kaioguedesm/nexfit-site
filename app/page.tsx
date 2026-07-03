import Hero from "@/components/home/Hero";
import FeatureGrid from "@/components/home/FeatureGrid";
import StepFlow from "@/components/home/StepFlow";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Nex Fit",
    applicationCategory: "HealthApplication",
    operatingSystem: "iOS, Android",
    description:
      "Nex Fit é o app de treino com IA que detecta estagnação e ajusta automaticamente o plano de treino e alimentação.",
    url: "https://nexfit.app.br",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <FeatureGrid />
      <StepFlow />
      <FinalCTA />
    </>
  );
}
