export interface StoneSpec {
  label: string;
  value: string;
}

export interface Stone {
  slug: string;
  name: string;
  subtitle: string;
  type: string;
  carat: number;
  origin: string;
  region: string;
  gradient: string;
  excerpt: string;
  story: string;
  legacy: string;
  collection: string;
  details: {
    colour: string;
    clarity: string;
    treatment: string;
    cut: string;
    certification: string;
  };
  specs: StoneSpec[];
}

export const stones: Stone[] = [
  {
    slug: "princess-of-the-seas",
    name: "The Princess Of The Seas",
    subtitle:
      "A rare sapphire inspired by the endless elegance of the Indian Ocean.",
    type: "Blue Sapphire",
    carat: 8.4,
    origin: "Ratnapura, Sri Lanka",
    region: "Ratnapura",
    gradient: "linear-gradient(135deg, #0F2145, #1a3a6e)",
    excerpt:
      "A rare sapphire of extraordinary depth, inspired by the endless elegance of the Indian Ocean.",
    story:
      "There are sapphires that exist as commodities. And there are sapphires that exist as declarations. The Princess Of The Seas belongs to the latter.",
    legacy:
      "A stone for a collector who understands that true rarity speaks quietly.",
    collection: "Blue Sapphire Collection",
    details: {
      colour: "Royal Blue",
      clarity: "Eye-Clean",
      treatment: "Unheated",
      cut: "Oval Brilliant",
      certification: "GIA / GRS",
    },
    specs: [
      { label: "Species", value: "Corundum" },
      { label: "Variety", value: "Blue Sapphire" },
      { label: "Weight", value: "8.40 Carats" },
      { label: "Dimensions", value: "12.3 × 10.1 × 6.4 mm" },
      { label: "Shape", value: "Oval" },
      { label: "Cut", value: "Brilliant Mixed Cut" },
      { label: "Colour Grade", value: "Vivid Royal Blue" },
      { label: "Saturation", value: "Strong" },
      { label: "Tone", value: "Medium-Dark" },
      { label: "Clarity", value: "Eye-Clean" },
      { label: "Inclusions", value: "Minute natural inclusions" },
      { label: "Treatment", value: "No heat treatment detected" },
      { label: "Origin", value: "Ratnapura, Sri Lanka" },
      { label: "Certificate", value: "GIA Report #XXXXXXXXX" },
    ],
  },
  {
    slug: "midnight-crown",
    name: "The Midnight Crown",
    subtitle: "Born from the deepest earth of the Ratnapura highlands.",
    type: "Blue Sapphire",
    carat: 12.1,
    origin: "Ratnapura, Sri Lanka",
    region: "Ratnapura",
    gradient: "linear-gradient(135deg, #0B0B0B, #1c1c3a)",
    excerpt:
      "Born from the deepest earth of the Ratnapura highlands, carrying the quiet authority of something truly rare.",
    story:
      "Some stones carry authority from the moment they emerge. The Midnight Crown is one of these.",
    legacy:
      "A stone of exceptional size and character. For the collector who demands the very finest.",
    collection: "Collector Stones",
    details: {
      colour: "Deep Royal Blue",
      clarity: "Eye-Clean",
      treatment: "Unheated",
      cut: "Cushion Mixed Cut",
      certification: "GRS",
    },
    specs: [
      { label: "Species", value: "Corundum" },
      { label: "Variety", value: "Blue Sapphire" },
      { label: "Weight", value: "12.10 Carats" },
      { label: "Shape", value: "Cushion" },
      { label: "Cut", value: "Mixed Cut" },
      { label: "Colour Grade", value: "Deep Royal Blue" },
      { label: "Treatment", value: "No heat treatment detected" },
      { label: "Certificate", value: "GRS Certified" },
    ],
  },
  {
    slug: "celestial-tear",
    name: "The Celestial Tear",
    subtitle: "Among the rarest of sapphires, defined by luminous warmth.",
    type: "Padparadscha",
    carat: 5.7,
    origin: "Elahera, Sri Lanka",
    region: "Elahera",
    gradient: "linear-gradient(135deg, #3d1a1a, #6e3a2a)",
    excerpt:
      "Among the rarest of sapphires - a padparadscha of exceptional clarity and extraordinary emotional resonance.",
    story:
      "A colour that hovers between sunrise and flame, discovered in one of Sri Lanka's storied gem corridors.",
    legacy:
      "A stone that changes every setting it enters, and every story it touches.",
    collection: "Rare Acquisitions",
    details: {
      colour: "Lotus Pink-Orange",
      clarity: "Eye-Clean",
      treatment: "Unheated",
      cut: "Oval Mixed Cut",
      certification: "GIA",
    },
    specs: [
      { label: "Species", value: "Corundum" },
      { label: "Variety", value: "Padparadscha Sapphire" },
      { label: "Weight", value: "5.70 Carats" },
      { label: "Origin", value: "Elahera, Sri Lanka" },
    ],
  },
  {
    slug: "ocean-throne",
    name: "The Ocean Throne",
    subtitle: "A commanding sapphire of exceptional scale and poise.",
    type: "Blue Sapphire",
    carat: 18.3,
    origin: "Ratnapura, Sri Lanka",
    region: "Ratnapura",
    gradient: "linear-gradient(135deg, #0a1628, #0F2145)",
    excerpt:
      "A monumental sapphire with the calm authority of deep ocean horizons.",
    story:
      "Selected for scale, saturation, and a remarkable precision of crystal.",
    legacy:
      "An acquisition for a collector building a once-in-a-generation archive.",
    collection: "Collector Stones",
    details: {
      colour: "Royal Blue",
      clarity: "Very Slightly Included",
      treatment: "No Heat",
      cut: "Cushion Brilliant",
      certification: "GRS",
    },
    specs: [
      { label: "Species", value: "Corundum" },
      { label: "Variety", value: "Blue Sapphire" },
      { label: "Weight", value: "18.30 Carats" },
      { label: "Origin", value: "Ratnapura, Sri Lanka" },
    ],
  },
  {
    slug: "last-monsoon",
    name: "The Last Monsoon",
    subtitle: "Golden intensity shaped by Sri Lanka's ancient terrain.",
    type: "Yellow Sapphire",
    carat: 9.2,
    origin: "Ratnapura, Sri Lanka",
    region: "Ratnapura",
    gradient: "linear-gradient(135deg, #2a2000, #5a4a00)",
    excerpt:
      "A vibrant yellow sapphire with exceptional fire and luminous depth.",
    story:
      "A singular yellow sapphire chosen for clarity, brightness, and composure.",
    legacy: "A statement stone for collectors who seek uncommon colour.",
    collection: "The Heirloom Series",
    details: {
      colour: "Rich Golden Yellow",
      clarity: "Eye-Clean",
      treatment: "No Heat",
      cut: "Oval Mixed",
      certification: "GIA",
    },
    specs: [
      { label: "Species", value: "Corundum" },
      { label: "Variety", value: "Yellow Sapphire" },
      { label: "Weight", value: "9.20 Carats" },
      { label: "Origin", value: "Ratnapura, Sri Lanka" },
    ],
  },
  {
    slug: "royal-accord",
    name: "The Royal Accord",
    subtitle: "Balanced brilliance from Okkampitiya's prized deposits.",
    type: "Blue Sapphire",
    carat: 6.8,
    origin: "Okkampitiya, Sri Lanka",
    region: "Okkampitiya",
    gradient: "linear-gradient(135deg, #0d1f40, #162d5c)",
    excerpt:
      "A refined blue sapphire known for elegant proportions and vibrant colour.",
    story:
      "A poised gem selected for precision and remarkable saturation in natural light.",
    legacy:
      "A timeless blue sapphire for collectors who value proportion and purity.",
    collection: "Engagement Pieces",
    details: {
      colour: "Vivid Blue",
      clarity: "Eye-Clean",
      treatment: "No Heat",
      cut: "Oval Brilliant",
      certification: "GIA",
    },
    specs: [
      { label: "Species", value: "Corundum" },
      { label: "Variety", value: "Blue Sapphire" },
      { label: "Weight", value: "6.80 Carats" },
      { label: "Origin", value: "Okkampitiya, Sri Lanka" },
    ],
  },
];

export const collectionFilters = [
  "All",
  "Blue Sapphire",
  "Padparadscha",
  "Yellow Sapphire",
  "Engagement",
  "Collector Stones",
  "Heirloom Series",
] as const;
