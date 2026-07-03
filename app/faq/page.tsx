import type { Metadata } from "next";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Perguntas Frequentes",
  description: "Tire suas dúvidas sobre o Nex Fit.",
};

const FAQ_ITEMS = [
  {
    q: "O que é o Nex Fit?",
    a: "É um aplicativo de treino que usa inteligência artificial para personalizar treinos e planos alimentares, acompanhando seu progresso e ajustando recomendações quando detecta sinais de estagnação.",
  },
  {
    q: "Como a IA detecta a estagnação?",
    a: "O Nex Fit analisa múltiplas variáveis do seu histórico — como progressão de carga, volume e consistência — em um motor de pontuação que identifica padrões de platô antes que eles impactem seu resultado.",
  },
  {
    q: "Preciso de experiência prévia com treino para usar o app?",
    a: "Não. O Nex Fit se adapta ao seu nível, do iniciante ao avançado, ajustando a complexidade dos treinos e planos conforme seu progresso.",
  },
  {
    q: "O plano alimentar substitui a orientação de um nutricionista?",
    a: "Não. As recomendações são geradas por IA com base nos dados que você fornece e servem como apoio, não como substituto de acompanhamento profissional de saúde.",
  },
  {
    q: "O Nex Fit é gratuito?",
    a: "O aplicativo pode oferecer funcionalidades gratuitas e planos com recursos adicionais. Os valores e condições de qualquer assinatura são exibidos claramente antes da confirmação da compra.",
  },
  {
    q: "Em quais dispositivos o Nex Fit está disponível?",
    a: "O Nex Fit está sendo lançado para iOS e Android. Acompanhe as lojas de aplicativos para disponibilidade na sua região.",
  },
  {
    q: "Como excluo minha conta?",
    a: "Você pode excluir sua conta diretamente no app, em Perfil > Configurações da conta > Excluir conta, ou solicitando por e-mail. Veja o passo a passo completo na página de Exclusão de Conta.",
  },
  {
    q: "Meus dados de treino e saúde estão seguros?",
    a: "Sim. Seus dados são armazenados com criptografia e controles de acesso restritos, conforme detalhado na nossa Política de Privacidade.",
  },
];

export default function FaqPage() {
  return (
    <div className="py-20 md:py-28">
      <Container className="max-w-[760px]">
        <p className="font-mono text-[12px] uppercase tracking-wide text-primary-deep">
          Ajuda
        </p>
        <h1 className="mt-3 font-display text-[34px] font-semibold tracking-tight text-ink md:text-[42px]">
          Perguntas frequentes
        </h1>
        <p className="mt-3 max-w-[480px] text-[14.5px] leading-relaxed text-ink-soft">
          Não encontrou o que precisava? Fale com a gente em{" "}
          <a
            href="mailto:suporte@nexfit.app.br"
            className="text-primary-deep underline underline-offset-2"
          >
            suporte@nexfit.app.br
          </a>
          .
        </p>

        <div className="mt-12 divide-y divide-line border-t border-line">
          {FAQ_ITEMS.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-ink">
                {item.q}
                <span className="shrink-0 font-mono text-[16px] text-ink-faint transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-[600px] text-[14px] leading-relaxed text-ink-soft">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </div>
  );
}
