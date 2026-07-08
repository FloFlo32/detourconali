import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { ImageCard } from "@/components/magic/image-card";
import { Reveal } from "@/components/magic/reveal";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Puerto Rico Tour Packages & Prices",
  description:
    "Book Puerto Rico tours from $69/person. El Yunque rainforest, bioluminescent bay, snorkeling, custom private tours & more. Certified local guides. Book now!",
  alternates: { canonical: "https://detourconali.getyetti.com/services" },
};

const tours = [
  {
    title: "Let Me Show You My Island",
    price: "$85/person",
    image: "/ingested/detourconali/img-007.webp",
    features: ["Beaches, Rivers, Caves", "Historical Sites", "Culture and Local Food"],
    bookUrl: "https://book.peek.com/s/e5f2dedc-d99b-41da-b05c-af05a53280c2/9Eyvq",
    description:
      "The ultimate Puerto Rico experience. Ali takes you to the best spots the island has to offer, from stunning beaches and refreshing rivers to fascinating caves, historic sites, and authentic local cuisine.",
  },
  {
    title: "PR Countryside Tour with Visit to a Waterfall",
    price: "$89/person or $69/person",
    image: "/ingested/detourconali/img-008.webp",
    description:
      "Get a comprehensive tour of the island of Puerto Rico during a single outing from San Juan. Highlights include San Felipe del Morro Fort, Capitol District, Pinones for local food, La Coca Waterfall.",
    features: [
      "San Felipe del Morro Fort",
      "Capitol District",
      "Pinones for local food",
      "Yokahu Observation Tower",
      "La Coca Waterfall",
    ],
    details: ["Duration: 6 hours", "Min: 4 people", "Full refund up to 24 hours prior"],
    bookUrl: "https://book.peek.com/s/e5f2dedc-d99b-41da-b05c-af05a53280c2/WjqVp",
  },
  {
    title: "You're the Boss (Custom Private Tours)",
    price: "Starting $99/hr",
    image: "/ingested/detourconali/img-025.webp",
    description:
      "Total freedom to explore Puerto Rico your way. Choose your destinations, set your pace, and let our certified guides handle everything else.",
    vehicles: [
      { name: "Ford Expedition MAX SUV", seats: "6 seats", rate: "$85/hr" },
      { name: "Ford Transit Van", seats: "12 seats", rate: "$125/hr" },
      { name: "Ford E450 MiniBus", seats: "20 seats", rate: "$175/hr" },
    ],
    features: [
      "Air-conditioned insured vehicles",
      "Driver and certified tour guide included",
      "Airport, port, and hotel pickup",
      "4-hour minimum",
    ],
    note: "Food costs and entrance fees are client responsibility",
    bookUrl: "https://book.peek.com/s/e5f2dedc-d99b-41da-b05c-af05a53280c2/xVLbO",
  },
  {
    title: "El Yunque Adventures",
    price: "From $85/person",
    image: "/ingested/detourconali/img-023.webp",
    description:
      "Explore El Yunque National Forest, the only tropical rainforest in the US National Forest system. Multiple options for every adventure level.",
    subOptions: [
      { name: "El Yunque Sightseeing Tour", price: "$95/pp", duration: "5 hrs" },
      { name: "El Yunque WET Sightseeing Tour", price: "$85/pp", duration: "5 hrs", note: "Includes 12-foot jump" },
      { name: "Hike the Cloud Forest", price: "$125/pp", duration: "6 hrs", note: "4-mile hike" },
    ],
    bookUrl: "https://book.peek.com/s/e5f2dedc-d99b-41da-b05c-af05a53280c2/gV0XY",
  },
  {
    title: "Guided Snorkeling and Biobay Tour",
    price: "$189/person",
    image: "/ingested/detourconali/img-017.webp",
    description:
      "A one-of-a-kind double adventure combining guided snorkeling in crystal clear waters with a swim in Puerto Rico's magical bioluminescent bay.",
    features: [
      "Guided snorkeling",
      "Bioluminescent bay you can swim in",
      "Local food and drinks",
    ],
    bookUrl: "https://book.peek.com/s/e5f2dedc-d99b-41da-b05c-af05a53280c2/Y7KzP",
  },
  {
    title: "Hike to Hidden Gem (Manati/Vega Baja)",
    price: "$75/person",
    image: "/ingested/detourconali/img-028.webp",
    description:
      "We'll take you to places unknown to some of the locals! Cave system exploration with helmets, natural spring hole, natural community pool with life jackets, lunch stop.",
    details: ["Full day adventure", "40-minute drive from San Juan"],
    features: [
      "Cave system exploration (helmets provided)",
      "Natural spring hole",
      "Natural community pool (life jackets included)",
      "Lunch stop",
    ],
    bookUrl: "https://book.peek.com/s/e5f2dedc-d99b-41da-b05c-af05a53280c2/AgLdO",
  },
];

const whatToBring = [
  "Comfortable walking clothes and shoes",
  "Sunhat, sunglasses, and sunblock",
  "Towels and water shoes",
  "Camera",
  "Money for food and tips",
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container-px mx-auto max-w-6xl py-16 md:py-24">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Our Services
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
              Authentic Puerto Rico Tours for Every Adventurer
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              From historic Old San Juan to the lush El Yunque rainforest, our certified local guides bring you the real Puerto Rico. Choose the tour that fits your style or let us build a custom experience just for you.
            </p>
          </Reveal>
        </section>

        {/* Tours Listing */}
        <section className="container-px mx-auto max-w-6xl pb-16">
          <div className="space-y-16">
            {tours.map((tour, i) => (
              <Reveal key={tour.title} delay={0.05}>
                <div className="rounded-2xl border border-border bg-card overflow-hidden">
                  <div className={`grid md:grid-cols-2 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                    {/* Image */}
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={tour.image}
                        alt={tour.title}
                        loading="lazy"
                        decoding="async"
                        className="size-full object-cover"
                      />
                    </div>
                    {/* Content */}
                    <div className="flex flex-col gap-4 p-6 md:p-8">
                      <div>
                        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          {tour.price}
                        </span>
                        <h2 className="mt-3 text-2xl font-bold">{tour.title}</h2>
                        <p className="mt-2 text-sm text-muted-foreground">{tour.description}</p>
                      </div>

                      {/* Details pills */}
                      {"details" in tour && tour.details && (
                        <div className="flex flex-wrap gap-2">
                          {tour.details.map((d) => (
                            <span key={d} className="flex items-center gap-1 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                              <Clock className="size-3" />
                              {d}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Vehicle options */}
                      {"vehicles" in tour && tour.vehicles && (
                        <div className="space-y-2">
                          <p className="text-sm font-semibold">Vehicle Options:</p>
                          {tour.vehicles.map((v) => (
                            <div key={v.name} className="flex items-center justify-between rounded-lg bg-muted/50 px-3 py-2 text-sm">
                              <span className="font-medium">{v.name}</span>
                              <span className="text-muted-foreground">{v.seats} &middot; {v.rate}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Sub-options */}
                      {"subOptions" in tour && tour.subOptions && (
                        <div className="space-y-2">
                          <p className="text-sm font-semibold">Choose Your Adventure:</p>
                          {tour.subOptions.map((o) => (
                            <div key={o.name} className="rounded-lg bg-muted/50 px-3 py-2 text-sm">
                              <div className="flex items-center justify-between">
                                <span className="font-medium">{o.name}</span>
                                <span className="text-primary font-semibold">{o.price}</span>
                              </div>
                              <div className="mt-0.5 flex gap-3 text-xs text-muted-foreground">
                                <span>{o.duration}</span>
                                {"note" in o && o.note && <span>{o.note}</span>}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Features list */}
                      {"features" in tour && tour.features && (
                        <ul className="space-y-1.5">
                          {tour.features.map((f) => (
                            <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      )}

                      {"note" in tour && tour.note && (
                        <p className="text-xs text-muted-foreground italic">{tour.note}</p>
                      )}

                      <div className="mt-auto pt-2">
                        <Button asChild className="cursor-pointer">
                          <Link
                            href={tour.bookUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Book This Tour
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* What to Bring */}
        <section className="bg-muted/40">
          <div className="container-px mx-auto max-w-3xl py-16 md:py-20">
            <Reveal>
              <h2 className="text-center text-3xl font-bold">What to Bring</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-3 text-center text-muted-foreground">
                Pack these essentials for a comfortable and enjoyable Puerto Rico adventure.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="mt-10">
              <div className="rounded-2xl border border-border bg-card p-8">
                <ul className="space-y-4">
                  {whatToBring.map((item, i) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                        {i + 1}
                      </span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="container-px mx-auto max-w-3xl py-20 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold md:text-4xl">Book Your Adventure Today</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-muted-foreground">
              Our certified local guides are ready to show you the real Puerto Rico. Book online in minutes.
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
              <Link href="/contact-us">Contact Us</Link>
            </Button>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
