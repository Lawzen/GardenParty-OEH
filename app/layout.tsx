import type { Metadata } from "next";
import { Inter, Comfortaa } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Garden Party 2025 - OEH",
    template: "%s | Garden Party 2025 - OEH"
  },
  description: "Rejoignez-nous pour la Garden Party de l'OEH 2025. Une soirée magique sous les cerisiers en fleurs le 25 septembre 2025 au campus HELHa Mons.",
  keywords: ["garden party", "OEH", "Mons", "HELHa", "sakura", "cerisiers", "étudiants", "soirée", "2025", "musique", "DJ"],
  authors: [{ name: "Lawzen" }],
  creator: "OEH HELHa",
  publisher: "OEH HELHa",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://gardenparty.oeh.be",
    title: "Garden Party 2025 - OEH",
    description: "Une soirée magique sous les cerisiers en fleurs",
    siteName: "Garden Party OEH 2025",
    images: [
      {
        url: "/assets/img/logo/oeh.png",
        width: 1200,
        height: 630,
        alt: "Garden Party 2025 - OEH ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Garden Party 2025 - OEH",
    description: "Une soirée magique sous les cerisiers en fleurs",
    images: ["/assets/img/logo/oeh.png"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#f9a8d4", // Couleur rose Sakura
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-theme="pastel" className="scroll-smooth">
      <head>
        {/* Preload des assets critiques */}
        <link rel="preload" href="/assets/img/logo/oeh.png" as="image" />
        <link rel="preload" href="/assets/audio/sakura-ambient.mp3" as="audio" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/assets/img/logo/oeh.png" />
        
        {/* Meta pour PWA (optionnel) */}
        <meta name="theme-color" content="#f9a8d4" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={`${inter.variable} ${comfortaa.variable} antialiased font-inter overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
