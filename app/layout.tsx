import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "DAMUBOOST — Nature. Strength. You.",
  description: "Premium organic food supplement crafted from locally sourced natural ingredients to support healthy hemoglobin levels and fight fatigue naturally.",
  keywords: ["DAMUBOOST", "organic supplement", "blood health", "hemoglobin", "natural wellness", "iron deficiency"],
  openGraph: {
    title: "DAMUBOOST — Nature. Strength. You.",
    description: "Premium organic food supplement for healthy blood levels and natural vitality.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <body className="antialiased bg-damu-cream text-damu-charcoal font-sans">
        {children}
      </body>
    </html>
  );
}
