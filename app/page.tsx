import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Award, Compass, Settings, Star, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "De Tour Con Ali | Puerto Rico Island Guided Tours",
  description:
    "Experience Puerto Rico like a local with De Tour Con Ali. Certified guides, private tours, El Yunque, snorkeling, bioluminescent bay, and more. Book now!",
  alternates: { canonical: "https://detourconali.getyetti.com" },
  openGraph: {
    title: "De Tour Con Ali | Puerto Rico Island Guided Tours",
    description: "Off the beaten path guided tours in Puerto Rico. Book El Yunque, snorkeling, bioluminescent bay, and custom tours with certified local guides.",
    images: [{ url: "/ingested/detourconali/img-019.webp", width: 1600, height: 900 }],
  },
};
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { VideoShowcase } from "@/components/sections/video-showcase";
import { Footer } from "@/components/sections/footer";
import { ImageCard } from "@/components/magic/image-card";
import { Gallery } from "@/components/magic/gallery";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

// ─── Tours data ───────────────────────────────────────────────────────────────

const tours = [
  {
    title: "Let Me Show You My Island",
    eyebrow: "From $85/person",
    description:
      "Beaches, Rivers, Caves; Historical Sites; Culture and Local Food",
    href: "https://book.peek.com/s/e5f2dedc-d99b-41da-b05c-af05a53280c2/9Eyvq",
    src: "/ingested/detourconali/img-007.webp",
    alt: "Puerto Rico island tour — beaches, rivers and culture",
  },
  {
    title: "PR Countryside Tour with Waterfall",
    eyebrow: "From $69/person",
    description:
      "Easy Hike; Hidden Waterfall; Private and Open Services",
    href: "https://book.peek.com/s/e5f2dedc-d99b-41da-b05c-af05a53280c2/WjqVp",
    src: "/ingested/detourconali/img-008.webp",
    alt: "Puerto Rico countryside waterfall tour",
  },
  {
    title: "Guided Snorkeling and Biobay Tour",
    eyebrow: "From $189/person",
    description:
      "Guided Snorkeling; Biobay you can swim in; Local Food and Drinks",
    href: "https://book.peek.com/s/e5f2dedc-d99b-41da-b05c-af05a53280c2/Y7KzP",
    src: "/ingested/detourconali/img-017.webp",
    alt: "Guided snorkeling and bioluminescent bay tour Puerto Rico",
  },
  {
    title: "You're the Boss (Custom)",
    eyebrow: "Starting $99/hr",
    description:
      "Customized Service; Various vehicle sizes; Pick up in all ports and hotels",
    href: "https://book.peek.com/s/e5f2dedc-d99b-41da-b05c-af05a53280c2/xVLbO",
    src: "/ingested/detourconali/img-025.webp",
    alt: "Custom private tour Puerto Rico",
  },
  {
    title: "El Yunque Adventures",
    eyebrow: "From $85/person",
    description:
      "Select from 4 adventures in El Yunque National Forest",
    href: "https://book.peek.com/s/e5f2dedc-d99b-41da-b05c-af05a53280c2/gV0XY",
    src: "/ingested/detourconali/img-023.webp",
    alt: "El Yunque rainforest adventure tour Puerto Rico",
  },
  {
    title: "Hike to Hidden Gem",
    eyebrow: "From $75/person",
    description:
      "Cave, Cavern, Spring and Fauna; Natural Community Pool; Moderate Hike",
    href: "https://book.peek.com/s/e5f2dedc-d99b-41da-b05c-af05a53280c2/AgLdO",
    src: "/ingested/detourconali/img-028.webp",
    alt: "Hidden gem hike Puerto Rico — caves and natural pools",
  },
];

// ─── Features data ────────────────────────────────────────────────────────────

const features = [
  {
    Icon: MapPin,
    title: "Rich Culture and History",
    description:
      "Explore Puerto Rico's vibrant history, from Spanish colonial forts to indigenous Taino heritage. Every tour weaves in the stories that shaped the island.",
  },
  {
    Icon: Award,
    title: "Certified Tour Guides",
    description:
      "Our guides are certified, trained, and born-and-raised locals. You get real knowledge, not a rehearsed script.",
  },
  {
    Icon: Compass,
    title: "Off the Beaten Path",
    description:
      "Forget crowded tourist traps. We take you to secret waterfalls, hidden caves, and neighborhoods only locals know.",
  },
  {
    Icon: Settings,
    title: "Customizable Tours",
    description:
      "Every group is different. Tell us what you love and we'll build the perfect Puerto Rico day around you.",
  },
];

// ─── Testimonials data ────────────────────────────────────────────────────────

const testimonials = [
  {
    body: "Excellent Rainforest for families! Visiting El Yunque is an excellent tour for families. Short, very manageable hike. Staff were excellent.",
    author: "kitkat343",
    date: "December 2022",
  },
  {
    body: "I recommend booking your tour with De Tour Con Ali. Hector was very knowledgeable, funny and friendly.",
    author: "youelaa",
    date: "December 2022",
  },
  {
    body: "Nelson was an excellent tour guide. He was very knowledgeable and funny. Would highly recommend this tour.",
    author: "rustyh833",
    date: "December 2022",
  },
];

// ─── Gallery images ───────────────────────────────────────────────────────────

const galleryImages = [
  { src: "/ingested/detourconali/img-017.webp", alt: "Puerto Rico bioluminescent bay" },
  { src: "/ingested/detourconali/img-019.webp", alt: "Puerto Rico landscape panorama" },
  { src: "/ingested/detourconali/img-020.webp", alt: "Tour group in Puerto Rico" },
  { src: "/ingested/detourconali/img-022.webp", alt: "Puerto Rico local culture" },
  { src: "/ingested/detourconali/img-025.webp", alt: "Private tour group adventure" },
  { src: "/ingested/detourconali/img-027.webp", alt: "Puerto Rico tropical scenery" },
  { src: "/ingested/detourconali/img-029.webp", alt: "Scenic countryside of Puerto Rico" },
  { src: "/ingested/detourconali/img-031.webp", alt: "Hidden gem tour stop" },
  { src: "/ingested/detourconali/img-036.webp", alt: "Group tour highlight moment" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* ── Section 1: Hero ───────────────────────────────────────────────── */}
        <Hero />

        {/* ── Section 2: Video Showcase ─────────────────────────────────────── */}
        <VideoShowcase />

        {/* ── Section 3: Tours & Pricing ────────────────────────────────────── */}
        <section id="tours" className="py-20 bg-background">
          <div className="container-px mx-auto max-w-7xl">
            <Reveal>
              <div className="mb-3 flex items-center justify-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Our Tours
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
                Choose Your Adventure
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
                From rainforest hikes to bioluminescent bays, every tour is led by a
                certified local guide who knows every corner of the island.
              </p>
            </Reveal>

            <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {tours.map((tour) => (
                <RevealItem key={tour.title}>
                  <ImageCard
                    src={tour.src}
                    alt={tour.alt}
                    title={tour.title}
                    eyebrow={tour.eyebrow}
                    description={tour.description}
                    href={tour.href}
                  />
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal delay={0.1}>
              <div className="mt-10 flex justify-center">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="cursor-pointer border-foreground/20 hover:bg-accent"
                >
                  <Link href="/services">
                    View All Tours
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Section 3: Why Choose Us ──────────────────────────────────────── */}
        <section className="py-20 bg-muted/40">
          <div className="container-px mx-auto max-w-7xl">
            <Reveal>
              <div className="mb-3 flex items-center justify-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Why De Tour Con Ali
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
                The Local Difference
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
                We are not just tour guides. We are Puerto Ricans who love sharing
                our home with the world.
              </p>
            </Reveal>

            <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map(({ Icon, title, description }) => (
                <RevealItem key={title}>
                  <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="grid size-11 place-items-center rounded-xl bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-base">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {description}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* ── Section 4: Testimonials ───────────────────────────────────────── */}
        <section className="py-20 bg-background">
          <div className="container-px mx-auto max-w-7xl">
            <Reveal>
              <div className="mb-3 flex items-center justify-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Traveler Reviews
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
                What Our Guests Say
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-10">
                <AutoSlider itemClassName="w-[88%] sm:w-[48%] lg:w-[32%]" interval={4000}>
                  {testimonials.map((t) => (
                    <div
                      key={t.author}
                      className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="size-4 fill-primary text-primary"
                          />
                        ))}
                      </div>
                      <p className="flex-1 text-sm text-muted-foreground leading-relaxed">
                        &ldquo;{t.body}&rdquo;
                      </p>
                      <div className="border-t border-border pt-4">
                        <p className="text-sm font-semibold">{t.author}</p>
                        <p className="text-xs text-muted-foreground">{t.date}</p>
                      </div>
                    </div>
                  ))}
                </AutoSlider>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Section 5: Gallery ────────────────────────────────────────────── */}
        <section className="py-20 bg-muted/40">
          <div className="container-px mx-auto max-w-7xl">
            <Reveal>
              <div className="mb-3 flex items-center justify-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Photo Gallery
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
                See Puerto Rico Through Our Lens
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
                Real moments from real tours. Every image tells a story of adventure,
                culture, and the beauty of La Isla del Encanto.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-10">
                <Gallery images={galleryImages} />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 flex justify-center">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="cursor-pointer border-foreground/20 hover:bg-accent"
                >
                  <Link href="/gallery">
                    View Full Gallery
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Section 6: CTA ────────────────────────────────────────────────── */}
        <section className="py-24 bg-primary">
          <div className="container-px mx-auto max-w-4xl text-center">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
                Ready to Explore Puerto Rico?
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mx-auto mt-5 max-w-xl text-lg text-primary-foreground/80">
                Contact us today and let&apos;s plan your perfect Puerto Rico adventure.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="cursor-pointer bg-white text-primary hover:bg-white/90 font-semibold"
                >
                  <Link
                    href="https://book.peek.com/s/e5f2dedc-d99b-41da-b05c-af05a53280c2/9Eyvq"
                    target="_blank"
                  >
                    Book Now
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="cursor-pointer border-white/40 text-white bg-transparent hover:bg-white/10"
                >
                  <Link href="/contact-us">Contact Us</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
