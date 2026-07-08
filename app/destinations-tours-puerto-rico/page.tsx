import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { ImageCard } from "@/components/magic/image-card";
import { Reveal } from "@/components/magic/reveal";
import { Button } from "@/components/ui/button";
import { Clock, Shield, Star, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Destinations Tours Puerto Rico | De Tour Con Ali",
  description:
    "Discover the best Puerto Rico destinations - Old San Juan, El Yunque Rainforest, hidden waterfalls, and the bioluminescent bay with local expert guides.",
};

const destinations = [
  {
    title: "Old San Juan",
    description:
      "Walk the cobblestone streets of one of the oldest cities in the Americas. Old San Juan is a living museum of Spanish colonial architecture, colorful buildings, and centuries of history. Explore El Morro fortress, browse boutique shops, and taste authentic Puerto Rican cuisine.",
    image: "/ingested/detourconali/dest-old-san-juan.webp",
    eyebrow: "History and Culture",
  },
  {
    title: "El Yunque Rainforest",
    description:
      "The only tropical rainforest in the entire US National Forest system. El Yunque is a breathtaking world of lush greenery, cascading waterfalls, exotic wildlife, and misty mountain peaks. Our guides take you to the best viewpoints and hidden spots most visitors never find.",
    image: "/ingested/detourconali/dest-el-yunque.webp",
    eyebrow: "Nature and Adventure",
  },
  {
    title: "Hidden Waterfalls",
    description:
      "Puerto Rico is home to some of the most spectacular hidden waterfalls in the Caribbean. Off the beaten path and known only to locals, these natural wonders are worth every step of the journey. La Coca Falls, Gozalandia, and secret cascades await.",
    image: "/ingested/detourconali/img-015.webp",
    eyebrow: "Secret Spots",
  },
  {
    title: "Bioluminescent Bay",
    description:
      "One of the most magical natural phenomena on Earth. The microorganisms in Puerto Rico's bio bay light up the water with an ethereal blue glow as you swim through it. This unforgettable experience is unlike anything else in the world.",
    image: "/ingested/detourconali/img-017.webp",
    eyebrow: "Natural Wonder",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description:
      "Skip the research and let us handle the logistics. We know the best times, routes, and hidden spots so you maximize every hour of your trip.",
  },
  {
    icon: Shield,
    title: "No Stress",
    description:
      "Comfortable, air-conditioned vehicles with insured transport. We take care of every detail so you can focus on soaking it all in.",
  },
  {
    icon: Star,
    title: "Experienced Guides",
    description:
      "All our guides are certified and have years of experience. We don't just show you the sights - we tell you the stories behind them.",
  },
  {
    icon: Compass,
    title: "Customization",
    description:
      "Every group is different. We tailor the pace, stops, and activities to match your interests, fitness level, and available time.",
  },
];

export default function DestinationsToursPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container-px mx-auto max-w-6xl py-16 md:py-24">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Destinations
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
              Puerto Rico Island Tours
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              If you love traveling to places with history, culture, and heritage, Puerto Rico needs to be on your bucket list. Located between the Caribbean Sea and the North Atlantic Ocean, this vibrant tropical paradise opens the door to pristine beaches, charming colonial architecture, and a perfect blend of American and Spanish cultures.
            </p>
          </Reveal>
        </section>

        {/* Destinations Grid */}
        <section className="container-px mx-auto max-w-6xl pb-20">
          <div className="grid gap-8 md:grid-cols-2">
            {destinations.map((dest, i) => (
              <Reveal key={dest.title} delay={i * 0.1}>
                <ImageCard
                  src={dest.image}
                  alt={dest.title}
                  title={dest.title}
                  description={dest.description}
                  eyebrow={dest.eyebrow}
                />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Guided Tours Section */}
        <section className="bg-muted/40">
          <div className="container-px mx-auto max-w-6xl py-16 md:py-24">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 md:items-center">
              <Reveal>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                    Local Expertise
                  </p>
                  <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                    Guided Puerto Rico Island Tours
                  </h2>
                  <p className="mt-5 text-muted-foreground">
                    Our local guides don&apos;t just drive you around - they grew up here. They know every secret spot, hidden beach, and authentic restaurant that no guidebook lists. When you tour with De Tour Con Ali, you experience Puerto Rico the way locals do.
                  </p>
                  <p className="mt-4 text-muted-foreground">
                    With 11 years of experience, a fleet of 4 vehicles, and a passionate team of 5 certified guides, we&apos;ve helped hundreds of visitors discover the real beauty and culture of this extraordinary island.
                  </p>
                  <div className="mt-8">
                    <Button asChild size="lg" className="cursor-pointer">
                      <Link
                        href="https://book.peek.com/s/e5f2dedc-d99b-41da-b05c-af05a53280c2/9Eyvq"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View All Tours
                      </Link>
                    </Button>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="overflow-hidden rounded-2xl aspect-[4/3] bg-muted">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/ingested/detourconali/img-020.webp"
                    alt="Guided tour group exploring Puerto Rico"
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container-px mx-auto max-w-6xl py-16 md:py-24">
          <Reveal>
            <h2 className="mb-3 text-center text-3xl font-bold">
              Why Tour with a Local Guide?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-12 text-center text-muted-foreground">
              The difference between a tourist and a traveler is a great guide.
            </p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.1}>
                <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6">
                  <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary/10">
                    <b.icon className="size-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary/5">
          <div className="container-px mx-auto max-w-3xl py-20 text-center">
            <Reveal>
              <h2 className="text-3xl font-bold md:text-4xl">
                Start Your Puerto Rico Adventure
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-muted-foreground">
                Choose from our selection of guided tours or let us build a custom itinerary just for you.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="cursor-pointer">
                <Link
                  href="https://book.peek.com/s/e5f2dedc-d99b-41da-b05c-af05a53280c2/9Eyvq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Now
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="cursor-pointer">
                <Link href="/services">See All Tours</Link>
              </Button>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
