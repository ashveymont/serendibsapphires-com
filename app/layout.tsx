import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import { JsonLd, pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

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
  metadataBase: new URL(siteConfig.url),
  ...pageMetadata({
    title: "Certified Ceylon Sapphires from Sri Lanka · Serendib",
    description:
      "Natural Ceylon sapphires from a licensed Sri Lankan dealer. Every stone lab-certified, treatment disclosed, insured worldwide delivery.",
    path: "/",
  }),
  icons: {
    icon: "/Serendib Sapphires Logo.svg",
    shortcut: "/Serendib Sapphires Logo.svg",
    apple: "/Serendib Sapphires Logo.svg",
  },
};

// Unconfirmed facts (null in site-config) are left out rather than published as placeholders.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/Serendib%20Sapphires%20Logo.png`,
  email: siteConfig.email,
  founder: { "@type": "Person", name: siteConfig.founder },
  ...(siteConfig.phone && { telephone: siteConfig.phone }),
  ...(siteConfig.address && { address: { "@type": "PostalAddress", streetAddress: siteConfig.address, addressCountry: "LK" } }),
  ...(siteConfig.instagramUrl && { sameAs: [siteConfig.instagramUrl] }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="bg-[#0B0B0B] text-[#F5F1EA]">
        <JsonLd data={organizationJsonLd} />
        <CustomCursor />
        <Navigation />
        <PageTransition>
          <main className="min-h-screen overflow-x-hidden pt-24">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
