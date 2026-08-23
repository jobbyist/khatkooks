import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle } from "lucide-react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-charcoal text-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-10 lg:py-24">
        <div>
          <img
            src="https://github.com/user-attachments/assets/2d0121a8-4fa3-4f63-8a22-20f4194ed540"
            alt="Khat Kooks"
            width={200}
            height={170}
            loading="lazy"
            className="h-16 w-auto"
          />
          <p className="mt-6 max-w-sm font-display text-2xl leading-snug">
            Modern experimental cuisine, crafted with innovation — for the tables that matter most.
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
            <li>
              <a
                href="https://tiktok.com/@lisa.khat"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-gold"
              >
                <TikTokIcon className="size-4" /> @lisa.khat
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+27659730551"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-gold"
              >
                <MessageCircle className="size-4" /> WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-background/55 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} Khat Kooks. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="transition-colors hover:text-gold">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-gold">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
