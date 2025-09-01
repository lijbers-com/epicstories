import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono, Outfit, Titillium_Web, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { NavigationProvider } from "@/lib/contexts/NavigationContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: 'swap',
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: 'swap',
});

const titilliumWeb = Titillium_Web({
  variable: "--font-titillium",
  subsets: ["latin"],
  weight: ['200', '300', '400', '600', '700', '900'],
  display: 'swap',
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Epic Stories | Digital Products & Experiences",
  description: "A creative collective crafting digital products that turn user experiences into epic stories",
  keywords: ["digital products", "creative collective", "user experience", "web development", "design"],
  authors: [{ name: "Epic Stories" }],
  openGraph: {
    title: "Epic Stories | Digital Products & Experiences",
    description: "A creative collective crafting digital products that turn user experiences into epic stories",
    url: "https://epicstories.nl",
    siteName: "Epic Stories",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Epic Stories | Digital Products & Experiences",
    description: "A creative collective crafting digital products that turn user experiences into epic stories",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} ${outfit.variable} ${titilliumWeb.variable} ${sourceSerif.variable} antialiased`}
      >
        <NavigationProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </NavigationProvider>
      </body>
    </html>
  );
}
