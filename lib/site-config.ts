// Single source of truth for contact details and business facts used across the site.
//
// Every `null` below is a fact that has not been confirmed yet. Wherever it is used, the site
// renders a highlighted TODO placeholder instead (see components/Todo.tsx), so nothing fake goes live.
// Fill these in and the placeholders disappear everywhere at once.

export interface SiteConfig {
  name: string;
  url: string;
  founder: string;
  email: string;
  /** International format, digits only, no "+" or spaces, e.g. "94771234567". Used for wa.me links. */
  whatsappNumber: string | null;
  /** Display format, e.g. "+94 77 123 4567". */
  phone: string | null;
  instagramUrl: string | null;
  /** NGJA gem trading licence number. */
  licenceNumber: string | null;
  /** Registered business name and number. */
  businessName: string | null;
  /** Address in Sri Lanka. */
  address: string | null;
  /** Laboratory (or labs) that certify the stones, e.g. "the NGJA's own testing laboratory". */
  labName: string | null;
  /** Lab report lookup: a URL (rendered as a link) or a phone/email contact. */
  labLookup: string | null;
  shippingCarrier: string | null;
  /** Return / inspection period in days. The spec suggests 7. */
  returnPeriodDays: number | null;
}

export const siteConfig: SiteConfig = {
  name: "Serendib Sapphires",
  url: "https://serendibsapphires.com",
  founder: "Ashan Veymont",
  email: "ashan@serendibsapphires.com",
  whatsappNumber: null, // TODO(placeholder): [WhatsApp number]
  phone: null, // TODO(placeholder): [Phone]
  instagramUrl: null, // TODO(placeholder): Instagram URL
  licenceNumber: null, // TODO(placeholder): [NGJA licence no.]
  businessName: null, // TODO(placeholder): [Registered business name and number]
  address: null, // TODO(placeholder): [Address, Sri Lanka]
  labName: null, // TODO(placeholder): [Lab name]
  labLookup: null, // TODO(placeholder): [lab website or contact]
  shippingCarrier: null, // TODO(placeholder): [carrier]
  returnPeriodDays: null, // TODO(placeholder): [7]
};

export function whatsappHref(message?: string): string | null {
  if (!siteConfig.whatsappNumber) return null;
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function whatsappDisplay(): string | null {
  return siteConfig.whatsappNumber ? `+${siteConfig.whatsappNumber}` : null;
}
