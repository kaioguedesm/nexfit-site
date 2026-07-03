import type { Metadata } from "next";
import { LegalLayout, LegalBlock } from "@/components/ui/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como o Nex Fit coleta, usa e protege seus dados pessoais e de saúde.",
};

export default function PrivacidadePage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Política de Privacidade"
      updatedAt="1 de julho de 2026"
    >
      <LegalBlock heading="1. Introdução">
        <p>
          Esta Política de Privacidade descreve como o Nex Fit ("nós",
          "nosso" ou "aplicativo") coleta, usa, armazena e protege as
          informações dos usuários ("você") ao utilizar nosso aplicativo e
          site oficial. Ao usar o Nex Fit, você concorda com as práticas
          descritas neste documento.
        </p>
      </LegalBlock>

      <LegalBlock heading="2. Informações que coletamos">
        <p>Coletamos as seguintes categorias de informação:</p>
        <ul>
          <li>Dados de cadastro: nome, e-mail e senha criptografada.</li>
          <li>
            Dados de saúde e desempenho físico: peso, altura, histórico de
            treino, cargas, repetições e metas fornecidas por você.
          </li>
          <li>
            Dados de uso do aplicativo: interações, frequência de acesso e
            preferências de treino e dieta.
          </li>
          <li>
            Dados técnicos: modelo de dispositivo, sistema operacional e
            identificadores de instalação, para fins de estabilidade e
            segurança.
          </li>
        </ul>
      </LegalBlock>

      <LegalBlock heading="3. Como usamos suas informações">
        <p>Utilizamos os dados coletados para:</p>
        <ul>
          <li>Gerar planos de treino e alimentação personalizados por IA.</li>
          <li>Detectar padrões de estagnação e ajustar recomendações.</li>
          <li>Manter estatísticas de progresso, streak e desafios.</li>
          <li>Melhorar a estabilidade, segurança e desempenho do app.</li>
          <li>Enviar comunicações essenciais sobre sua conta.</li>
        </ul>
      </LegalBlock>

      <LegalBlock heading="4. Compartilhamento de dados">
        <p>
          Não vendemos suas informações pessoais. Dados podem ser
          processados por provedores de infraestrutura (hospedagem, banco de
          dados e processamento de IA) estritamente para operar o serviço,
          sempre sob obrigações contratuais de confidencialidade e segurança.
        </p>
      </LegalBlock>

      <LegalBlock heading="5. Armazenamento e segurança">
        <p>
          Seus dados são armazenados em bancos de dados protegidos, com
          senhas criptografadas e controles de acesso restritos. Adotamos
          medidas técnicas e organizacionais razoáveis para prevenir acesso
          não autorizado, perda ou alteração indevida de informações.
        </p>
      </LegalBlock>

      <LegalBlock heading="6. Seus direitos">
        <p>
          Em conformidade com a Lei Geral de Proteção de Dados (LGPD), você
          tem direito a acessar, corrigir, exportar ou excluir seus dados a
          qualquer momento. Para exercer esses direitos, consulte nossa
          página de{" "}
          <a href="/exclusao-de-conta">Exclusão de Conta</a> ou entre em
          contato pelo e-mail{" "}
          <a href="mailto:suporte@nexfit.app.br">suporte@nexfit.app.br</a>.
        </p>
      </LegalBlock>

      <LegalBlock heading="7. Retenção de dados">
        <p>
          Mantemos seus dados enquanto sua conta estiver ativa. Após a
          exclusão da conta, os dados pessoais são removidos ou anonimizados
          dentro do prazo descrito na página de Exclusão de Conta, exceto
          quando a retenção for exigida por obrigação legal.
        </p>
      </LegalBlock>

      <LegalBlock heading="8. Alterações nesta política">
        <p>
          Podemos atualizar esta Política de Privacidade periodicamente.
          Alterações relevantes serão comunicadas dentro do aplicativo ou por
          e-mail antes de entrarem em vigor.
        </p>
      </LegalBlock>

      <LegalBlock heading="9. Contato">
        <p>
          Dúvidas sobre esta política podem ser enviadas para{" "}
          <a href="mailto:suporte@nexfit.app.br">suporte@nexfit.app.br</a>.
        </p>
      </LegalBlock>
    </LegalLayout>
  );
}
