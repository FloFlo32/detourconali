import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { ImageCard } from "@/components/magic/image-card";
import { Reveal } from "@/components/magic/reveal";
import { Button } from "@/components/ui/button";
import { Users, Car, Clock, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | De Tour Con Ali",
  description:
    "Learn about Ali and the De Tour Con Ali team - local Puerto Rico tour guides passionate about showing you the authentic island experience.",
};

const stats = [
  { icon: Users, value: "5", label: "Staff Members" },
  { icon: Car, value: "4", label: "Vehicles" },
  { icon: Clock, value: "11", label: "Years Experience" },
  { icon: Heart, value: "100s", label: "Happy Clients" },
];

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container-px mx-auto max-w-6xl py-16 md:py-24">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              About Us
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              I Am an Island Girl With a Country Heart
            </h1>
          </Reveal>
          <Reveal delay={0.2} className="mt-10">
            <ImageCard
              src="/ingested/detourconali/img-027.webp"
              alt="Ali, founder of De Tour Con Ali, showing visitors around Puerto Rico"
              title="Meet Ali"
              ratio="aspect-[16/7]"
            />
          </Reveal>
        </section>

        {/* Story Section */}
        <section className="bg-muted/40">
          <div className="container-px mx-auto max-w-6xl py-16 md:py-24">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <Reveal>
                <h2 className="text-3xl font-bold md:text-4xl">About Me</h2>
              </Reveal>
              <div className="space-y-6">
                <Reveal delay={0.1}>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    I am an island girl, with a country heart and a gipsy soul. Good introduction right?! Well that&apos;s the short version. The long version is that I&apos;ve lived on the island all my life and I finally found a job I am passionate for. I started in the tourism industry as a Chef. My life goal was to own a restaurant. With time I started recognizing other areas of the industry that I knew I would be good at. Went through Front Desks, Concierges and Tour Desks. I recognized how the fun was on the other end of the desk. And well, 11 years later I still have a dream. A much different one that is. I want to be the mostess of the hostess while you&apos;re in MY island. I want to show you a different side of Puerto Rico, the best one, the local side.
                  </p>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    I value your business and trust. Thanks to all the customers support, I have now grown to be a staff of 5 and a fleet of 4! A day out with any of us, certified tour guides will make you feel like a local by the time we&apos;re done. Take a detour from the ordinary, and experience Puerto Rico like a local!
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container-px mx-auto max-w-6xl py-16 md:py-24">
          <Reveal>
            <h2 className="mb-12 text-center text-2xl font-semibold text-muted-foreground">
              Trusted by travelers from around the world
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.1}>
                <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center">
                  <stat.icon className="size-8 text-primary" />
                  <span className="text-4xl font-bold text-foreground">{stat.value}</span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5">
          <div className="container-px mx-auto max-w-3xl py-20 text-center">
            <Reveal>
              <h2 className="text-3xl font-bold md:text-4xl">
                Ready to Explore Puerto Rico?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-muted-foreground">
                Let Ali and her team show you the authentic side of the island you won&apos;t find in any guidebook.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-8">
              <Button asChild size="lg" className="cursor-pointer">
                <Link
                  href="https://book.peek.com/s/e5f2dedc-d99b-41da-b05c-af05a53280c2/9Eyvq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Now
                </Link>
              </Button>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
