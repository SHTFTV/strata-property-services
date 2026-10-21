import PlowWowContactCard from "@/components/PlowWowContactCard";
import PSIContactCard from "@/components/PSIContactCard";
import { useParams, Link } from "wouter";
import { getBlogPostBySlug, blogPosts, getBlogPostsByTrade } from "@/data/blogPosts";
import { trades } from "@/data/trades";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { contacts } from "@/data/contacts";
import { ArrowLeft, Calendar, Clock, Tag, Phone, ArrowRight, BookOpen, ChevronRight, Home } from "lucide-react";

export default function BlogPostPage() {
  const params = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(params.slug || "");

  if (!post) {
    return (
      <div className="min-h-screen bg-background font-sans">
        <Navbar />
        <div className="max-w-4xl mx-auto py-24 px-6 text-center">
          <h1 className="text-4xl font-black mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">We couldn't find that blog post.</p>
          <Link href="/blog" className="bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-accent transition">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const isSnowPost = post.tradeSlugs.includes("snow-removal") || /snow/i.test(post.category);
  const isPlowWow = post.slug.endsWith("-budget-2026-2027") || post.slug === "fairview-slopes-strata-snow-removal-access-planning" || post.slug === "west-side-vancouver-strata-snow-removal-kitsilano-checklist";
  const isBeeWarm = post.slug === "strata-hot-water-safety-robert-beewarm-guide";
  const isPSI = post.slug === "vancouver-strata-spray-insulation-monoglass-repairs-psi";
  const relatedTrades = trades.filter(t => post.tradeSlugs.includes(t.slug));
  const relatedPosts = post.tradeSlugs
    .flatMap(slug => getBlogPostsByTrade(slug))
    .filter(p => p.slug !== post.slug)
    .filter((p, i, arr) => arr.findIndex(x => x.slug === p.slug) === i)
    .slice(0, 3);

  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.metaDescription,
      "image": (post.gallery?.length ? post.gallery.map(photo => `https://www.stratapropertyservices.com/${photo.src}`) : [`https://www.stratapropertyservices.com/${post.image}`]),
      "datePublished": post.date,
      "dateModified": post.date,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://www.stratapropertyservices.com/blog/${post.slug}`,
      },
      "author": {
        "@type": "Organization",
        "name": "Strata Property Services",
        "url": "https://www.stratapropertyservices.com",
      },
      "publisher": {
        "@type": "Organization",
        "name": "Strata Property Services",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.stratapropertyservices.com/favicon.svg",
        },
      },
      "wordCount": post.content.reduce((sum, p) => sum + p.split(/\s+/).length, 0),
      "keywords": post.tradeSlugs.map(s => s.replace(/-/g, " ")).join(", "),
      "articleSection": post.category,
      "inLanguage": "en-CA",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.stratapropertyservices.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.stratapropertyservices.com/blog" },
        { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://www.stratapropertyservices.com/blog/${post.slug}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Strata Property Services",
      "url": "https://www.stratapropertyservices.com",
      "telephone": "+16047611518",
      "email": "info@stratapropertyservices.com",
      "foundingDate": "1989",
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 49.2827, "longitude": -123.1207 },
        "geoRadius": "80000",
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "19906 32 Ave",
        "addressLocality": "Langley",
        "addressRegion": "BC",
        "postalCode": "V3A 4T1",
        "addressCountry": "CA",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30 selection:text-primary-foreground">
      <SEO title={post.title} description={post.metaDescription} ogType="article" ogImage={`https://www.stratapropertyservices.com/${post.image}`} ogImageAlt={post.imageAlt || post.gallery?.find(photo => photo.src === post.image)?.alt || post.title} />
      {schemaMarkup.filter(schema => !(isPSI || isPlowWow) || schema["@type"] !== "Organization").map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      {isPlowWow ? <SnowHeader/> : isPSI ? <PSIHeader/> : <Navbar />}

      <header className="relative bg-secondary text-white py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={`${import.meta.env.BASE_URL}${post.image}`} alt={post.title} className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-primary transition flex items-center gap-1"><Home className="w-3.5 h-3.5" /> Home</Link></li>
              <li><ChevronRight className="w-3.5 h-3.5" /></li>
              <li><Link href="/blog" className="hover:text-primary transition">Blog</Link></li>
              <li><ChevronRight className="w-3.5 h-3.5" /></li>
              <li className="text-slate-300 truncate max-w-[200px] md:max-w-[400px]">{post.title}</li>
            </ol>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <Tag className="w-4 h-4 text-primary" />
            <span className="text-primary font-bold text-sm uppercase tracking-wider">{post.category}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6">{post.title}</h1>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(`${post.date}T12:00:00`).toLocaleDateString("en-CA", { month: "long", day: "numeric", year: "numeric" })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </header>

      <main className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2 prose prose-slate prose-lg max-w-none">
              <figure className="rounded-2xl overflow-hidden mb-8 not-prose">
                <img src={`${import.meta.env.BASE_URL}${post.image}`} alt={post.imageAlt || post.title} className={post.imageCaption ? "w-full h-auto" : "w-full h-64 md:h-80 object-cover"} />
                {post.imageCaption && <figcaption className="p-4 text-sm text-muted-foreground">{post.imageCaption}</figcaption>}
              </figure>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed mb-8 not-prose">{post.excerpt}</p>
              {post.content.map((paragraph, i) => <div key={i}>{paragraph.startsWith("## ") ? <h2 className="text-2xl font-bold mt-8 mb-4">{paragraph.slice(3)}</h2> : <p className="text-muted-foreground leading-relaxed mb-6 not-prose">{paragraph}</p>}{post.inlineVisuals?.filter(photo => photo.afterParagraph === i).map(photo => <figure key={photo.src} className="not-prose my-10 overflow-hidden rounded-2xl border border-slate-200"><img src={`${import.meta.env.BASE_URL}${photo.src}`} alt={photo.alt} width={1024} height={576} loading="lazy" className="w-full h-auto"/><figcaption className="p-4 text-sm text-muted-foreground">{photo.caption}</figcaption></figure>)}</div>)}
              {post.gallery && post.gallery.length > 0 && (
                <section className="not-prose mt-10" aria-label={`${post.title} project photographs`}>
                  <h2 className="text-2xl font-black mb-5">Project gallery</h2>
                  <div className="grid sm:grid-cols-2 gap-5">
                    {post.gallery.map((photo, i) => (
                      <figure key={photo.src} className={`${i === 0 || i === post.gallery!.length - 1 ? "sm:col-span-2" : ""} overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm`}>
                        <a href={`${import.meta.env.BASE_URL}${photo.src}`}>
                          <img src={`${import.meta.env.BASE_URL}${photo.src}`} alt={photo.alt} loading={i < 2 ? "eager" : "lazy"} className="w-full aspect-[4/3] object-cover" />
                        </a>
                        <figcaption className="p-4 text-sm text-muted-foreground">{photo.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                </section>
              )}
              {post.relatedProjectLinks && post.relatedProjectLinks.length > 0 && (
                <aside className="not-prose mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6">
                  <h2 className="text-xl font-black mb-3">Related resources</h2>
                  <div className="flex flex-col gap-3">
                    {post.relatedProjectLinks.map(link => (
                      <a key={link.href} href={link.href} className="font-bold text-primary hover:text-accent inline-flex items-center gap-2">{link.label}<ArrowRight className="w-4 h-4" /></a>
                    ))}
                  </div>
                </aside>
              )}
            </article>

            <aside className="space-y-6">
              <div className="sticky top-24 space-y-6">
                {!isSnowPost && (<div className="bg-secondary text-white p-8 rounded-2xl shadow-2xl">
                  <h3 className="text-xl font-bold mb-4 text-primary">Need This Service?</h3>
                  <p className="text-sm text-slate-300 mb-6">{isBeeWarm ? "Discuss your heating or hot-water project with Robert Hamilton at BeeWarm. Confirm availability directly." : isPlowWow ? "Discuss your Kitsilano or West Side winter-service scope with PlowWow." : isPSI ? "Discuss your insulation or repair scope with Performance Spray Insulation." : "Get a free quote from our experienced team. 35+ years serving the Lower Mainland."}</p>
                  <a
                    href={isBeeWarm ? "tel:+16047658424" : isPSI ? "tel:+17787794353" : `tel:${contacts.colin.phoneTel}`}
                    className="bg-primary hover:bg-accent text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 w-full mb-3"
                  >
                    <Phone className="w-4 h-4" /> Call {isBeeWarm ? "604-765-8424" : isPSI ? "778-779-4353" : contacts.colin.phone}
                  </a>
                  <a href={isBeeWarm ? "mailto:bee@beewarm.ca" : isPlowWow ? "mailto:wow@plowwow.com" : isPSI ? "mailto:insulatevancouver@gmail.com" : "/#contact"} className="border-2 border-white text-white font-bold px-6 py-3 rounded-xl hover:bg-white hover:text-secondary transition-all flex items-center justify-center w-full text-sm">
                    {isBeeWarm ? "Email Robert at BeeWarm" : isPlowWow ? "Email PlowWow" : isPSI ? "Email Performance Spray Insulation" : "Request a Quote Online"}
                  </a>
                </div>)}

                {relatedTrades.length > 0 && (
                  <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">Related Services</h4>
                    <div className="space-y-2">
                      {relatedTrades.map(trade => (
                        <Link key={trade.slug} href={`/services/${trade.slug}`} className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors group">
                          <ArrowRight className="w-3.5 h-3.5 text-primary" />
                          {trade.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </main>

      {relatedPosts.length > 0 && (
        <section className="py-16 px-6 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-black">Related Articles</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map(rp => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`}>
                  <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/30 transition-all group cursor-pointer h-full flex flex-col">
                    <div className="bg-secondary p-5">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">{rp.category}</span>
                      <h3 className="text-sm font-black text-white mt-2 group-hover:text-primary transition-colors leading-snug">{rp.title}</h3>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <p className="text-xs text-muted-foreground leading-relaxed flex-1">{rp.excerpt}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-3 pt-3 border-t border-slate-100">
                        <Clock className="w-3 h-3" />{rp.readTime}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 px-6 bg-secondary text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4">Ready to Get Started?</h2>
          <p className="text-slate-300 mb-8">{isBeeWarm ? "Contact Robert at BeeWarm with your building location, equipment details and proposed work." : isPlowWow ? "Contact PlowWow with your building address, priority routes and access details." : isPSI ? "Contact Performance Spray Insulation with your building location, photos and proposed work." : "Contact Strata Property Services for a free, no-obligation quote. 35+ years of trusted service across the Lower Mainland."}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={isBeeWarm ? "tel:+16047658424" : isPSI ? "tel:+17787794353" : `tel:${contacts.colin.phoneTel}`} className="bg-primary hover:bg-accent text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg inline-flex items-center justify-center gap-2 text-lg">
              <Phone className="w-5 h-5" /> Call {isBeeWarm ? "604-765-8424" : isPSI ? "778-779-4353" : contacts.colin.phone}
            </a>
            <Link href="/blog" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-secondary transition-all inline-flex items-center justify-center text-lg">
              More Articles
            </Link>
          </div>
        </div>
      </section>

      {isPlowWow ? <SnowFooter/> : isPSI ? <PSIFooter/> : <Footer />}
      {isPSI && <PSIContactCard/>}
      {isPlowWow && <PlowWowContactCard/>}
    </div>
  );
}

function PSIHeader(){return <nav className="mx-auto max-w-7xl px-6 py-5 flex flex-wrap gap-4"><a href="/">Strata Property Services</a><span>Featured contractor: Performance Spray Insulation</span><a href="tel:+17787794353">778-779-4353</a></nav>;}
function PSIFooter(){return <footer className="mx-auto max-w-7xl px-6 pt-8 pb-32"><strong>Performance Spray Insulation</strong><p>Project enquiries: <a href="tel:+17787794353">778-779-4353</a> · <a href="mailto:insulatevancouver@gmail.com">insulatevancouver@gmail.com</a></p></footer>;}

function SnowHeader(){return <nav className="mx-auto max-w-7xl px-6 py-5 flex flex-wrap gap-4"><a href="/">Strata Property Services</a><span>Featured winter contractor: PlowWow</span><a href="tel:+16047611518">604-761-1518</a></nav>;}
function SnowFooter(){return <footer className="mx-auto max-w-7xl px-6 pt-8 pb-32"><strong>PlowWow Snow Removal</strong><p>Winter service enquiries: <a href="tel:+16047611518">604-761-1518</a> · <a href="mailto:wow@plowwow.com">wow@plowwow.com</a></p></footer>;}
