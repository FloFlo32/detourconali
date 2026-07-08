import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { ImageCard } from "@/components/magic/image-card";
import { Reveal } from "@/components/magic/reveal";
import { Button } from "@/components/ui/button";
import { Users, Star, Plane } from "lucide-react";

export const metadata: Metadata = {
  title: "Group Tour Experiences Puerto Rico | De Tour Con Ali",
  description:
    "Group travel to Puerto Rico with De Tour Con Ali. Kid-friendly family tours, student groups, corporate outings, and large group packages with certified local guides.",
};

const groupSizes = [
  {
    title: "Small Groups",
    range: "4 to 6 people",
    icon: Users,
    vehicle: "Ford Expedition MAX SUV",
    description:
      "Intimate and flexible. Perfect for families, couples traveling together, or tight-knit friend groups who want a personalized experience.",
  },
  {
    title: "Medium Groups",
    range: "7 to 12 people",
    icon: Users,
    vehicle: "Ford Transit Van",
    description:
      "Great for extended families, school groups, or colleague outings. Plenty of space while keeping the group together.",
  },
  {
    title: "Large Groups",
    range: "13 to 20 people",
    icon: Users,
    vehicle: "Ford E450 MiniBus",
    description:
      "Our full-size minibus handles large parties with ease. Ideal for corporate teams, school trips, reunions, and community organizations.",
  },
];

export default function GroupTourExperiencesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container-px mx-auto max-w-6xl py-16 md:py-24">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Group Tours
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
              Group Travel to Puerto Rico
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              From family reunions to corporate retreats, De Tour Con Ali creates unforgettable group experiences in Puerto Rico. Our fleet of vehicles accommodates groups of all sizes, and our certified guides ensure everyone has an amazing time.
            </p>
          </Reveal>
        </section>

        {/* Kid-Friendly Tours Section */}
        <section className="bg-muted/40">
          <div className="container-px mx-auto max-w-6xl py-16 md:py-24">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 md:items-center">
              <Reveal>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                    Family Friendly
                  </p>
                  <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                    Best Kid-Friendly Tours in Puerto Rico
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    Puerto Rico is one of the most family-friendly destinations in the Caribbean, and De Tour Con Ali knows exactly how to make it magical for every age. Our guides are patient, engaging, and know how to keep the little ones excited from start to finish.
                  </p>
                  <p className="mt-4 text-muted-foreground">
                    From the wonder of El Yunque rainforest to playing in natural river pools, kids absolutely love exploring the island. Our tours are designed with families in mind - we keep stops fun, the pace comfortable, and the memories unforgettable.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Natural Pools", "Wildlife Spotting", "Beach Time", "Cultural Experiences", "Easy Hikes"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <ImageCard
                  src="/ingested/detourconali/img-019.webp"
                  alt="Family enjoying a kid-friendly Puerto Rico tour with De Tour Con Ali"
                  title="Family Adventures Await"
                  description="Our guides know how to create magical moments for families with children of all ages."
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Group Tour Description */}
        <section className="container-px mx-auto max-w-6xl py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                  Why Groups Choose Us
                </p>
                <h2 className="mt-3 text-3xl font-bold">
                  De Tour Con Ali: For a Memorable Group Tour Experience
                </h2>
                <p className="mt-4 text-muted-foreground">
                  We specialize in making group travel to Puerto Rico effortless and extraordinary. Whether you&apos;re coordinating a student trip, planning a corporate outing, or organizing a family reunion, our experienced team handles every detail.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Student groups get an educational yet exciting look at Puerto Rico&apos;s history, ecology, and culture. Corporate groups enjoy a refreshing team-building adventure that creates real connections away from the office. Family groups bond over shared discoveries and local experiences that no resort tour can match.
                </p>
                <p className="mt-4 text-muted-foreground">
                  With our fleet of vehicles ranging from 6 to 20 passengers, and the option to coordinate multiple vehicles for even larger parties, we can accommodate groups of virtually any size.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Group Tour Highlights</h3>
                {[
                  { icon: Star, text: "Dedicated certified guide for your group" },
                  { icon: Users, text: "Flexible group sizes from 4 to 20+ passengers" },
                  { icon: Star, text: "Custom itineraries tailored to your group's interests" },
                  { icon: Users, text: "Air-conditioned, insured, comfortable vehicles" },
                  { icon: Star, text: "Hotel, airport, and cruise port pickup" },
                  { icon: Users, text: "Student, corporate, and family packages available" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                    <item.icon className="mt-0.5 size-5 shrink-0 text-primary" />
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Group Size Options */}
        <section className="bg-muted/40">
          <div className="container-px mx-auto max-w-6xl py-16 md:py-20">
            <Reveal>
              <h2 className="mb-3 text-center text-3xl font-bold">Group Size Options</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mb-12 text-center text-muted-foreground">
                The right vehicle for every group size.
              </p>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-3">
              {groupSizes.map((g, i) => (
                <Reveal key={g.title} delay={i * 0.1}>
                  <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6">
                    <div className="grid size-12 place-items-center rounded-xl bg-primary/10">
                      <g.icon className="size-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{g.title}</h3>
                      <p className="mt-0.5 text-sm font-medium text-primary">{g.range}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{g.description}</p>
                    <p className="text-xs text-muted-foreground border-t border-border pt-3">
                      Vehicle: {g.vehicle}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Wait Before You Go - Airport CTA Banner */}
        <section className="container-px mx-auto max-w-6xl py-12">
          <Reveal>
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center md:p-12">
              <div className="mx-auto flex max-w-2xl flex-col items-center gap-4">
                <Plane className="size-10 text-primary" />
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                  Wait! Before you go...
                </p>
                <h2 className="text-2xl font-bold md:text-3xl">
                  Ask About Our Tours Ending at the Airport!
                </h2>
                <p className="text-muted-foreground">
                  Make the most of your last day in Puerto Rico. Instead of waiting at the airport, spend your final hours on an island tour that drops you off right at the terminal. No wasted time, just more memories.
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-2">
                  <div className="text-sm text-muted-foreground">
                    Call: <a href="tel:+17872220667" className="font-semibold text-foreground hover:text-primary cursor-pointer">(787) 222-0667</a>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Email: <a href="mailto:detourconali@gmail.com" className="font-semibold text-foreground hover:text-primary cursor-pointer">detourconali@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <section className="container-px mx-auto max-w-3xl py-16 pb-24 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold md:text-4xl">
              Plan Your Group Tour Today
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-muted-foreground">
              Contact us to discuss your group&apos;s needs and get a personalized quote. We look forward to showing your group the real Puerto Rico.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="cursor-pointer">
              <Link href="/contact-us">Contact for Group Booking</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="cursor-pointer">
              <Link href="/services">View All Tours</Link>
            </Button>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
