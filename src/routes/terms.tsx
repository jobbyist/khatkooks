import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Khat Kooks Catering" },
      {
        name: "description",
        content:
          "The terms that apply to quotations, bookings, payments, cancellations and catering services provided by Khat Kooks.",
      },
      { property: "og:title", content: "Terms of Service | Khat Kooks Catering" },
      {
        property: "og:description",
        content:
          "Terms covering quotations, bookings, payments and cancellations for Khat Kooks catering.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TermsPage,
});

const sections = [
  {
    h: "About These Terms",
    p: "These terms apply to your use of this website and to catering services provided by Khat Kooks. By submitting a quote request or confirming a booking you accept these terms.",
  },
  {
    h: "Quotations",
    p: "A quote request is an enquiry, not a booking. Quotations are prepared for your specific event and remain valid for 14 days unless stated otherwise. Prices may change if guest numbers, menu, date, venue or logistics change.",
  },
  {
    h: "Bookings & Deposits",
    p: "A date is only secured once the quotation is accepted in writing and the agreed deposit is received. The balance is payable in line with the schedule set out in your quotation, unless otherwise agreed.",
  },
  {
    h: "Menus & Dietary Requirements",
    p: "Menus are finalised in consultation with you. Please disclose all allergies and dietary requirements in writing before your event. While we take great care, our kitchen handles common allergens and we cannot guarantee an allergen-free environment.",
  },
  {
    h: "Changes & Final Numbers",
    p: "Final guest numbers and menu changes must be confirmed at least 7 days before the event. Increases after that point are accommodated where possible and may attract additional charges.",
  },
  {
    h: "Cancellations",
    p: "Cancellations must be made in writing. Deposits cover reserved capacity and ingredient commitments and are generally non-refundable. Cancellations close to the event date may incur further costs already committed on your behalf.",
  },
  {
    h: "Access, Venue & Equipment",
    p: "You are responsible for ensuring safe and timely access to the venue, together with reasonable power, water and working space. Hired equipment remains our property and must be returned in the condition supplied; damage or loss may be charged.",
  },
  {
    h: "Liability",
    p: "We are not liable for delays or failures caused by events beyond our reasonable control, including load shedding, extreme weather, road closures or supplier failure. To the extent permitted by law, our liability is limited to the value of the services provided.",
  },
  {
    h: "Website Use",
    p: "Content, photography and branding on this site belong to Khat Kooks and may not be reproduced without permission. Automated, abusive or spam submissions to our forms are not permitted.",
  },
  {
    h: "Governing Law & Contact",
    p: "These terms are governed by the laws of the Republic of South Africa. Questions can be sent to info@khatkooks.food.",
  },
];

function TermsPage() {
  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-5 pb-24 pt-32 lg:px-10 lg:pb-36 lg:pt-44">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.08]">
          Terms of Service
        </h1>
        <p className="mt-5 text-sm text-muted-foreground">Last updated 23 August 2026</p>
        <div className="mt-10 space-y-9">
          {sections.map((s) => (
            <section key={s.h}>
              <h2 className="font-display text-2xl">{s.h}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground lg:text-base">
                {s.p}
              </p>
            </section>
          ))}
        </div>
      </article>
    </SiteLayout>
  );
}
