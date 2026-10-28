import LegalPlaceholder from "@/components/LegalPlaceholder";
import { pageMetadata } from "@/lib/seo";

// Placeholder page: the Privacy Policy text has not been written yet.
// SEO title and description are not in the spec's SEO table.

export const metadata = pageMetadata({
  title: "Privacy Policy · Serendib Sapphires",
  description: "How Serendib Sapphires collects and uses personal data.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPlaceholder
      heading="Privacy Policy"
      todo="[Privacy Policy text: what the inquiry form collects, how it is used, how long it is kept, and how to ask for it to be deleted]"
    />
  );
}
