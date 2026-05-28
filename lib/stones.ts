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
  image: string;
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
    slug: "lady-in-love",
    name: "The Lady In Love",
    subtitle: "She does not seek love. She radiates it.",
    type: "Blue Sapphire",
    carat: 8.4,
    origin: "Ratnapura, Sri Lanka",
    region: "Ratnapura",
    image: "/IMG_5994.JPG",
    excerpt:
      "She arrived the way all great beauties do - without effort, without announcement, and with the quiet devastation of something that knows exactly what it is.",
    story:
      "She arrived the way all great beauties do - without effort, without announcement, and with the quiet devastation of something that knows exactly what it is.\n\nThe Lady In Love is the most gorgeous thing the earth has ever surrendered.\n\nHer blue is not the blue of oceans or skies or anything so ordinary as nature. It is the blue of a woman in the fullness of her feeling - luminous, overwhelming, completely and utterly alive. A colour that does not sit still. That moves when you look at it. That reaches toward you the way love reaches - with warmth, with pull, with the terrifying beauty of something real.\n\nShe is madly, completely, unconditionally in love.\n\nWith the light that falls on her. With the eyes that find her. With the hands that will one day hold her and understand, in an instant, that they are holding something that loves them back.\n\nThere are sapphires of great power. Of great rarity. Of great technical achievement.\n\nAnd then there is her.\n\nA stone so full of feeling that gemologists reach for their instruments and find, quietly, that no instrument was built for this. That what she carries cannot be graded. Cannot be reported. Cannot be reduced to numbers on a certificate.\n\nShe can only be felt.\n\nTo acquire The Lady In Love is not a transaction. It is a surrender. A recognition that some things in this world are simply, completely, and forever beautiful - and that beauty of this magnitude deserves to be held by someone who understands the magnitude of what they are holding.\n\nShe has loved every eye that has ever found her.\n\nShe is waiting for the one that stays.",
    legacy: "To acquire The Lady In Love is not a transaction. It is a surrender.",
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
    slug: "princess-of-the-blues",
    name: "The Princess of the Blues",
    subtitle: "She was never going to bow.",
    type: "Blue Sapphire",
    carat: 12.1,
    origin: "Ratnapura, Sri Lanka",
    region: "Ratnapura",
    image: "/IMG_5995.JPG",
    excerpt:
      "She emerged from the ancient earth of Ratnapura not quietly, not gently, but with the full authority of someone who has always known her worth.",
    story:
      "There are stones that are beautiful.\n\nAnd there are stones that are brave.\n\nThe Princess Of The Blues was never going to be anything less than both.\n\nShe emerged from the ancient earth of Ratnapura not quietly, not gently, but with the full authority of someone who has always known her worth. A blue so bold it reads as a declaration. So vivid it reads as a challenge. The colour of a young woman who has looked at every convention placed before her and chosen, deliberately, to be magnificent instead.\n\nShe is a princess in the oldest sense of the word - before the word was softened. Before it became ceremony and obligation and the careful management of perception.\n\nA princess who rides. Who decides. Who walks into rooms and changes them simply by being present.\n\nHer brilliance is not delicate. It does not ask permission. It does not dim itself for comfort or adjust its saturation for those who find it too much. It is exactly as intense as it has always been, and it will remain so long after every fashionable thing has faded.\n\nThis is a stone with courage built into its crystal structure. Pride pressed into every facet by the hands of the earth over millions of years of becoming.\n\nShe has survived extraordinary pressure to become this extraordinary.\n\nThe Princess Of The Blues is not for the timid collector. She is not for the one who wants something pretty for a shelf.\n\nShe is for the one who recognises in her something they recognise in themselves.\n\nA refusal to be anything less than what they were made to be.",
    legacy: "She has survived extraordinary pressure to become this extraordinary.",
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
    subtitle: "The universe wept. And what fell to earth was this.",
    type: "Padparadscha",
    carat: 5.7,
    origin: "Elahera, Sri Lanka",
    region: "Elahera",
    image: "/IMG_5996.JPG",
    excerpt:
      "Celestia looked down at what had been made. At the impossible fact of beauty. And she wept - not from sadness, but from the pure overwhelming feeling of something too beautiful to hold inside.",
    story:
      "Before the world had words for colour, it had this colour.\n\nThe ancients called it padparadscha. The lotus at sunrise. The sky in the moment between night and day when the universe holds its breath and the light does something it will never do again - turns the whole of existence into a blush.\n\nBut we know what it really is.\n\nIt is a tear.\n\nNot a tear of grief. Not the salt of suffering or the weight of loss. This is something rarer and more sacred than that.\n\nThis is the universe weeping from happiness.\n\nCelestia - the vast, breathing, dreaming consciousness of everything that exists - looks down sometimes at what has been made. At the impossible fact of beauty. At the staggering improbability that out of darkness and pressure and deep geological time, something of this colour could emerge from the earth and find its way into human hands.\n\nAnd she weeps.\n\nNot from sadness. From the pure, overwhelming feeling of something so beautiful it cannot be held inside any being - divine or otherwise - without spilling over.\n\nThe Celestial Tear fell from that moment. Pressed by the weight of a universe feeling too much. Coloured by the exact pigment of joy at its most profound - that particular pink-orange that exists at the intersection of every warm feeling the cosmos has ever had.\n\nShe carries within her the energy of a gift. Something given, not traded. Something offered from a place of infinite abundance to a world that sometimes forgets how loved it is.\n\nTo hold The Celestial Tear is to hold proof.\n\nProof that the universe notices. That it feels. That somewhere in the mathematics of existence there is a force that looks at this world and finds it, despite everything, worthy of its most beautiful tears.\n\nShe is not a gemstone.\n\nShe is a message.\n\nAnd she has been waiting - through three thousand years of earth and river and human hands - for the one she was always meant to reach.",
    legacy: "She is not a gemstone. She is a message.",
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
];
