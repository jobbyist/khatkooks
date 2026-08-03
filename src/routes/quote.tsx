import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Upload } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Request a Catering Quote | Khat Kooks" },
      {
        name: "description",
        content:
          "Request a personalised catering quotation from Khat Kooks for weddings, corporate functions, traditional celebrations and private dining in South Africa.",
      },
      { property: "og:title", content: "Request a Catering Quote | Khat Kooks" },
      {
        property: "og:description",
        content:
          "Tell us about your event and receive a custom menu and quotation from Khat Kooks.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: QuotePage,
});

const eventTypes = [
  "Wedding",
  "Birthday",
  "Traditional Celebration",
  "Funeral",
  "Corporate Function",
  "Private Dining",
  "Family Meal Plan",
  "Other",
];

const budgets = [
  "Under R5 000",
  "R5 000 – R15 000",
  "R15 000 – R40 000",
  "R40 000 – R100 000",
  "R100 000+",
];

const serviceOptions = [
  "Event Catering",
  "Meal Preparation",
  "Corporate Catering",
  "Traditional Cuisine",
  "Private Chef",
  "Serving Staff",
];

const fieldClass =
  "w-full rounded-2xl border border-input bg-card px-4 py-3.5 text-sm text-foreground outline-none transition-shadow duration-300 placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-ring";

function Label({ children, htmlFor }: { children: React.ReactNode; htmlFor: string }) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground"
    >
      {children}
    </label>
  );
}

function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    const required = ["name", "surname", "email", "phone", "eventType", "eventDate", "guests"];
    required.forEach((k) => {
      if (!String(data.get(k) ?? "").trim()) next[k] = "Required";
    });
    const email = String(data.get("email") ?? "");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email";
    if (!data.get("consent")) next.consent = "Please confirm";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <SiteLayout>
      <section className="px-5 pb-24 pt-32 lg:px-10 lg:pb-32 lg:pt-44">
        <div className="mx-auto max-w-3xl">
          {submitted ? (
            <Reveal className="rounded-4xl bg-card p-10 text-center shadow-soft lg:p-16">
              <span className="mx-auto flex size-20 items-center justify-center rounded-full bg-secondary">
                <svg viewBox="0 0 52 52" className="size-10 text-accent">
                  <path
                    className="check-draw"
                    d="M14 27l8 8 16-18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h1 className="mt-8 font-display text-4xl leading-tight">Thank you — request received.</h1>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                Lisa or a member of the Khat Kooks team will be in touch within one business day to
                discuss your menu and confirm your quotation.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Link
                  to="/"
                  className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground"
                >
                  Back home
                </Link>
                <Link
                  to="/contact"
                  className="rounded-full border border-border px-7 py-3.5 text-sm font-semibold"
                >
                  Contact details
                </Link>
              </div>
            </Reveal>
          ) : (
            <>
              <Reveal>
                <p className="eyebrow">Request a Quote</p>
                <h1 className="mt-4 font-display text-[clamp(2.2rem,5.6vw,4rem)] leading-[1.05]">
                  Tell us about your occasion.
                </h1>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground lg:text-base">
                  The more detail you share, the more precise your menu and quotation will be. It
                  takes about two minutes.
                </p>
              </Reveal>

              <Reveal delay={100}>
                <form
                  onSubmit={onSubmit}
                  noValidate
                  className="mt-12 space-y-6 rounded-4xl bg-card p-6 shadow-soft lg:p-10"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <input id="name" name="name" className={fieldClass} placeholder="Lisa" />
                      {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
                    </div>
                    <div>
                      <Label htmlFor="surname">Surname</Label>
                      <input
                        id="surname"
                        name="surname"
                        className={fieldClass}
                        placeholder="Khatshiwe"
                      />
                      {errors.surname && (
                        <p className="mt-1.5 text-xs text-destructive">{errors.surname}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className={fieldClass}
                        placeholder="you@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className={fieldClass}
                        placeholder="+27 82 000 0000"
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-xs text-destructive">{errors.phone}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="eventType">Event Type</Label>
                      <select id="eventType" name="eventType" defaultValue="" className={fieldClass}>
                        <option value="" disabled>
                          Select an option
                        </option>
                        {eventTypes.map((t) => (
                          <option key={t}>{t}</option>
                        ))}
                      </select>
                      {errors.eventType && (
                        <p className="mt-1.5 text-xs text-destructive">{errors.eventType}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="eventDate">Event Date</Label>
                      <input id="eventDate" name="eventDate" type="date" className={fieldClass} />
                      {errors.eventDate && (
                        <p className="mt-1.5 text-xs text-destructive">{errors.eventDate}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <input
                        id="location"
                        name="location"
                        className={fieldClass}
                        placeholder="Suburb, city"
                      />
                    </div>
                    <div>
                      <Label htmlFor="guests">Number of Guests</Label>
                      <input
                        id="guests"
                        name="guests"
                        type="number"
                        min={1}
                        className={fieldClass}
                        placeholder="80"
                      />
                      {errors.guests && (
                        <p className="mt-1.5 text-xs text-destructive">{errors.guests}</p>
                      )}
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <select id="budget" name="budget" defaultValue="" className={fieldClass}>
                        <option value="" disabled>
                          Select a range
                        </option>
                        {budgets.map((b) => (
                          <option key={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="cuisine">Cuisine Preferences</Label>
                      <input
                        id="cuisine"
                        name="cuisine"
                        className={fieldClass}
                        placeholder="Traditional, grill, buffet…"
                      />
                    </div>
                    <div>
                      <Label htmlFor="dietary">Dietary Requirements</Label>
                      <input
                        id="dietary"
                        name="dietary"
                        className={fieldClass}
                        placeholder="Halaal, vegan, allergies…"
                      />
                    </div>
                  </div>

                  <fieldset>
                    <legend className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Services Required
                    </legend>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((s) => (
                        <label
                          key={s}
                          className="cursor-pointer rounded-full border border-border bg-background px-4 py-2.5 text-xs font-medium transition-colors duration-300 has-checked:border-accent has-checked:bg-accent has-checked:text-accent-foreground"
                        >
                          <input type="checkbox" name="services" value={s} className="sr-only" />
                          {s}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className={fieldClass}
                      placeholder="Tell us about the occasion, venue and anything special you'd love on the menu."
                    />
                  </div>

                  <div>
                    <Label htmlFor="file">Attachment (optional)</Label>
                    <label
                      htmlFor="file"
                      className="flex cursor-pointer items-center gap-3 rounded-2xl border border-dashed border-input bg-background px-4 py-5 text-sm text-muted-foreground transition-colors hover:border-accent"
                    >
                      <Upload className="size-4 text-accent" />
                      Upload a menu, moodboard or event brief
                      <input id="file" name="file" type="file" className="sr-only" />
                    </label>
                  </div>

                  <div>
                    <Label htmlFor="contactMethod">Preferred Contact Method</Label>
                    <select
                      id="contactMethod"
                      name="contactMethod"
                      defaultValue="Email"
                      className={fieldClass}
                    >
                      <option>Email</option>
                      <option>Phone call</option>
                      <option>WhatsApp (coming soon)</option>
                    </select>
                  </div>

                  <label className="flex items-start gap-3 text-sm text-muted-foreground">
                    <input
                      type="checkbox"
                      name="consent"
                      className="mt-0.5 size-4 accent-[var(--terracotta)]"
                    />
                    <span>I agree to be contacted regarding my enquiry.</span>
                  </label>
                  {errors.consent && <p className="text-xs text-destructive">{errors.consent}</p>}

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-full gradient-warm px-8 py-5 text-sm font-semibold text-background shadow-lift transition-transform duration-300 hover:-translate-y-1"
                  >
                    <Check className="size-4" /> Request My Quote
                  </button>
                </form>
              </Reveal>
            </>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
