// Inquiry form submission. This is the only place that decides how an inquiry is delivered.
//
// Current method: email hand-off. Submitting opens the visitor's email app with the inquiry written
// out to siteConfig.email. No third-party service, no cost, but it relies on the visitor having an
// email app set up and actually pressing send.
//
// To switch to a form service (e.g. Web3Forms / Formspree) or a server action with an email
// provider (e.g. Resend), replace the body of submitInquiry(); the form itself does not change.

import { siteConfig } from "@/lib/site-config";

export const interestOptions = [
  "A listed stone",
  "Finding a specific stone",
  "An engagement stone",
  "Trade or wholesale",
  "Other",
] as const;

export type Interest = (typeof interestOptions)[number];

// Not specified in the spec ("optional ranges"); edit freely.
export const budgetOptions = ["Under US$2,000", "US$2,000–5,000", "US$5,000–15,000", "US$15,000–50,000", "Over US$50,000"] as const;

export interface Inquiry {
  name: string;
  email: string;
  country: string;
  whatsapp: string;
  interest: Interest | "";
  stone: string;
  budget: string;
  message: string;
}

/** The stone name only counts when the visitor is asking about a listed stone. */
function stoneFor(inquiry: Inquiry): string {
  return inquiry.interest === "A listed stone" ? inquiry.stone : "";
}

function inquiryBody(inquiry: Inquiry): string {
  const stone = stoneFor(inquiry);
  const details = [
    `Name: ${inquiry.name}`,
    `Email: ${inquiry.email}`,
    `Country: ${inquiry.country}`,
    ...(inquiry.whatsapp ? [`WhatsApp: ${inquiry.whatsapp}`] : []),
    `Interested in: ${inquiry.interest}`,
    ...(stone ? [`Stone: ${stone}`] : []),
    ...(inquiry.budget ? [`Approximate budget: ${inquiry.budget}`] : []),
  ];
  return `${details.join("\n")}\n\n${inquiry.message}`;
}

export async function submitInquiry(inquiry: Inquiry): Promise<void> {
  const stone = stoneFor(inquiry);
  const subject = stone ? `Inquiry: ${stone}` : `Inquiry: ${inquiry.interest}`;
  const href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(inquiryBody(inquiry))}`;
  window.location.href = href;
}
