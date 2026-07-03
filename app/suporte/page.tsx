import type { Metadata } from "next";
import { LegalLayout, LegalBlock } from "@/components/ui/LegalLayout";

export const metadata: Metadata = {
  title: "Suporte",
  description: "Central de suporte do Nex Fit. Fale com nossa equipe.",
};

export default function SuportePage() {
  return (
    <LegalLayout
      eyebrow="Ajuda"
      title="Central de Suporte"
      updatedAt="1 de julho de 2026"
    >
      <LegalBlock heading="Como podemos ajudar?">
        <p>
          Nossa equipe está disponível para resolver dúvidas sobre sua
          conta, funcionamento do app, cobranças e problemas técnicos. O
          canal oficial de suporte é o e-mail{" "}
          <a href="mailto:suporte@nexfit.app.br">suporte@nexfit.app.br</a>,
          com resposta em até 2 dias úteis.
        </p>
      </LegalBlock>

      <LegalBlock heading="Problemas comuns">
        <ul>
          <li>Não consigo fazer login na minha conta.</li>
          <li>Meu treino ou dieta gerada pela IA não está adequado.</li>
          <li>Quero corrigir dados do meu perfil (peso, altura, metas).</li>
          <li>Tenho dúvidas sobre cobrança ou assinatura.</li>
          <li>Quero excluir minha conta e meus dados.</li>
        </ul>
      </LegalBlock>

      <LegalBlock heading="Antes de entrar em contato">
        <p>
          Para agilizar o atendimento, inclua no e-mail: o e-mail cadastrado
          na sua conta, o modelo do seu dispositivo e sistema operacional, e
          uma descrição detalhada do problema, incluindo prints se possível.
        </p>
      </LegalBlock>

      <LegalBlock heading="Outros canais">
        <p>
          Consulte também nossa página de{" "}
          <a href="/faq">Perguntas Frequentes</a>, que reúne respostas
          diretas para as dúvidas mais comuns sobre o Nex Fit.
        </p>
      </LegalBlock>
    </LegalLayout>
  );
}
