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
import { SITE_ORIGIN, DEFAULT_OG_IMAGE, buildPageMeta } from "@/lib/seo";

import heroVideoNew from "@/assets/hero-video-new.mp4";
import heroPosterAsset from "@/assets/hero-poster.jpg.asset.json";
import hotdogsAsset from "@/assets/gourmet-hotdogs.jpg.asset.json";
import salmonCitrusAsset from "@/assets/salmon-citrus.jpg.asset.json";
import braaiAsset from "@/assets/braai-platter.jpg.asset.json";

import galleryNew01 from "@/assets/gallery-new-01.jpg";
import galleryNew02 from "@/assets/gallery-new-02.jpg";
import galleryNew03 from "@/assets/gallery-new-03.jpg";
import galleryNew04 from "@/assets/gallery-new-04.jpg";
import galleryNew05 from "@/assets/gallery-new-05.jpg";
import galleryNew06 from "@/assets/gallery-new-06.jpg";
import galleryNew07 from "@/assets/gallery-new-07.jpg";
import galleryNew08 from "@/assets/gallery-new-08.jpg";
import galleryNew09 from "@/assets/gallery-new-09.jpg";
import galleryNew10 from "@/assets/gallery-new-10.jpg";

const PAGE_TITLE = "Khat Kooks | Premium Catering & Modern Experimental Cuisine";
const PAGE_DESCRIPTION =
  "Khat Kooks offers premium catering and modern experimental cuisine for weddings, corporate events and private functions. Request a personalised quote today.";

const faqs = [
  {
    q: "How far in advance should I book?",
    a: "For weddings and large functions we recommend 6–8 weeks. Smaller events and family meals can often be arranged within 7 days, subject to availability.",
  },
  {
    q: "Do you accommodate dietary requirements?",
    a: "Yes — vegetarian, vegan, gluten-free and other needs are handled with care. Please note them on your quote request.",
  },
  {
    q: "Is delivery and setup included?",
    a: "Delivery and professional setup are included within Gauteng. Outside the province we can arrange logistics at an additional cost.",
  },
  {
    q: "Can I taste the menu beforehand?",
    a: "Tasting sessions are available for larger events. Details are shared once we begin menu planning.",
  },
  {
    q: "What is the minimum order?",
    a: "We cater from 10 guests upward. For smaller gatherings please get in touch — we often find a solution.",
  },
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: "Khat Kooks",
  description: PAGE_DESCRIPTION,
  url: SITE_ORIGIN,
  image: DEFAULT_OG_IMAGE,
  email: "info@khatkooks.food",
  telephone: "+27 659 730 551",
  founder: { "@type": "Person", name: "Lisa Kombanie" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Johannesburg",
    addressRegion: "Gauteng",
    addressCountry: "ZA",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Gauteng, South Africa",
  },
  servesCuisine: "South African, Modern Experimental",
  priceRange: "$$",
  sameAs: [
    "https://instagram.com/khatkooks",
    "https://instagram.com/lisa.khat",
    "https://tiktok.com/@lisa.khat",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    ...buildPageMeta({ title: PAGE_TITLE, description: PAGE_DESCRIPTION, path: "/" }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: CalendarHeart,
    title: "Weddings",
    copy: "From intimate gatherings to grand celebrations — menus that tell your story.",
  },
  {
    icon: Building2,
    title: "Corporate Events",
    copy: "Boardroom lunches, conferences and staff functions executed with precision.",
  },
  {
    icon: UtensilsCrossed,
    title: "Private Dining",
    copy: "Home dinners, birthdays and family milestones cooked and plated for you.",
  },
  {
    icon: Soup,
    title: "Traditional & Modern",
    copy: "Heritage dishes reimagined with contemporary plating and technique.",
  },
];

const gallery = [
  { src: galleryNew01, cat: "Signature Platters", tall: true },
  { src: galleryNew02, cat: "Freshly Prepared", tall: true },
  { src: galleryNew03, cat: "Chef's Selection", tall: true },
  { src: galleryNew04, cat: "Beautifully Plated", tall: true },
  { src: galleryNew05, cat: "Crafted With Care", tall: true },
  { src: galleryNew06, cat: "Seasonal Favourites", tall: true },
  { src: galleryNew07, cat: "Elegant Presentation", tall: true },
  { src: galleryNew08, cat: "Made To Share", tall: true },
  { src: galleryNew09, cat: "Event Spreads", tall: false },
  { src: galleryNew10, cat: "Culinary Excellence", tall: false },
];
const testimonials = [
  {
    name: "Balepi M.",
    event: "Birthday Celebration",
    quote:
      '"Everything was so good!" The food was honestly amazing and everyone kept coming back for seconds. Everything looked beautiful too. We were so happy with how everything turned out!',
  },
  {
    name: "Tari N.",
    event: "Corporate Client",
    quote:
      "Such a pleasant experience. Khat Kooks really understood what we wanted and everything was ready for collection in time. The food was a hit and the service was great. We'll definitely be using them again!",
  },
  {
    name: "Lerato M.",
    event: "Birthday Celebration",
    quote:
      "Would definitely use Khat Kooks again. The food was delicious and there was so much attention to detail. It made hosting so much easier knowing I didn't have to worry about the food. Everyone loved it!",
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
  {
    step: "02",
    title: "Consultation",
    copy: "We call to understand your guests, taste and budget.",
  },
  {
    step: "03",
    title: "Custom Menu",
    copy: "A menu designed around your occasion and dietary needs.",
  },
  { step: "04", title: "Quotation", copy: "A clear, itemised quote with no hidden extras." },
  { step: "05", title: "Confirmation", copy: "Date secured, menu locked, logistics planned." },
  { step: "06", title: "Event Delivery", copy: "We arrive, set up and serve — you simply host." },
];

function Index() {
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroPosterAsset.url}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={heroVideoNew} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
        <div className="relative z-10 flex min-h-[92vh] flex-col justify-end px-5 pb-16 pt-32 lg:px-10 lg:pb-24">
          <Reveal>
            <p className="eyebrow text-background/80">Premium Catering Services</p>
            <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.6rem,7vw,5.2rem)] leading-[1.02] text-background">
              Food that feels like home,
              <br />
              plated like a dream.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-background/85">
              Modern experimental cuisine and heartfelt hospitality for weddings, corporate events
              and private celebrations across Gauteng.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/quote"
                className="rounded-full bg-accent px-8 py-4 text-sm font-semibold text-background transition-transform duration-300 hover:-translate-y-1"
              >
                Request a Quote
              </Link>
              <a
                href="#gallery"
                className="rounded-full border border-background/40 bg-background/10 px-8 py-4 text-sm font-semibold text-background backdrop-blur-sm transition-colors hover:bg-background/20"
              >
                See Our Work
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-24 px-5 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">What We Offer</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.6vw,3.5rem)] leading-[1.08]">
              Catering for every occasion that matters.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80} className="rounded-3xl bg-card p-8 shadow-soft">
                <s.icon className="size-8 text-accent" />
                <h3 className="mt-5 font-display text-xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / FOUNDER */}
      <section className="bg-surface px-5 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <img
              src="https://github.com/user-attachments/assets/d457458e-3eff-4bb1-a082-fa88240dc233"
              alt="Lisa Kombanie, founder of Khat Kooks"
              className="aspect-[4/5] w-full rounded-4xl object-cover shadow-lift"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.6vw,3.5rem)] leading-[1.08]">
              Born from a love of feeding people well.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              I'm Lisa Khat, the creative behind Khat Kooks — a food and catering brand that was
              born during a season of uncertainty, when I turned to something I've always loved:
              cooking and creating.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              What started as a passion quickly became a space to experiment, share, and bring
              people together through food.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Today, Khat Kooks is all about taking familiar flavours and giving them a personal
              twist, creating food that's beautiful, memorable and made to be shared.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Khat Kooks — where creativity meets comfort, one delicious plate at a time.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex size-14 items-center justify-center rounded-full bg-secondary">
                <ChefHat className="size-6 text-accent" />
              </div>
              <div>
                <p className="font-semibold">Lisa Kombanie</p>
                <p className="text-sm text-muted-foreground">Founder & Head Chef</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="scroll-mt-24 px-5 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Gallery</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.6vw,3.5rem)] leading-[1.08]">
              A taste of what we create.
            </h2>
          </Reveal>
          <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {gallery.map((g, i) => (
              <Reveal key={i} delay={i * 40} className="mb-4 break-inside-avoid">
                <button
                  type="button"
                  onClick={() => setLightbox({ src: g.src, title: g.cat })}
                  className="group relative block w-full overflow-hidden rounded-3xl"
                >
                  <img
                    src={g.src}
                    alt={g.cat}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${g.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
                  />
                  <span className="absolute inset-0 bg-charcoal/0 transition-colors group-hover:bg-charcoal/20" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur-sm">
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
                <p className="mt-4 font-display text-lg leading-relaxed">{t.quote}</p>
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
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((w, i) => (
              <Reveal
                key={w.label}
                delay={i * 50}
                className="flex items-center gap-4 rounded-2xl bg-card p-5 shadow-soft"
              >
                <w.icon className="size-6 shrink-0 text-accent" />
                <span className="font-medium">{w.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-5 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">How It Works</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.6vw,3.5rem)] leading-[1.08]">
              From enquiry to the table — a clear path.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((p, i) => (
              <Reveal
                key={p.step}
                delay={i * 70}
                className="rounded-3xl border border-border/60 bg-card p-8"
              >
                <span className="font-display text-3xl text-accent">{p.step}</span>
                <h3 className="mt-4 font-display text-xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface px-5 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-3xl">
          <Reveal className="text-center">
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.6vw,3.5rem)] leading-[1.08]">
              Common questions answered.
            </h2>
          </Reveal>
          <div className="mt-14 space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 40}>
                <details className="group rounded-2xl bg-card p-6 shadow-soft">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
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
