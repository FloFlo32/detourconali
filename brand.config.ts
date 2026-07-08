/**
 * ────────────────────────────────────────────────────────────────────────────
 *  BRAND CONFIG — De Tour Con Ali
 * ────────────────────────────────────────────────────────────────────────────
 */

export const brand = {
  name: "De Tour Con Ali",

  tagline: "Take a detour from the ordinary tours and experience Puerto Rico like a local!",

  description:
    "Puerto Rico Island Guided Tours. Off the beaten path, customized and culturally enriched experiences with certified tour guides. San Juan, PR.",

  domain: "detourconali.getyetti.com",

  theme: {
    /** Hue 145 = tropical green extracted from the logo palette */
    hue: 145,
    corners: "rounded" as "sharp" | "rounded" | "pill",
    defaultScheme: "light" as "light" | "dark",
  },

  fonts: {
    display: "Fraunces",
    sans: "Plus Jakarta Sans",
    mono: "JetBrains Mono",
  },

  social: {
    github: "detourconali",
    x: "aliwonders",
    email: "detourconali@gmail.com",
  },

  contact: {
    whatsapp: "",
    phone: "+17872220667",
    address: "PO BOX 9020685, San Juan, PR 00902",
    mapQuery: "San Juan, Puerto Rico",
  },
} as const;

export type Brand = typeof brand;
export default brand;
