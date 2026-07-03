# Nex Fit — Site Oficial

Site institucional do Nex Fit, construído com Next.js 14 (App Router), TypeScript e Tailwind CSS.

## Rodando localmente

Este projeto foi montado offline (sem acesso à internet no ambiente de geração), então as dependências ainda não foram instaladas. Para rodar:

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## Build de produção

```bash
npm run build
npm run start
```

## Deploy recomendado

**Vercel** (mesma empresa do Next.js, zero configuração):

1. Suba este repositório no GitHub.
2. Importe o repositório em vercel.com.
3. Configure o domínio `nexfit.app.br` nas configurações do projeto.
4. Deploy automático a cada push.

## Estrutura

```
app/
 ├─ layout.tsx                 → shell global, fonts, metadata
 ├─ page.tsx                   → Home
 ├─ privacidade/page.tsx       → /privacidade
 ├─ termos/page.tsx            → /termos
 ├─ suporte/page.tsx           → /suporte
 ├─ exclusao-de-conta/page.tsx → /exclusao-de-conta
 ├─ faq/page.tsx               → /faq
 ├─ sitemap.ts                 → sitemap.xml
 └─ robots.ts                  → robots.txt

components/
 ├─ layout/   Header, Footer, Container, Section
 ├─ ui/       CTAButton, FeatureCard, LegalLayout
 └─ home/     Hero, EvolutionRing, FeatureGrid, StepFlow, FinalCTA
```

## Antes de publicar — checklist

- [ ] Substituir `href="#"` dos botões de download pelos links reais da App Store / Google Play assim que as fichas estiverem publicadas.
- [ ] Adicionar `public/og-image.png` (1200x630) para preview em redes sociais.
- [ ] Adicionar favicon em `app/favicon.ico`.
- [ ] Revisar juridicamente os textos de Privacidade e Termos com um advogado antes de publicar (o conteúdo aqui é um ponto de partida sólido, não aconselhamento jurídico).
- [ ] Confirmar o e-mail `suporte@nexfit.app.br` está ativo e monitorado.
- [ ] Registrar as URLs de Privacidade e Exclusão de Conta no App Store Connect.

## Identidade visual

| Token | Valor |
|---|---|
| Fundo | `#FAFAF7` |
| Fundo escuro | `#0B1410` |
| Verde primário | `#2DBD6E` |
| Verde profundo | `#16543A` |
| Display | Manrope |
| Corpo | Inter |
| Dados/mono | IBM Plex Mono |
