import type { Metadata } from "next";
import "./globals.css";
import { brand } from "@/brand.config";
import { fontVariables } from "@/lib/fonts";
import { ThemeScript } from "@/components/theme-provider";
import { FaqWidget } from "@/components/widget/faq-widget";
import { WhatsAppWidget } from "@/components/widget/whatsapp-widget";

const siteUrl = `https://${brand.domain}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.name} | Puerto Rico Island Guided Tours`,
    template: `%s | ${brand.name}`,
  },
  description: brand.description,
  applicationName: brand.name,
  keywords: [
    "Puerto Rico tours",
    "Puerto Rico guided tours",
    "San Juan tours",
    "El Yunque tours",
    "bioluminescent bay tour",
    "Puerto Rico snorkeling",
    "private tours Puerto Rico",
    "local tour guide Puerto Rico",
    "off the beaten path Puerto Rico",
    "custom tours Puerto Rico",
    "group tours Puerto Rico",
    "De Tour Con Ali",
  ],
  authors: [{ name: brand.name, url: siteUrl }],
  creator: brand.name,
  publisher: brand.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png" }],
  },
  openGraph: {
    title: `${brand.name} | Puerto Rico Island Guided Tours`,
    description: brand.description,
    url: siteUrl,
    siteName: brand.name,
    type: "website",
    locale: "en_US",
    images: [{ url: "/ingested/detourconali/img-019.webp", width: 1600, height: 900, alt: "De Tour Con Ali — Puerto Rico Tours" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} | Puerto Rico Tours`,
    description: brand.description,
    creator: `@${brand.social.x}`,
    images: ["/ingested/detourconali/img-019.webp"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristInformationCenter",
  name: brand.name,
  description: brand.description,
  url: siteUrl,
  telephone: brand.contact.phone,
  email: brand.social.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "PO BOX 9020685",
    addressLocality: "San Juan",
    addressRegion: "PR",
    postalCode: "00902",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.4655,
    longitude: -66.1057,
  },
  priceRange: "$$",
  image: `${siteUrl}/ingested/detourconali/img-019.webp`,
  sameAs: [
    `https://www.instagram.com/detourconali/`,
    `https://www.facebook.com/detourconali/`,
    `https://x.com/${brand.social.x}`,
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Puerto Rico Guided Tours",
    itemListElement: [
      { "@type": "Offer", name: "Let Me Show You My Island", price: "85", priceCurrency: "USD" },
      { "@type": "Offer", name: "PR Countryside Tour with Waterfall", price: "69", priceCurrency: "USD" },
      { "@type": "Offer", name: "Guided Snorkeling and Biobay Tour", price: "189", priceCurrency: "USD" },
      { "@type": "Offer", name: "El Yunque Adventures", price: "85", priceCurrency: "USD" },
      { "@type": "Offer", name: "Hike to Hidden Gem", price: "75", priceCurrency: "USD" },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "120",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontVariables} h-full`} suppressHydrationWarning>
      <head>
        <ThemeScript />
        {/* Preload hero image for faster LCP */}
        <link
          rel="preload"
          as="image"
          href="/ingested/detourconali/img-019.webp"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {children}
        <FaqWidget />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
