import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/magic/reveal";
import { Button } from "@/components/ui/button";
import { posts } from "@/app/blog/data";

export const metadata: Metadata = {
  title: "Blog | De Tour Con Ali",
  description:
    "Travel tips, Puerto Rico insider guides, and stories from De Tour Con Ali — your local guide to the best island experiences.",
  alternates: { canonical: "https://detourconali.getyetti.com/blog" },
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Page header */}
        <section className="container-px mx-auto max-w-6xl py-16 md:py-24">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Blog
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
              Travel Tips and Puerto Rico Stories
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              Real advice from the people who know Puerto Rico best. Our guides share insider tips, destination guides, packing lists, and stories from the road to help you plan the perfect island trip.
            </p>
          </Reveal>
        </section>

        {/* Featured post */}
        <section className="container-px mx-auto max-w-6xl pb-12">
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-lg md:grid-cols-2"
            >
              <div className="aspect-video overflow-hidden md:aspect-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featured.image}
                  alt={featured.title}
                  loading="eager"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center gap-4 p-8 md:p-10">
                <span className="inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {featured.tag}
                </span>
                <h2 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors md:text-3xl">
                  {featured.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {featured.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="size-3.5" />
                    {featured.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="size-3.5" />
                    {featured.readTime}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Read Article
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        </section>

        {/* Rest of posts */}
        <section className="container-px mx-auto max-w-6xl pb-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="aspect-video overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <span className="inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {post.tag}
                    </span>
                    <h2 className="text-base font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground pt-2 border-t border-border">
                      <span className="flex items-center gap-1">
                        <Calendar className="size-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="size-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container-px mx-auto max-w-3xl py-20 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold md:text-4xl">
              Ready to Experience It for Yourself?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-muted-foreground">
              Reading about Puerto Rico is great. Experiencing it with a local guide is even better.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-8">
            <Button asChild size="lg" className="cursor-pointer">
              <Link
                href="https://book.peek.com/s/e5f2dedc-d99b-41da-b05c-af05a53280c2/9Eyvq"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Tour Now
              </Link>
            </Button>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
