import type { Metadata } from "next";
import { Fraunces, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Swapnaneel Chatterjee | Software Engineer · New Grad 2027",
  description:
    "MS CS candidate at George Washington University. Backend engineer specializing in distributed systems, Spring Boot microservices, and agentic AI. Open to New Grad 2027 Software Engineering roles.",
  keywords: [
    "Swapnaneel Chatterjee",
    "Software Engineer",
    "New Grad 2027",
    "George Washington University",
    "Spring Boot",
    "Distributed Systems",
    "Agentic AI",
  ],
  openGraph: {
    title: "Swapnaneel Chatterjee | Software Engineer",
    description:
      "Distributed systems & agentic AI engineer. MS CS @ GWU · New Grad 2027.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-mist text-ink">{children}</body>
    </html>
  );
}
