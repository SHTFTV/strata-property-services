import { Helmet } from "react-helmet-async";
import { useLocation } from "wouter";

const SITE_DOMAIN = "https://stratapropertyservices.com";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  ogType?: string;
}

export function SEO({ title, description, path, ogImage, ogType }: SEOProps) {
  const [location] = useLocation();
  const fullTitle = `${title} | Strata Property Services`;
  const canonicalPath = path || location;
  const canonicalUrl = `${SITE_DOMAIN}${canonicalPath === "/" ? "" : canonicalPath}`;
  const imageUrl = ogImage || `${SITE_DOMAIN}/opengraph.jpg`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType || "website"} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Strata Property Services" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Strata Property Services — Vancouver's Complete Property Maintenance Partner Since 1989" />
      <meta property="og:locale" content="en_CA" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}

export { SITE_DOMAIN };
