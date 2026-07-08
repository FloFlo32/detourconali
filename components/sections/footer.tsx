import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon, FacebookIcon, YouTubeIcon, XIcon } from "@/components/icons";

const tourLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Destinations", href: "/destinations-tours-puerto-rico" },
  { label: "Gallery", href: "/gallery" },
];

const bookLinks = [
  { label: "Custom Tours", href: "/custom-guided-tours-puerto-rico" },
  { label: "Group Tours", href: "/group-tour-experiences-puerto-rico" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Blog", href: "/blog" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/detourconali",
    Icon: InstagramIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/DeTourConAli",
    Icon: FacebookIcon,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCE1-JHH6NVbQgYlQ-LbWwvg",
    Icon: YouTubeIcon,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/aliwonders",
    Icon: XIcon,
  },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-foreground text-background">
      {/* Airport CTA Banner */}
      <div className="bg-primary text-primary-foreground">
        <div className="container-px mx-auto max-w-7xl py-4 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase">
            Ask About Our Tours Ending at the Airport!
          </p>
        </div>
      </div>

      <div className="container-px mx-auto grid max-w-7xl gap-10 py-14 md:grid-cols-[2fr_1fr_1fr_1.2fr]">
        {/* Brand column */}
        <div>
          <Link href="/" className="inline-block cursor-pointer">
            <img src="/logo.png" alt="De Tour Con Ali" className="h-10 w-auto" />
          </Link>
          <p className="mt-4 max-w-xs text-sm text-background/70 leading-relaxed">
            Take a detour from the ordinary tours and experience Puerto Rico like a local!
          </p>
          <div className="mt-6 flex gap-2">
            {socialLinks.map(({ label, href, Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid size-9 place-items-center rounded-lg border border-background/20 text-background/70 transition-colors hover:border-background/50 hover:text-background cursor-pointer"
              >
                <Icon className="size-4" />
              </Link>
            ))}
          </div>
        </div>

        {/* Tours column */}
        <div>
          <h4 className="text-sm font-semibold text-background uppercase tracking-wider">
            Tours
          </h4>
          <ul className="mt-4 space-y-2.5">
            {tourLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-sm text-background/70 transition-colors hover:text-background cursor-pointer"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Book column */}
        <div>
          <h4 className="text-sm font-semibold text-background uppercase tracking-wider">
            Book
          </h4>
          <ul className="mt-4 space-y-2.5">
            {bookLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-sm text-background/70 transition-colors hover:text-background cursor-pointer"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div>
          <h4 className="text-sm font-semibold text-background uppercase tracking-wider">
            Contact
          </h4>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href="tel:+17872220667"
                className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-background cursor-pointer"
              >
                <Phone className="size-4 shrink-0 text-primary" />
                (787) 222-0667
              </a>
            </li>
            <li>
              <a
                href="mailto:detourconali@gmail.com"
                className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-background cursor-pointer"
              >
                <Mail className="size-4 shrink-0 text-primary" />
                detourconali@gmail.com
              </a>
            </li>
            <li>
              <span className="flex items-start gap-2 text-sm text-background/70">
                <MapPin className="size-4 shrink-0 mt-0.5 text-primary" />
                PO BOX 9020685<br />San Juan PR 00902
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10 py-6">
        <p className="container-px mx-auto max-w-7xl text-sm text-background/50">
          &copy; 2025 De Tour Con Ali. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
