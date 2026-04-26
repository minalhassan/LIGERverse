import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "LIGERverse | Professional CTF Learning Platform",
  description: "Master cybersecurity with the LIGERverse interactive toolkit, attack chains, and real-world scenarios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${mono.variable} font-sans`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 ml-72 relative">
            <div className="scanline" />
            <div className="p-10">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
