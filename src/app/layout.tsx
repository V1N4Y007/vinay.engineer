import type { Metadata, Viewport } from "next";
import { Inter, Share_Tech_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-share-tech-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Vinay Trivedi | Cyber Security Engineer",
  description: "Portfolio of Vinay Trivedi - Cyber Security enthusiast, Ethical Hacker, and Security Engineer.",
  keywords: ["Cyber Security", "Ethical Hacking", "Portfolio", "Engineer"],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${shareTechMono.variable}`}>
      <body>
        <Navigation />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
