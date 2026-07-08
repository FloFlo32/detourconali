import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { ImageCard } from "@/components/magic/image-card";
import { Reveal } from "@/components/magic/reveal";
import { Button } from "@/components/ui/button";
import { CheckCircle, MapPin, Car, Smile } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Guided Tours Puerto Rico | De Tour Con Ali",
  description:
    "Book a custom private tour of Puerto Rico with De Tour Con Ali. Choose your destinations, pick your vehicle, and explore at your own pace with a certified guide.",
};

const vehicles = [
  {
    name: "Ford Expedition MAX SUV",
    seats: "6 seats",
    rate: "$85/hr",
    ideal: "Couples, small families, and friend groups",
  },
  {
    name: "Ford Transit Van",
    seats: "12 seats",
    rate: "$125/hr",
    ideal: "Medium groups and corporate teams",
  },
  {
    name: "Ford E450 MiniBus",
    seats: "20 seats",
    rate: "$175/hr",
    ideal: "Large groups, weddings, and events",
  },
];

const vehicleFeatures = [
  "Air-conditioned and fully insured",
  "Certified tour guide and driver included",
  "Airport, port, and hotel pickup",
  "4-hour minimum booking",
  "Food costs and entrance fees not included",
];

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "Choose Your Destinations",
    description:
      "Tell us the places you want to see - Old San Juan, El Yunque, beaches, waterfalls, or let us suggest an itinerary. The island is your playground.",
  },
  {
    number: "02",
    icon: Car,
    title: "Pick Your Vehicle",
    description:
      "Choose the vehicle size that fits your group. From our 6-seat Expedition for intimate tours to our 20-seat MiniBus for larger gatherings, we have the right ride.",
  },
  {
    number: "03",
    icon: Smile,
    title: "Enjoy Your Tour",
    description:
      "Your certified guide picks you up, handles all logistics, and delivers a day you will never forget. Sit back and experience Puerto Rico like a local.",
  },
];

const occasions = [
  {
    title: "Family Getaways",
    description:
      "Create memories that last a lifetime. Our guides are great with kids and know how to keep every age group engaged and entertained.",
  },
  {
    title: "Corporate Groups",
    description:
      "Team-building, client entertainment, or company retreats - a private island tour is a unique and memorable experience for any professional group.",
  },
  {
    title: "Special Occasions",
    description:
      "Birthdays, anniversaries, bachelorette parties, honeymoons - let us make your special day truly unforgettable in paradise.",
  },
];

export default function CustomGuidedToursPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container-px mx-auto max-w-6xl py-16 md:py-24">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Custom Tours
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
              Customized Tours of Puerto Rico
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              Be a part of the best private tours of Puerto Rico. You&apos;re the Boss - we tailor every detail to your preferences. Your group, your pace, your Puerto Rico adventure.
            </p>
          </Reveal>
        </section>

        {/* You're the Boss Section */}
        <section className="bg-muted/40">
          <div className="container-px mx-auto max-w-6xl py-16 md:py-24">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 md:items-start">
              <Reveal>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                    You&apos;re the Boss
                  </p>
                  <h2 className="mt-3 text-3xl font-bold">
                    Private Tour, Your Rules
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    No fixed itineraries, no strangers sharing your tour, no rushing to keep pace with a group. When you book a custom private tour, we dedicate our time entirely to you and your party.
                  </p>

                  {/* Vehicle Options */}
                  <div className="mt-8 space-y-3">
                    <h3 className="font-semibold">Choose Your Vehicle:</h3>
                    {vehicles.map((v) => (
                      <div
                        key={v.name}
                        className="rounded-xl border border-border bg-background p-4"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="font-semibold">{v.name}</p>
                            <p className="mt-0.5 text-sm text-muted-foreground">
                              {v.seats} &middot; {v.ideal}
                            </p>
                          </div>
                          <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                            {v.rate}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Included features */}
                  <div className="mt-8">
                    <h3 className="mb-3 font-semibold">All Vehicles Include:</h3>
                    <ul className="space-y-2">
                      {vehicleFeatures.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <ImageCard
                  src="/ingested/detourconali/img-018.webp"
                  alt="Private tour vehicle ready for a custom Puerto Rico adventure"
                  title="Your Private Fleet"
                  description="All vehicles are air-conditioned, fully insured, and driven by certified tour guides. We maintain our fleet to the highest standards of safety and comfort."
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="container-px mx-auto max-w-6xl py-16 md:py-24">
          <Reveal>
            <h2 className="mb-3 text-center text-3xl font-bold">How It Works</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-12 text-center text-muted-foreground">
              Three simple steps to your perfect Puerto Rico day.
            </p>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.1}>
                <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-4xl font-bold text-primary/20">
                      {step.number}
                    </span>
                    <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10">
                      <step.icon className="size-5 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Perfect For Section */}
        <section className="bg-muted/40">
          <div className="container-px mx-auto max-w-6xl py-16 md:py-20">
            <Reveal>
              <h2 className="mb-3 text-center text-3xl font-bold">
                Perfect For Every Occasion
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mb-12 text-center text-muted-foreground">
                Private tours adapt to any group size, occasion, and interest.
              </p>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-3">
              {occasions.map((o, i) => (
                <Reveal key={o.title} delay={i * 0.1}>
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <h3 className="text-lg font-semibold">{o.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{o.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container-px mx-auto max-w-3xl py-20 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold md:text-4xl">
              Book Your Custom Tour
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-muted-foreground">
              4-hour minimum. Starting at $85/hr. Airport, port, and hotel pickup included. Book online today.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="cursor-pointer">
              <Link
                href="https://book.peek.com/s/e5f2dedc-d99b-41da-b05c-af05a53280c2/xVLbO"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Custom Tour
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="cursor-pointer">
              <Link href="/contact-us">Ask a Question</Link>
            </Button>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
