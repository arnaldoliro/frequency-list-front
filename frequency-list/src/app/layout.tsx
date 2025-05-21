import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    <html lang="en">
      <body style={{ maxWidth: '85vw', margin: '0 auto' }}>
        {children}
      </body>
    </html>
  );
}
