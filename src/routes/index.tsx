import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  X,
  Star,
  ChefHat,
  Building2,
  UtensilsCrossed,
  CalendarHeart,
  Soup,
  Leaf,
  HandHeart,
  ShieldCheck,
  Sparkles,
  Truck,
  Wallet,
  ScrollText,
  Flame,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

import heroVideoAsset from "@/assets/hero-video.mp4.asset.json";
import heroPosterAsset from "@/assets/hero-poster.jpg.asset.json";
import founderAsset from "@/assets/founder-lisa.jpg.asset.json";
import hotdogsAsset from "@/assets/gourmet-hotdogs.jpg.asset.json";
import salmonCitrusAsset from "@/assets/salmon-citrus.jpg.asset.json";
import braaiAsset from "@/assets/braai-platter.jpg.asset.json";
import socialImageAsset from "@/assets/khat-kooks-social.jpg.asset.json";

import gallery1293Asset from "@/assets/gallery-1293.jpg.asset.json";
import gallery1295Asset from "@/assets/gallery-1295.jpg.asset.json";
import kitchenSpreadAsset from "@/assets/kitchen-spread.jpg.asset.json";
import salmonPlatedAsset from "@/assets/salmon-plated.jpg.asset.json";
import waffleAsset from "@/assets/chicken-waffles.jpg.asset.json";
import sundayLunchAsset from "@/assets/sunday-lunch.jpg.asset.json";
import dishPap from "@/assets/dish-pap.jpg";
import dishBeef from "@/assets/dish-beef.jpg";
import dishGrill from "@/assets/dish-grill.jpg";
import dishSamp from "@/assets/dish-samp.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";
import galleryKitchen from "@/assets/gallery-kitchen.jpg";


const SITE_ORIGIN = "https://khatkooks.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Khat Kooks | Premium Catering & Modern Experimental Cuisine" },
      {
        name: "description",
        content:
          "Khat Kooks offers premium catering and modern experimental cuisine for weddings, corporate events and private functions. Request a personalised quote today.",
      },
      {
        property: "og:title",
        content: "Khat Kooks | Premium Catering & Modern Experimental Cuisine",
      },
      {
        property: "og:description",
        content:
          "Khat Kooks offers premium catering and modern experimental cuisine for weddings, corporate events and private functions. Request a personalised quote today.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_ORIGIN}/` },
      { property: "og:image", content: `${SITE_ORIGIN}${socialImageAsset.url}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE_ORIGIN}${socialImageAsset.url}` },
    ],
    links: [{ rel: "canonical", href: `${SITE_ORIGIN}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FoodEstablishment",
          name: "Khat Kooks",
          servesCuisine: "Modern Experimental",
          founder: { "@type": "Person", name: "Lisa Kombanie" },
          email: "info@khatkooks.food",
          areaServed: "Johannesburg, South Africa",
          sameAs: ["https://instagram.com/khatkooks", "https://instagram.com/lisa.khat"],
        }),
      },
    ],
  }),
  component: Home,
});

const services = [
  {
    icon: CalendarHeart,
    title: "Event Catering",
    copy: "Weddings, birthdays, celebrations, corporate functions and private events — catered with creativity and precision.",
  },
  {
    icon: Soup,
    title: "Meal Preparation",
    copy: "Bespoke meal plans and innovative menus prepared fresh, transforming everyday dining into culinary experiences.",
  },
  {
    icon: Building2,
    title: "Corporate Catering",
    copy: "Business lunches, office functions, boardroom catering and conferences with cutting-edge culinary artistry.",
  },
  {
    icon: UtensilsCrossed,
    title: "Contemporary Fusion",
    copy: "Bold flavor combinations, innovative techniques and seasonal menus that push culinary boundaries.",
  },
  {
    icon: ChefHat,
    title: "Private Chef Experiences",
    copy: "Luxury dining in your own home — curated menus for special occasions, plated and served with care.",
  },
];

const dishes = [
  { src: dishPap, title: "Pap & Chakalaka", note: "Heritage staple" },
  { src: dishBeef, title: "Slow Beef Stew", note: "Six-hour braise" },
  { src: dishGrill, title: "Grilled Meat Platter", note: "Open flame" },
  { src: dishSamp, title: "Samp & Beans", note: "Umngqusho" },
  { src: dishDessert, title: "Traditional Desserts", note: "Malva & custard" },
  { src: galleryKitchen, title: "Plated Meals", note: "Private dining" },
];

const gallery = [
  { src: gallery1293Asset.url, cat: "Poolside Buffets", tall: true },
  { src: "https://github.com/user-attachments/assets/0d65e638-cf91-4e47-845b-c8df55e47b1f", cat: "Culinary Art", tall: true },
  { src: "https://github.com/user-attachments/assets/6c980068-ab1d-474d-8b1e-68961c1bee75", cat: "Modern Plating", tall: false },
  { src: "https://github.com/user-attachments/assets/bb6c8149-d6d1-419a-9907-094afff70130", cat: "Experimental Cuisine", tall: true },
  { src: "https://github.com/user-attachments/assets/61afd760-16aa-4830-919e-1b185c7989aa", cat: "Fine Dining", tall: false },
  { src: "https://github.com/user-attachments/assets/a5a912bb-7576-490d-bba0-fbf8a0a32fb4", cat: "Contemporary Fusion", tall: true },
  { src: "https://github.com/user-attachments/assets/9f47dbc1-9bc7-4d86-b4e3-5e1ea196063f", cat: "Innovative Concepts", tall: false },
  { src: "https://github.com/user-attachments/assets/5ac9d2d1-bd79-40ea-8e29-75f94d3c635e", cat: "Artistic Presentation", tall: false },
  { src: gallery1295Asset.url, cat: "Avant-Garde Dishes", tall: true },
];
const testimonials = [
  {
    name: "Naledi M.",
    event: "Wedding — 180 guests",
    location: "Sandton, Johannesburg",
    quote:
      "Every single guest asked who catered. The food tasted like a family kitchen but was plated like a fine-dining restaurant.",
  },
  {
    name: "Thabo R.",
    event: "Corporate Conference",
    location: "Rosebank",
    quote:
      "Faultless service and timing. Khat Kooks handled 250 covers over two days without a single hiccup.",
  },
  {
    name: "Zanele K.",
    event: "Traditional Celebration",
    location: "Soweto",
    quote:
      "Lisa understood exactly what our family wanted. The mogodu and samp were exactly like home — only better.",
  },
];

const why = [
  { icon: Leaf, label: "Fresh Ingredients" },
  { icon: ScrollText, label: "Authentic Recipes" },
  { icon: ScrollText, label: "Innovative Techniques" },
  { icon: UtensilsCrossed, label: "Flexible Menus" },
  { icon: Wallet, label: "Affordable Luxury" },
  { icon: Truck, label: "Reliable Delivery" },
  { icon: Sparkles, label: "Attention to Detail" },
  { icon: HandHeart, label: "Passionate Cooking" },
];

const process = [
  { step: "01", title: "Submit Quote Request", copy: "Tell us about your event in a few minutes." },
  { step: "02", title: "Consultation", copy: "We call to understand your guests, taste and budget." },
  { step: "03", title: "Custom Menu", copy: "A menu designed around your occasion and dietary needs." },
  { step: "04", title: "Quotation", copy: "A clear, itemised quote with no hidden extras." },
  { step: "05", title: "Confirmation", copy: "Date secured, menu locked, logistics planned." },
  { step: "06", title: "Event Delivery", copy: "We arrive, set up and serve — you simply host." },
];

const faqs = [
  {
    q: "How far in advance should I book?",
    a: "For weddings and large functions we recommend 6–8 weeks. Smaller events and family meals can often be arranged within 7 days, subject to availability.",
  },
  {
    q: "Do you cater for dietary requirements?",
    a: "Yes. Vegetarian, vegan, gluten-free and allergy-conscious menus are all available — just tell us in your quote request.",
  },
  {
    q: "Do you travel?",
    a: "We cater across Johannesburg and greater Gauteng, and travel further for larger events. Travel is quoted transparently upfront.",
  },
  {
    q: "Is there a minimum guest count?",
    a: "Event catering starts from 20 guests. Private chef experiences and family meal preparation have no minimum.",
  },
  {
    q: "Can I customise the menu?",
    a: "Always. Every menu is built with you — bring a family recipe and we will cook it beautifully.",
  },
  {
    q: "Do you provide serving staff?",
    a: "Yes, professional waitrons, chafing equipment and full setup can be added to any quote.",
  },
];

function Home() {
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <video
          src="https://github.com/user-attachments/assets/fbcada86-3b23-49bc-860c-af311cf87405"
          poster={heroPosterAsset.url}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Khat Kooks catering in motion"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 hero-veil" />
        <div className="pointer-events-none absolute inset-x-0 bottom-1/3 mx-auto flex max-w-xs justify-between opacity-60">
          <span className="steam" style={{ animationDelay: "0s" }} />
          <span className="steam" style={{ animationDelay: "2.4s" }} />
          <span className="steam" style={{ animationDelay: "4.6s" }} />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32 lg:px-10 lg:pb-28">
          <Reveal>
            <p className="eyebrow text-gold">Khat Kooks · South Africa</p>
            <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.6rem,7vw,5.5rem)] font-medium leading-[1.03] text-background">
              Modern Experimental Cuisine, Crafted With Innovation.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-background/80 lg:text-lg">
              From intimate celebrations to corporate events, Khat Kooks creates
              unforgettable dining experiences inspired by innovation, artistry and bold flavors.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/quote"
                className="rounded-full gradient-warm px-7 py-4 text-sm font-semibold text-background shadow-lift transition-transform duration-300 hover:-translate-y-1"
              >
                Request a Quote
              </Link>
              <Link
                to="/"
                hash="gallery"
                className="rounded-full border border-background/40 px-7 py-4 text-sm font-semibold text-background backdrop-blur transition-colors duration-300 hover:bg-background/15"
              >
                View Gallery
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 px-5 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal className="order-2 lg:order-1">
            <p className="eyebrow">The Founder</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.6vw,3.5rem)] leading-[1.08]">
              Creating memorable cuisine experiences with vision and artistry.
            </h2>
            <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-muted-foreground lg:text-base">
              <p>
                I’m Lisa Khat, the creative behind Khat Kooks — a food and catering brand that was
                born during a season of uncertainty, when I turned to something I’ve always loved:
                cooking and creating.
              </p>
              <p>
                What started as a passion quickly became a space to experiment, share, and bring
                people together through food.
              </p>
              <p>
                Today, Khat Kooks is all about taking familiar flavours and giving them a personal
                twist, creating food that’s beautiful, memorable and made to be shared.
              </p>
              <p>
                Khat Kooks — where creativity meets comfort, one delicious plate at a time.
              </p>
            </div>
            <p className="mt-8 font-display text-2xl text-accent">Lisa Kombanie</p>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Founder &amp; Head Chef
            </p>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-3xl shadow-soft">
              <img
                src="https://github.com/user-attachments/assets/517e88d4-5e96-404a-abb6-f0ad8a6a475d"
                alt="Lisa Kombanie, founder and head chef of Khat Kooks"
                width={1024}
                height={1280}
                loading="lazy"
                className="img-zoom aspect-[4/5] size-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-24 bg-surface px-5 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">What We Do</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.6vw,3.5rem)] leading-[1.08]">
              Contemporary catering shaped around your vision.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal
                key={s.title}
                delay={i * 80}
                as="article"
                className="group flex flex-col rounded-3xl bg-card p-8 shadow-soft transition-transform duration-500 hover:-translate-y-1.5"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-accent transition-colors duration-500 group-hover:gradient-warm group-hover:text-background">
                  <s.icon className="size-5" />
                </span>
                <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.copy}
                </p>
                <Link
                  to="/quote"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all duration-300 group-hover:gap-3"
                >
                  Request Quote <span aria-hidden>→</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED DISHES */}
      {/* Featured Dishes section hidden as per requirements */}

      {/* GALLERY */}
      <section id="gallery" className="scroll-mt-24 bg-charcoal px-5 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-gold">Gallery</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.6vw,3.5rem)] leading-[1.08] text-background">
              Moments from our tables.
            </h2>
          </Reveal>

          <div className="mt-14 columns-2 gap-4 lg:columns-3 [&>*]:mb-4">
            {gallery.map((g, i) => (
              <Reveal key={`${g.cat}-${i}`} delay={(i % 3) * 90} className="break-inside-avoid">
                <button
                  type="button"
                  onClick={() => setLightbox({ src: g.src, title: g.cat })}
                  className="group relative block w-full overflow-hidden rounded-3xl"
                >
                  <img
                    src={g.src}
                    alt={`${g.cat} catering by Khat Kooks`}
                    width={1024}
                    height={g.tall ? 1280 : 1024}
                    loading="lazy"
                    className={`img-zoom w-full object-cover ${g.tall ? "aspect-[3/4]" : "aspect-square"}`}
                  />
                  <span className="absolute inset-0 bg-charcoal/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-background/85 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {g.cat}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="scroll-mt-24 px-5 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Testimonials</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.6vw,3.5rem)] leading-[1.08]">
              Clients who experienced our vision.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal
                key={t.name}
                delay={i * 90}
                as="article"
                className="rounded-3xl bg-card p-8 shadow-soft"
              >
                <div className="flex items-center gap-4">
                  <span className="flex size-12 items-center justify-center rounded-full bg-secondary font-display text-xl text-accent">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.event}</p>
                  </div>
                </div>
                <div className="mt-5 flex gap-1 text-gold" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 font-display text-lg leading-relaxed">“{t.quote}”</p>
                <p className="mt-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {t.location}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-surface px-5 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Why Khat Kooks</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.6vw,3.5rem)] leading-[1.08]">
              Innovation you can taste, service you can trust.
            </h2>
          </Reveal>

          <ul className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {why.map((w, i) => (
              <Reveal
                key={w.label}
                as="li"
                delay={i * 60}
                className="group rounded-3xl bg-card p-6 text-center shadow-soft transition-transform duration-500 hover:-translate-y-1.5"
              >
                <span className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-secondary text-accent transition-transform duration-500 group-hover:scale-110">
                  <w.icon className="size-5" />
                </span>
                <p className="mt-4 text-sm font-semibold">{w.label}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-5 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="eyebrow">The Process</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.6vw,3.5rem)] leading-[1.08]">
              From concept to culinary experience.
            </h2>
          </Reveal>

          <ol className="mt-14 relative border-l border-border pl-8">
            {process.map((p, i) => (
              <Reveal key={p.step} as="li" delay={i * 70} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[41px] flex size-6 items-center justify-center rounded-full gradient-warm text-[10px] font-bold text-background">
                  {i + 1}
                </span>
                <h3 className="font-display text-2xl">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="scroll-mt-24 bg-surface px-5 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="eyebrow">FAQs</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.6vw,3.5rem)] leading-[1.08]">
              Good questions, honest answers.
            </h2>
          </Reveal>

          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 50}>
                <details className="group rounded-3xl bg-card px-6 py-5 shadow-soft">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold">
                    {f.q}
                    <span className="text-accent transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-5xl rounded-4xl gradient-warm px-8 py-16 text-center shadow-lift lg:px-16 lg:py-24">
          <Reveal>
            <Flame className="mx-auto size-7 text-background" />
            <h2 className="mt-6 font-display text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.08] text-background">
              Let's create something extraordinary.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-background/85">
              Share your vision, guest count and preferences — we'll create a bespoke menu and
              quotation.
            </p>
            <Link
              to="/quote"
              className="mt-9 inline-block rounded-full bg-charcoal px-8 py-4 text-sm font-semibold text-background transition-transform duration-300 hover:-translate-y-1"
            >
              Request a Quote
            </Link>
          </Reveal>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/90 p-5 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 rounded-full bg-background/15 p-3 text-background"
          >
            <X className="size-5" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-h-[85vh] w-full max-w-3xl">
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="max-h-[75vh] w-full rounded-3xl object-contain"
            />
            <figcaption className="mt-4 text-center font-display text-xl text-background">
              {lightbox.title}
            </figcaption>
          </figure>
        </div>
      )}
    </SiteLayout>
  );
}
