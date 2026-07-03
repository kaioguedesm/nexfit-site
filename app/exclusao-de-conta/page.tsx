import type { Metadata } from "next";
import { LegalLayout, LegalBlock } from "@/components/ui/LegalLayout";

export const metadata: Metadata = {
  title: "Exclusão de Conta",
  description:
    "Como solicitar a exclusão da sua conta e dos seus dados no Nex Fit.",
};

export default function ExclusaoContaPage() {
  return (
    <LegalLayout
      eyebrow="Sua conta"
      title="Exclusão de Conta"
      updatedAt="1 de julho de 2026"
    >
      <LegalBlock heading="Como excluir sua conta pelo aplicativo">
        <p>Você pode excluir sua conta diretamente pelo Nex Fit:</p>
        <ul>
          <li>Abra o aplicativo e acesse Perfil.</li>
          <li>Toque em Configurações da conta.</li>
          <li>Selecione Excluir conta.</li>
          <li>Confirme a exclusão informando sua senha.</li>
        </ul>
      </LegalBlock>

      <LegalBlock heading="Como excluir sua conta por e-mail">
        <p>
          Caso prefira, envie um e-mail para{" "}
          <a href="mailto:suporte@nexfit.app.br">suporte@nexfit.app.br</a>{" "}
          com o assunto "Exclusão de conta", a partir do endereço cadastrado
          na sua conta. Confirmaremos a exclusão em até 5 dias úteis.
        </p>
      </LegalBlock>

      <LegalBlock heading="O que acontece quando você exclui sua conta">
        <ul>
          <li>
            Seu perfil, histórico de treinos, planos alimentares e
            estatísticas de progresso são permanentemente removidos.
          </li>
          <li>Streaks, desafios e conquistas são apagados.</li>
          <li>
            Assinaturas ativas devem ser canceladas separadamente pela loja
            de aplicativos (App Store ou Google Play), pois pagamentos são
            processados por essas plataformas.
          </li>
          <li>
            Dados que precisamos manter por obrigação legal (como registros
            fiscais de pagamento) podem ser retidos pelo prazo exigido por
            lei, de forma isolada e não vinculada ao uso do app.
          </li>
        </ul>
      </LegalBlock>

      <LegalBlock heading="Prazo de exclusão">
        <p>
          A exclusão dos dados pessoais é concluída em até 30 dias após a
          confirmação da solicitação, conforme previsto na Política de
          Privacidade.
        </p>
      </LegalBlock>

      <LegalBlock heading="Dúvidas">
        <p>
          Para qualquer dúvida sobre este processo, fale com{" "}
          <a href="mailto:suporte@nexfit.app.br">suporte@nexfit.app.br</a>.
        </p>
      </LegalBlock>
    </LegalLayout>
  );
}
