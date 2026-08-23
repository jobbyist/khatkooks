export const SITE_ORIGIN = "https://khatkooks.lovable.app";
export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/__l5e/assets-v1/cf40089c-628c-4074-8a3e-11b0f6a1dca9/khat-kooks-social.jpg`;

type PageMetaOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

/** Builds the canonical/OG/Twitter tags every route needs, from a single title+description. */
export function buildPageMeta({ title, description, path, image = DEFAULT_OG_IMAGE }: PageMetaOptions) {
  const url = path === "/" ? SITE_ORIGIN : `${SITE_ORIGIN}${path}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
