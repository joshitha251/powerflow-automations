import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PowerFlow Automations — AI Engineering & Intelligent Systems",
  description:
    "PowerFlow Automations builds AI agent systems, multi-agent systems, backend infrastructure, integrations, and conversational AI engineered around real business problems.",
  metadataBase: new URL("https://powerflow-automations.com"),
  alternates: {
  canonical: "/",
},
  openGraph: {
    title: "PowerFlow Automations — AI Engineering & Intelligent Systems",
    description:
      "AI agent systems, multi-agent systems, backend infrastructure and conversational AI, engineered around real business problems.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#AFF1FC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
