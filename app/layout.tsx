import type { Metadata } from "next";
import { DM_Sans, Fraunces, Space_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "ads-as-code — Infrastructure as code for ad campaigns",
  description:
    "Define ad campaigns in TypeScript. Preview changes with plan. Apply with confidence. Open-source SDK for Google Ads and Meta.",
  openGraph: {
    title: "ads-as-code — Infrastructure as code for ad campaigns",
    description:
      "Define ad campaigns in TypeScript. Preview changes with plan. Apply with confidence.",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ads-as-code — Infrastructure as code for ad campaigns",
    description:
      "Define ad campaigns in TypeScript. Preview changes with plan. Apply with confidence.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} ${spaceMono.variable}`}
    >
      <body className="bg-bg text-text font-body antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
