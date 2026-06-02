import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sheetal & Varun - Royal Garden Romance Indian Wedding",
  description: "You are cordially invited to celebrate the union of Sheetal and Varun. Experience the magical digital invitation and RSVP online.",
  keywords: "Sheetal Varun Wedding, Garden Romance, Indian Wedding Invitation, Royal Wedding Invitation, Luxury Digital Invitation",
  openGraph: {
    title: "Sheetal & Varun Wedding Invitation",
    description: "Dear Guest, join us in celebrating our wedding under the floral arches of the Garden Romance.",
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
      className={`${cormorant.variable} ${outfit.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-sage-900 font-sans selection:bg-gold-200 selection:text-sage-900">
        {children}
      </body>
    </html>
  );
}
