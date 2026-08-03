import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Instagram } from "lucide-react";
import logoDark from "@/assets/logo-dark.png.asset.json";
import { cn } from "@/lib/utils";

const sectionLinks = [
  { label: "About", hash: "about" },
  { label: "Services", hash: "services" },
  { label: "Gallery", hash: "gallery" },
  { label: "Testimonials", hash: "testimonials" },
  { label: "FAQs", hash: "faqs" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 glass-nav transition-all duration-500",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-10"
      >
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logoDark.url}
            alt="Khat Kooks"
            width={120}
            height={100}
            className="h-9 w-auto dark:invert"
          />
          <span className="sr-only">Khat Kooks</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <Link
            to="/"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
          >
            Home
          </Link>
          {sectionLinks.map((l) => (
            <Link
              key={l.hash}
              to="/"
              hash={l.hash}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
          >
            Contact
          </Link>
          <a
            href="https://instagram.com/khatkooks"
            target="_blank"
            rel="noreferrer"
            aria-label="Khat Kooks on Instagram"
            className="text-foreground/70 transition-colors hover:text-accent"
          >
            <Instagram className="size-[18px]" />
          </a>
          <Link
            to="/quote"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-300 hover:-translate-y-0.5 hover:bg-accent"
          >
            Request Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="rounded-full border border-border p-2.5 text-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="glass-panel mt-3 border-t border-border/60 px-5 pb-6 pt-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {[{ label: "Home", hash: undefined }, ...sectionLinks].map((l) => (
              <li key={l.label}>
                <Link
                  to="/"
                  hash={l.hash}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 font-display text-xl text-foreground transition-colors hover:bg-secondary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 font-display text-xl text-foreground transition-colors hover:bg-secondary"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="https://instagram.com/khatkooks"
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl px-3 py-3 font-display text-xl text-foreground transition-colors hover:bg-secondary"
              >
                Instagram
              </a>
            </li>
          </ul>
          <Link
            to="/quote"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-primary px-5 py-3.5 text-center text-sm font-semibold text-primary-foreground"
          >
            Request Quote
          </Link>
        </div>
      )}
    </header>
  );
}
