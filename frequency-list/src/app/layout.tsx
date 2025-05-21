import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sistema de Frequência",
  description: "Sistema interno criado para organizar frequência em eventos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-[#eee]">
        <header>
          <NavBar />
        </header>
        <main style={{ maxWidth: '85vw', margin: '0 auto'}}>
          {children}
        </main>
      </body>
    </html>
  );
}
