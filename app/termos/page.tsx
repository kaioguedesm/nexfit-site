import type { Metadata } from "next";
import { LegalLayout, LegalBlock } from "@/components/ui/LegalLayout";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos e condições de uso do aplicativo Nex Fit.",
};

export default function TermosPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Termos de Uso"
      updatedAt="1 de julho de 2026"
    >
      <LegalBlock heading="1. Aceitação dos termos">
        <p>
          Ao criar uma conta ou utilizar o Nex Fit, você concorda
          integralmente com estes Termos de Uso. Se você não concordar com
          algum ponto, não deve utilizar o aplicativo.
        </p>
      </LegalBlock>

      <LegalBlock heading="2. Descrição do serviço">
        <p>
          O Nex Fit é um aplicativo de treino que utiliza inteligência
          artificial para gerar planos de treino e alimentação
          personalizados, acompanhar progresso e identificar sinais de
          estagnação de desempenho físico.
        </p>
      </LegalBlock>

      <LegalBlock heading="3. Elegibilidade e conta">
        <ul>
          <li>Você deve ter no mínimo 16 anos para criar uma conta.</li>
          <li>
            Você é responsável por manter a confidencialidade das suas
            credenciais de acesso.
          </li>
          <li>
            As informações fornecidas no cadastro devem ser verdadeiras e
            atualizadas.
          </li>
        </ul>
      </LegalBlock>

      <LegalBlock heading="4. Aviso sobre saúde">
        <p>
          O Nex Fit fornece recomendações geradas por IA com base nos dados
          informados por você. Este conteúdo não substitui orientação
          médica, nutricional ou de educação física profissional.
          Recomendamos consultar um profissional de saúde antes de iniciar
          qualquer programa de treino ou alimentação, especialmente em caso
          de condições pré-existentes.
        </p>
      </LegalBlock>

      <LegalBlock heading="5. Uso aceitável">
        <p>Ao usar o Nex Fit, você concorda em não:</p>
        <ul>
          <li>Utilizar o aplicativo para fins ilegais ou fraudulentos.</li>
          <li>Tentar realizar engenharia reversa ou copiar o sistema de IA.</li>
          <li>
            Compartilhar sua conta com terceiros ou revender acesso ao
            serviço.
          </li>
          <li>Interferir na segurança ou infraestrutura do aplicativo.</li>
        </ul>
      </LegalBlock>

      <LegalBlock heading="6. Assinaturas e pagamentos">
        <p>
          Caso o Nex Fit ofereça planos pagos, os valores, formas de
          cobrança e política de renovação serão exibidos claramente antes
          da confirmação da compra, dentro do próprio aplicativo ou das
          lojas de aplicativos (App Store / Google Play), sujeitos também
          aos termos dessas plataformas.
        </p>
      </LegalBlock>

      <LegalBlock heading="7. Propriedade intelectual">
        <p>
          Todo o conteúdo, marca, algoritmos e design do Nex Fit são de
          propriedade exclusiva da empresa responsável pelo aplicativo. É
          proibida a reprodução, distribuição ou uso comercial sem
          autorização expressa.
        </p>
      </LegalBlock>

      <LegalBlock heading="8. Encerramento de conta">
        <p>
          Você pode encerrar sua conta a qualquer momento pela página de{" "}
          <a href="/exclusao-de-conta">Exclusão de Conta</a>. Reservamo-nos
          o direito de suspender ou encerrar contas que violem estes Termos.
        </p>
      </LegalBlock>

      <LegalBlock heading="9. Limitação de responsabilidade">
        <p>
          O Nex Fit é fornecido "no estado em que se encontra". Não
          garantimos resultados físicos específicos, já que estes dependem
          de fatores individuais fora do nosso controle, incluindo adesão ao
          plano e condições de saúde do usuário.
        </p>
      </LegalBlock>

      <LegalBlock heading="10. Alterações nos termos">
        <p>
          Podemos atualizar estes Termos periodicamente. O uso contínuo do
          aplicativo após alterações constitui aceitação dos novos termos.
        </p>
      </LegalBlock>

      <LegalBlock heading="11. Contato">
        <p>
          Para dúvidas sobre estes Termos, entre em contato pelo e-mail{" "}
          <a href="mailto:suporte@nexfit.app.br">suporte@nexfit.app.br</a>.
        </p>
      </LegalBlock>
    </LegalLayout>
  );
}
