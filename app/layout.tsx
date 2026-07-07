import type { Metadata } from "next";
import { Manrope, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexfit.app.br"),
  title: {
    default: "Nex Fit — O sistema de evolução contínua para o seu treino",
    template: "%s · Nex Fit",
  },
  description:
    "Nex Fit é o app de treino com IA que detecta estagnação e ajusta automaticamente seu plano de treino e alimentação para você evoluir de verdade.",
  keywords: [
    "Nex Fit",
    "app de treino",
    "IA fitness",
    "personal trainer inteligência artificial",
    "acompanhamento de treino",
    "plano alimentar IA",
  ],
  authors: [{ name: "Nex Fit" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://nexfit.app.br",
    siteName: "Nex Fit",
    title: "Nex Fit — O sistema de evolução contínua para o seu treino",
    description:
      "IA que detecta estagnação e ajusta seu treino e dieta automaticamente.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nex Fit — O sistema de evolução contínua para o seu treino",
    description:
      "IA que detecta estagnação e ajusta seu treino e dieta automaticamente.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/logo-nexfit.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${inter.variable} ${plexMono.variable}`}>
      <body>
        <ScrollProgress />
        <div
          aria-hidden
          className="grain-overlay pointer-events-none fixed inset-0 z-[100]"
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
