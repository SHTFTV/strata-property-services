import { Helmet } from "react-helmet-async";
import { useLocation } from "wouter";

const SITE_DOMAIN = "https://stratapropertyservices.com";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

export function SEO({ title, description, path }: SEOProps) {
  const [location] = useLocation();
  const fullTitle = `${title} | Strata Property Services`;
  const canonicalPath = path || location;
  const canonicalUrl = `${SITE_DOMAIN}${canonicalPath === "/" ? "" : canonicalPath}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Strata Property Services" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}

export { SITE_DOMAIN };
