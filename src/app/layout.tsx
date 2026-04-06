import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Lucky Scoop — Mystery Boxes That Hit Different 🎁",
  description:
    "Unbox the unexpected! Lucky Scoop delivers curated mystery boxes packed with premium surprises. Starting at just ₹299. Order via WhatsApp now!",
  keywords: ["mystery box", "lucky scoop", "surprise box", "gift box", "unboxing", "India"],
  openGraph: {
    title: "Lucky Scoop — Mystery Boxes That Hit Different 🎁",
    description: "Unbox the unexpected! Curated mystery boxes packed with premium surprises.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${outfit.variable} font-sans antialiased noise`}>
        {children}
      </body>
    </html>
  );
}
