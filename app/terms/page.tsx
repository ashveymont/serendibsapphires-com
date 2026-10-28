import LegalPlaceholder from "@/components/LegalPlaceholder";
import { pageMetadata } from "@/lib/seo";

// Placeholder page: the Terms of Sale text has not been written yet.
// SEO title and description are not in the spec's SEO table.

export const metadata = pageMetadata({
  title: "Terms of Sale · Serendib Sapphires",
  description: "Payment, shipping, returns and governing law for purchases from Serendib Sapphires.",
  path: "/terms",
});

export default function TermsPage() {
  return <LegalPlaceholder heading="Terms of Sale" todo="[Terms of Sale text: payment, shipping risk, returns, governing law]" />;
}
