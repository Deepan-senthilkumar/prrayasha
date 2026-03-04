import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-cursive",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Prrayasha Collections | Premium Ethnic Boutique",
  description: "Browse the exclusive high-end ethnic collections at Prrayasha Collections. Discover Kurtis, Chiffon variants, Maxi dresses, Raw silk suits, and timeless elegance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Aclonica&family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/utility-sans" rel="stylesheet" />
      </head>
      <body className={`${outfit.variable} ${inter.variable} ${playfair.variable} ${greatVibes.variable} antialiased text-white font-sans`}>
        {children}
      </body>
    </html>
  );
}
