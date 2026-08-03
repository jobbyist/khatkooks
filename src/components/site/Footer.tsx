import { Link } from "@tanstack/react-router";
import { Instagram, Mail } from "lucide-react";
import logoLight from "@/assets/logo-light.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-charcoal text-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-10 lg:py-24">
        <div>
          <img
            src={logoLight.url}
            alt="Khat Kooks"
            width={200}
            height={170}
            loading="lazy"
            className="h-16 w-auto"
          />
          <p className="mt-6 max-w-sm font-display text-2xl leading-snug">
            Authentic African cuisine, crafted with passion — for the tables that matter most.
          </p>
        </div>

        <div>
          <h2 className="eyebrow text-gold">Quick Links</h2>
          <ul className="mt-5 space-y-3 text-sm text-background/75">
            <li>
              <Link to="/" hash="about" className="transition-colors hover:text-gold">
                About Lisa
              </Link>
            </li>
            <li>
              <Link to="/" hash="services" className="transition-colors hover:text-gold">
                Services
              </Link>
            </li>
            <li>
              <Link to="/" hash="gallery" className="transition-colors hover:text-gold">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/" hash="faqs" className="transition-colors hover:text-gold">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/quote" className="transition-colors hover:text-gold">
                Request a Quote
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-gold">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-gold">Connect</h2>
          <ul className="mt-5 space-y-3 text-sm text-background/75">
            <li>
              <a
                href="mailto:info@khatkooks.food"
                className="inline-flex items-center gap-2 transition-colors hover:text-gold"
              >
                <Mail className="size-4" /> info@khatkooks.food
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/khatkooks"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-gold"
              >
                <Instagram className="size-4" /> @khatkooks
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/lisa.khat"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-gold"
              >
                <Instagram className="size-4" /> @lisa.khat
              </a>
            </li>
            <li className="text-background/55">WhatsApp — coming soon</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-background/55 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} Khat Kooks. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
