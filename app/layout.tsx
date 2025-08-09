import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PrintProvider } from "@/lib/PrintContext";
import { Header } from "@/components/layout/Header"; // import header
import { Footer } from "@/components/layout/Footer"; // import footer

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Printer Service",
  description: "Upload and print documents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <PrintProvider>
          <Header /> {/* Always visible at top */}
          <main className="flex-1 container mx-auto p-4">
            {children}
          </main>
          <Footer /> {/* Always visible at bottom */}
        </PrintProvider>
      </body>
    </html>
  );
}
