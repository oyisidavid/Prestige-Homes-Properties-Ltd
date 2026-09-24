import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Prestige Homes & Properties Ltd | Verifiable FCDA Land Banking in Abuja",
  description:
    "Prestige Homes & Properties Ltd crafts high-quality residential duplexes, master-planned solar estates, and verified FCDA C of O land banking plots across FCT Abuja (Solar City Apo, The Embassy Wasa).",
  keywords: [
    "Prestige Homes Abuja",
    "Real Estate Abuja",
    "Solar City Apo",
    "The Embassy Wasa",
    "Land for Sale Apo Abuja",
    "FCDA C of O Title",
    "Verified Land Banking Nigeria",
  ],
  authors: [{ name: "Prestige Homes & Properties Ltd" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-surface-canvas text-text-primary antialiased flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
