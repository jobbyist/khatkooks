import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Instagram, MapPin, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Khat Kooks | Catering Enquiries" },
      {
        name: "description",
        content:
          "Get in touch with Khat Kooks for catering enquiries — email info@khatkooks.food or follow @khatkooks for menus, events and behind-the-scenes kitchen moments.",
      },
      { property: "og:title", content: "Contact Khat Kooks | Catering Enquiries" },
      {
        property: "og:description",
        content: "Reach Lisa Kombanie and the Khat Kooks team for catering enquiries.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContactPage,
});

const channels = [
  {
    icon: Mail,
    label: "Business email",
    value: "info@khatkooks.food",
    href: "mailto:info@khatkooks.food",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@khatkooks",
    href: "https://instagram.com/khatkooks",
  },
  {
    icon: Instagram,
    label: "Lisa's Instagram",
    value: "@lisa.khat",
    href: "https://instagram.com/lisa.khat",
  },
  {
    icon: MessageCircle,
    label: "TikTok",
    value: "@lisa.khat",
    href: "https://tiktok.com/@lisa.khat",
  },
];

function ContactPage() {
  return (
    <SiteLayout>
      <section className="px-5 pb-24 pt-32 lg:px-10 lg:pb-32 lg:pt-44">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Contact</p>
            <h1 className="mt-4 font-display text-[clamp(2.2rem,5.6vw,4rem)] leading-[1.05]">
              We'd love to hear about your table.
            </h1>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground lg:text-base">
              For quotations, collaborations or a simple question about a menu — reach us however
              suits you best.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="grid gap-4 sm:grid-cols-2">
              {channels.map((c, i) => (
                <Reveal key={c.label} delay={i * 70}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group block h-full rounded-3xl bg-card p-7 shadow-soft transition-transform duration-500 hover:-translate-y-1.5"
                  >
                    <span className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-accent transition-colors duration-500 group-hover:gradient-warm group-hover:text-background">
                      <c.icon className="size-5" />
                    </span>
                    <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      {c.label}
                    </p>
                    <p className="mt-1 font-display text-xl">{c.value}</p>
                  </a>
                </Reveal>
              ))}
              <Reveal delay={280} className="sm:col-span-2">
                <a
                  href="https://wa.me/+27659730551"
                  target="_blank"
                  rel="noreferrer"
                  className="group block h-full rounded-3xl bg-card p-7 shadow-soft transition-transform duration-500 hover:-translate-y-1.5"
                >
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-accent transition-colors duration-500 group-hover:gradient-warm group-hover:text-background">
                    <MessageCircle className="size-5" />
                  </span>
                  <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    WhatsApp
                  </p>
                  <p className="mt-1 font-display text-xl">065 973 0551</p>
                </a>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <div className="flex h-full min-h-72 flex-col justify-end overflow-hidden rounded-4xl bg-surface p-8 shadow-soft">
                <MapPin className="size-6 text-accent" />
                <p className="mt-4 font-display text-2xl">Johannesburg, South Africa</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Serving Gauteng and beyond. Our studio kitchen location will be pinned here soon.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="mt-14 rounded-4xl gradient-warm px-8 py-14 text-center shadow-lift lg:px-16">
              <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-tight text-background">
                Ready for a quotation?
              </h2>
              <Link
                to="/quote"
                className="mt-7 inline-block rounded-full bg-charcoal px-8 py-4 text-sm font-semibold text-background transition-transform duration-300 hover:-translate-y-1"
              >
                Request a Quote
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
