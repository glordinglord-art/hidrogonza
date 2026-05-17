import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hidrogonza S.A.S | Soluciones al Instante",
  description:
    "Especialistas en diseño y construcción de redes hidrosanitarias, redes de gas y sistemas de red contra incendio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="light scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-white text-slate-900 antialiased`}>
        <Header />
        <main className="min-h-screen bg-white pt-[4.25rem] md:pt-[4.5rem]">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
