import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/magic/reveal";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon, FacebookIcon, YouTubeIcon, XIcon } from "@/components/icons";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Us | De Tour Con Ali",
  description:
    "Get in touch with De Tour Con Ali. Call, email, or fill out our contact form to plan your perfect Puerto Rico tour experience.",
};

const contactCards = [
  {
    icon: Phone,
    label: "Phone",
    value: "(787) 222-0667",
    href: "tel:+17872220667",
    description: "Call or text us anytime",
  },
  {
    icon: Mail,
    label: "Email",
    value: "detourconali@gmail.com",
    href: "mailto:detourconali@gmail.com",
    description: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "PO BOX 9020685",
    subValue: "San Juan, PR 00902",
    description: "Based in San Juan, Puerto Rico",
  },
];

const socialLinks = [
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: "https://www.instagram.com/detourconali",
    color: "hover:text-pink-500",
  },
  {
    icon: FacebookIcon,
    label: "Facebook",
    href: "https://www.facebook.com/DeTourConAli",
    color: "hover:text-blue-600",
  },
  {
    icon: YouTubeIcon,
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCE1-JHH6NVbQgYlQ-LbWwvg",
    color: "hover:text-red-500",
  },
  {
    icon: XIcon,
    label: "Twitter",
    href: "https://twitter.com/aliwonders",
    color: "hover:text-sky-400",
  },
];

export default function ContactUsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container-px mx-auto max-w-6xl py-16 md:py-24">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Contact Us
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
              Get in Touch
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              Have questions about our tours? Ready to book your Puerto Rico adventure? We&apos;d love to hear from you. Reach out by phone, email, or fill out the form below.
            </p>
          </Reveal>
        </section>

        {/* Contact Cards */}
        <section className="container-px mx-auto max-w-6xl pb-16">
          <div className="grid gap-6 sm:grid-cols-3">
            {contactCards.map((card, i) => (
              <Reveal key={card.label} delay={i * 0.1}>
                <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center">
                  <div className="grid size-12 place-items-center rounded-xl bg-primary/10">
                    <card.icon className="size-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      {card.label}
                    </p>
                    {"href" in card && card.href ? (
                      <a
                        href={card.href}
                        className="mt-1 block font-semibold text-foreground transition-colors hover:text-primary cursor-pointer"
                      >
                        {card.value}
                      </a>
                    ) : (
                      <p className="mt-1 font-semibold text-foreground">{card.value}</p>
                    )}
                    {"subValue" in card && card.subValue && (
                      <p className="text-sm font-semibold text-foreground">{card.subValue}</p>
                    )}
                    <p className="mt-1 text-xs text-muted-foreground">{card.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Social Media */}
        <section className="bg-muted/40">
          <div className="container-px mx-auto max-w-6xl py-12">
            <Reveal>
              <h2 className="mb-6 text-center text-xl font-semibold">Follow Our Adventures</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium text-muted-foreground transition-colors cursor-pointer ${social.color}`}
                  >
                    <social.icon className="size-4" />
                    {social.label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Contact Form + Info */}
        <section className="container-px mx-auto max-w-6xl py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            {/* Left - form info */}
            <Reveal>
              <div>
                <h2 className="text-3xl font-bold">Send Us a Message</h2>
                <p className="mt-4 text-muted-foreground">
                  Fill out the form and we&apos;ll get back to you as soon as possible. Whether you have questions about a specific tour, need a custom quote for a group, or just want to say hello - we&apos;re here for it.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="rounded-xl border border-border bg-card p-4">
                    <p className="text-sm font-medium">Business Hours</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Monday to Sunday, 7:00 AM to 8:00 PM AST
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-4">
                    <p className="text-sm font-medium">Response Time</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      We typically respond within a few hours during business hours.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-4">
                    <p className="text-sm font-medium">Languages</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      We speak English and Spanish. Hablamos Espanol.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right - form */}
            <Reveal delay={0.15}>
              <ContactForm />
            </Reveal>
          </div>
        </section>

        {/* Booking CTA */}
        <section className="bg-primary/5">
          <div className="container-px mx-auto max-w-3xl py-20 text-center">
            <Reveal>
              <h2 className="text-3xl font-bold md:text-4xl">
                Ready to Book?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-muted-foreground">
                Skip the wait and book directly through our online booking system. Available 24/7.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-8">
              <Button asChild size="lg" className="cursor-pointer">
                <Link
                  href="https://book.peek.com/s/e5f2dedc-d99b-41da-b05c-af05a53280c2/9Eyvq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Now Online
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
