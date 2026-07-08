import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Gallery } from "@/components/magic/gallery";
import { Reveal } from "@/components/magic/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Photo Gallery — Puerto Rico Tour Photos",
  description:
    "See real photos from our Puerto Rico tours — El Yunque, bioluminescent bays, waterfalls, beaches, and local culture. Real moments from real adventures.",
  alternates: { canonical: "https://detourconali.getyetti.com/gallery" },
};

const galleryImages = [
  { src: "/ingested/detourconali/img-007.webp", alt: "Island tour highlights in Puerto Rico" },
  { src: "/ingested/detourconali/img-008.webp", alt: "Puerto Rico countryside waterfall tour" },
  { src: "/ingested/detourconali/img-009.webp", alt: "Snorkeling and bioluminescent bay tour" },
  { src: "/ingested/detourconali/img-015.webp", alt: "Hidden waterfalls of Puerto Rico" },
  { src: "/ingested/detourconali/img-016.webp", alt: "Puerto Rico natural scenery" },
  { src: "/ingested/detourconali/img-017.webp", alt: "Bioluminescent bay night experience" },
  { src: "/ingested/detourconali/img-018.webp", alt: "Private tour group ready to explore" },
  { src: "/ingested/detourconali/img-019.webp", alt: "Stunning Puerto Rico landscape" },
  { src: "/ingested/detourconali/img-020.webp", alt: "Tour group exploring Puerto Rico" },
  { src: "/ingested/detourconali/img-021.webp", alt: "Puerto Rico natural beauty" },
  { src: "/ingested/detourconali/img-022.webp", alt: "Local culture and food experience" },
  { src: "/ingested/detourconali/img-023.webp", alt: "El Yunque rainforest adventure" },
  { src: "/ingested/detourconali/img-024.webp", alt: "Puerto Rico scenic overlook" },
  { src: "/ingested/detourconali/img-025.webp", alt: "De Tour Con Ali group adventure" },
  { src: "/ingested/detourconali/img-026.webp", alt: "Puerto Rico beach and coast" },
  { src: "/ingested/detourconali/img-027.webp", alt: "Puerto Rico tropical landscape" },
  { src: "/ingested/detourconali/img-028.webp", alt: "Tour group at Puerto Rico beach" },
  { src: "/ingested/detourconali/img-029.webp", alt: "Scenic Puerto Rico countryside" },
  { src: "/ingested/detourconali/img-030.webp", alt: "Puerto Rico tour adventure moment" },
  { src: "/ingested/detourconali/img-031.webp", alt: "Exploring hidden Puerto Rico gems" },
  { src: "/ingested/detourconali/img-032.webp", alt: "Puerto Rico local culture" },
  { src: "/ingested/detourconali/img-034.webp", alt: "Family Puerto Rico tour experience" },
  { src: "/ingested/detourconali/img-035.webp", alt: "Custom private tour in Puerto Rico" },
  { src: "/ingested/detourconali/img-036.webp", alt: "Group tour at Puerto Rico attraction" },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container-px mx-auto max-w-6xl py-16 md:py-20">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Gallery
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
              Explore Puerto Rico Through Our Lens
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              Every photo tells a story. Browse through real moments captured on De Tour Con Ali tours - from breathtaking landscapes to authentic local experiences and the genuine joy of discovering Puerto Rico like a local.
            </p>
          </Reveal>
        </section>

        {/* Gallery Grid */}
        <section className="container-px mx-auto max-w-6xl pb-16">
          <Reveal>
            <Gallery images={galleryImages} />
          </Reveal>
        </section>

        {/* CTA */}
        <section className="bg-primary/5">
          <div className="container-px mx-auto max-w-3xl py-20 text-center">
            <Reveal>
              <h2 className="text-3xl font-bold md:text-4xl">
                Ready to Create Your Own Memories?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-muted-foreground">
                The best photos are the ones you take yourself. Book a tour and let Puerto Rico take your breath away.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="cursor-pointer">
                <Link
                  href="https://book.peek.com/s/e5f2dedc-d99b-41da-b05c-af05a53280c2/9Eyvq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Tour
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="cursor-pointer">
                <Link href="/services">View All Tours</Link>
              </Button>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
