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
import poolsideAsset from "@/assets/poolside-buffet.jpg.asset.json";
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


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Khat Kooks | Premium Catering & Authentic African Cuisine" },
      {
        name: "description",
        content:
          "Khat Kooks offers premium catering and authentic South African cuisine for weddings, corporate events and private functions. Request a personalised quote today.",
      },
      {
        property: "og:title",
        content: "Khat Kooks | Premium Catering & Authentic African Cuisine",
      },
      {
        property: "og:description",
        content:
          "Khat Kooks offers premium catering and authentic South African cuisine for weddings, corporate events and private functions. Request a personalised quote today.",
      },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FoodEstablishment",
          name: "Khat Kooks",
          servesCuisine: "South African",
          founder: { "@type": "Person", name: "Lisa Khatshiwe" },
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
    copy: "Weddings, birthdays, traditional celebrations, funerals, corporate functions and private events — catered with warmth and precision.",
  },
  {
    icon: Soup,
    title: "Meal Preparation",
    copy: "Family meals, weekly meal plans and custom menus prepared fresh, so every table feels like home.",
  },
  {
    icon: Building2,
    title: "Corporate Catering",
    copy: "Business lunches, office functions, boardroom catering and conferences delivered on time, every time.",
  },
  {
    icon: UtensilsCrossed,
    title: "Traditional Cuisine",
    copy: "Authentic South African dishes, regional specialities and seasonal menus rooted in heritage.",
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
  { src: poolsideAsset.url, cat: "Poolside Buffets", tall: true },
  { src: kitchenSpreadAsset.url, cat: "Kitchen Moments", tall: false },
  { src: braaiAsset.url, cat: "Grill & Braai", tall: true },
  { src: sundayLunchAsset.url, cat: "Sunday Lunch", tall: false },
  { src: salmonPlatedAsset.url, cat: "Plated Meals", tall: true },
  { src: salmonCitrusAsset.url, cat: "Starters", tall: false },
  { src: waffleAsset.url, cat: "Food Styling", tall: false },
  { src: hotdogsAsset.url, cat: "Street Food", tall: true },
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
  { icon: ShieldCheck, label: "Professional Service" },
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
    a: "Yes. Vegetarian, vegan, halaal-friendly, gluten-free and allergy-conscious menus are all available — just tell us in your quote request.",
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
          src={heroVideoAsset.url}
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
              Authentic African Cuisine, Crafted With Passion.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-background/80 lg:text-lg">
              From intimate family celebrations to corporate events, Khat Kooks creates
              unforgettable dining experiences inspired by home, heritage and flavour.
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
              Lisa Khatshiwe cooks the way she was raised — generously.
            </h2>
            <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-muted-foreground lg:text-base">
              <p>
                Khat Kooks began in a family kitchen, where Sunday pots simmered all afternoon and
                nobody left hungry. Lisa grew up learning that food is how you say welcome, thank
                you, and I love you — without needing the words.
              </p>
              <p>
                Today she brings that same warmth to weddings, boardrooms and private homes across
                South Africa. Every menu is handcrafted, every ingredient chosen personally, and
                every recipe carries the heritage it came from — refined, never diluted.
              </p>
              <p>
                Her promise is simple: food that tastes like home, presented like an occasion.
              </p>
            </div>
            <p className="mt-8 font-display text-2xl text-accent">Lisa Khatshiwe</p>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Founder & Head Chef
            </p>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-3xl shadow-soft">
              <img
                src={founderAsset.url}
                alt="Lisa Khatshiwe, founder and head chef of Khat Kooks"
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
              Catering shaped around your occasion.
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
      <section className="px-5 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Featured Dishes</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.6vw,3.5rem)] leading-[1.08]">
              Heritage plates, made with intent.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dishes.map((d, i) => (
              <Reveal key={d.title} delay={i * 70}>
                <button
                  type="button"
                  onClick={() => setLightbox({ src: d.src, title: d.title })}
                  className="group relative block w-full overflow-hidden rounded-3xl text-left shadow-soft"
                >
                  <img
                    src={d.src}
                    alt={d.title}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="img-zoom aspect-[4/5] size-full object-cover"
                  />
                  <span className="absolute inset-0 hero-veil opacity-80" />
                  <span className="absolute inset-x-6 bottom-6">
                    <span className="block text-[11px] uppercase tracking-[0.28em] text-gold">
                      {d.note}
                    </span>
                    <span className="mt-1 block font-display text-2xl text-background">
                      {d.title}
                    </span>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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
              Hosts who trusted us with the day.
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
              Luxury you can taste, service you can rely on.
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
              From enquiry to the last plate served.
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
              Let's plan something unforgettable.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-background/85">
              Share your date, guest count and taste — we'll come back with a personalised menu and
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
