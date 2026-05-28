import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "Serendib Sapphires",
  description: "The definitive luxury sapphire house of Sri Lanka.",
  metadataBase: new URL("https://serendibsapphires.com"),
  icons: {
    icon: "/Serendib Sapphires Logo.svg",
    shortcut: "/Serendib Sapphires Logo.svg",
    apple: "/Serendib Sapphires Logo.svg",
  },
  openGraph: {
    title: "Serendib Sapphires — Exceptional Ceylon Sapphire House",
    description:
      "An exclusive Sri Lankan sapphire house for private collectors, presenting exceptional Ceylon stones with certified provenance.",
    url: "https://serendibsapphires.com",
    siteName: "Serendib Sapphires",
    type: "website",
    images: [
      {
        url: "/Serendib Sapphires Logo.png",
        width: 1200,
        height: 630,
        alt: "Serendib Sapphires",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Serendib Sapphires — Exceptional Ceylon Sapphire House",
    description:
      "An exclusive Sri Lankan sapphire house for private collectors, presenting exceptional Ceylon stones with certified provenance.",
    images: ["/Serendib Sapphires Logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="bg-[#0B0B0B] text-[#F5F1EA]">
        <CustomCursor />
        <Navigation />
        <PageTransition>
          <main className="min-h-screen pt-24">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
