import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Khat Kooks Catering" },
      {
        name: "description",
        content:
          "How Khat Kooks collects, uses and protects the personal information you share when requesting a catering quote or contacting us.",
      },
      { property: "og:title", content: "Privacy Policy | Khat Kooks Catering" },
      {
        property: "og:description",
        content:
          "How Khat Kooks collects, uses and protects your personal information.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    h: "Information We Collect",
    p: "When you submit a quote request or contact form we collect the details you provide: your name, email address, phone number, event date, location, guest count, budget range and any dietary or menu notes. We do not collect payment card details through this website.",
  },
  {
    h: "How We Use Your Information",
    p: "Your information is used solely to respond to your enquiry, prepare a quotation, plan and deliver your event, and keep you updated about your booking. We may retain enquiry records for our own business administration.",
  },
  {
    h: "Sharing",
    p: "We do not sell or rent your information. Form submissions are processed by our form delivery provider so that enquiries reach our inbox. We may share limited details with trusted suppliers (for example venue or staffing partners) strictly where needed to deliver your event.",
  },
  {
    h: "Data Retention",
    p: "Enquiry and event records are kept only as long as necessary for our business and legal obligations, after which they are deleted or anonymised.",
  },
  {
    h: "Your Rights",
    p: "Under South Africa's Protection of Personal Information Act (POPIA) you may request access to, correction of, or deletion of your personal information. Email info@khatkooks.food and we will respond as soon as reasonably possible.",
  },
  {
    h: "Cookies & Analytics",
    p: "This website uses only the minimal storage needed for the site to function, including a local record used to limit repeated form submissions. We do not use advertising trackers.",
  },
  {
    h: "Security",
    p: "We apply reasonable technical and organisational measures to protect your information, including anti-spam protections on our forms. No online transmission can be guaranteed to be perfectly secure.",
  },
  {
    h: "Contact",
    p: "Questions about this policy can be sent to info@khatkooks.food.",
  },
];

function PrivacyPage() {
  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-5 pb-24 pt-32 lg:px-10 lg:pb-36 lg:pt-44">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.08]">
          Privacy Policy
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
