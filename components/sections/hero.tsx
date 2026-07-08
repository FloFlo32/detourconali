"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Users, Car, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";

const badges = [
  "Private Groups",
  "Off the Beaten Path",
  "Certified Guides",
  "Airport Pickup Available",
];

const stats = [
  { icon: Users, value: "5", label: "Expert Guides" },
  { icon: Car, value: "4-Tour", label: "Fleet" },
  { icon: Clock, value: "10+", label: "Years of Experience" },
];

export function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden flex items-center">
      {/* Full-screen video background */}
      <div className="absolute inset-0 z-0">
        <video
          className="size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/ingested/detourconali/img-019.webp"
        >
          <source src="/hero.mp4" type="video/mp4" />
          {/* Fallback: Ken Burns image if video file not present */}
          <img
            src="/ingested/detourconali/img-019.webp"
            alt="Puerto Rico landscape"
            className="size-full object-cover hero-kenburns"
          />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 container-px mx-auto max-w-7xl w-full py-24 lg:py-32">
        <div className="max-w-3xl">
          <Reveal delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 border border-primary/30 px-4 py-1.5 mb-8 backdrop-blur-sm">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Puerto Rico&apos;s #1 Local Tour Guide
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Experience Puerto Rico{" "}
              <span className="text-primary">Like a Local</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 text-xl text-white/80 leading-relaxed max-w-2xl">
              Take a detour from the ordinary tours and discover the Island of
              Enchantment with certified local guides who know every secret spot.
            </p>
          </Reveal>

          {/* Stats row */}
          <Reveal delay={0.16}>
            <div className="mt-8 flex flex-wrap gap-6">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-lg bg-primary/20 border border-primary/30 backdrop-blur-sm">
                    <Icon className="size-4 text-primary" />
                  </div>
                  <div>
                    <span className="block text-base font-bold text-white leading-none">
                      {value}
                    </span>
                    <span className="block text-xs text-white/60 mt-0.5">
                      {label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="cursor-pointer bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 text-base px-8"
              >
                <Link
                  href="https://book.peek.com/s/e5f2dedc-d99b-41da-b05c-af05a53280c2/9Eyvq"
                  target="_blank"
                >
                  Book Your Tour
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="cursor-pointer border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm text-base px-8"
              >
                <Link href="/services">Explore Tours</Link>
              </Button>
            </div>
          </Reveal>

          {/* Trust badges */}
          <Reveal delay={0.26}>
            <div className="mt-8 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white/80"
                >
                  <CheckCircle2 className="size-3 text-primary" />
                  {badge}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
