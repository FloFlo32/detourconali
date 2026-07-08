"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/destinations-tours-puerto-rico", label: "Destinations" },
  { href: "/custom-guided-tours-puerto-rico", label: "Custom Tours" },
  { href: "/group-tour-experiences-puerto-rico", label: "Group Tours" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-white/90 backdrop-blur-xl shadow-sm"
          : "border-b border-transparent bg-white/80 backdrop-blur-sm"
      )}
    >
      <nav className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <img src="/logo.png" alt="De Tour Con Ali" className="h-10 w-auto" />
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground hover:bg-accent cursor-pointer"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="tel:+17872220667"
            className="hidden md:flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors cursor-pointer"
          >
            <Phone className="size-4 text-primary" />
            (787) 222-0667
          </a>
          <Button
            asChild
            size="sm"
            className="hidden md:inline-flex cursor-pointer bg-primary hover:bg-primary/90"
          >
            <Link
              href="https://book.peek.com/s/e5f2dedc-d99b-41da-b05c-af05a53280c2/9Eyvq"
              target="_blank"
            >
              Book a Tour
            </Link>
          </Button>
          <button
            className="lg:hidden p-2 rounded-md text-foreground cursor-pointer"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-white/95 backdrop-blur-xl lg:hidden">
          <div className="container-px mx-auto flex max-w-7xl flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/70 hover:bg-accent hover:text-foreground cursor-pointer transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+17872220667"
              className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-foreground/70"
            >
              <Phone className="size-4 text-primary" />
              (787) 222-0667
            </a>
            <Button asChild className="mt-2 cursor-pointer">
              <Link
                href="https://book.peek.com/s/e5f2dedc-d99b-41da-b05c-af05a53280c2/9Eyvq"
                target="_blank"
                onClick={() => setOpen(false)}
              >
                Book a Tour
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
