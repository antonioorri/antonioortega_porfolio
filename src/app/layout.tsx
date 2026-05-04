import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Antonio Ortega | Ingeniero de Computadores | Málaga",
  description: "Ingeniero de computadores en Málaga. Desarrollo web, aplicaciones Android y proyectos de tecnología. Portfolio profesional de Antonio Ortega.",
  keywords: ["Antonio Ortega", "Ingeniero de Computadores", "Málaga", "Ronda", "Desarrollador web", "Programador", "Android", "Kotlin", "Next.js", "Portfolio"],
  authors: [{ name: "Antonio Ortega" }],
  metadataBase: new URL("https://antonioortega.online"),
  openGraph: {
    title: "Antonio Ortega | Ingeniero de Computadores | Málaga",
    description: "Ingeniero de computadores en Málaga. Desarrollo web, aplicaciones Android y proyectos de tecnología.",
    type: "website",
    locale: "es_ES",
    siteName: "Antonio Ortega - Portfolio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    languages: {
      es: "/",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}