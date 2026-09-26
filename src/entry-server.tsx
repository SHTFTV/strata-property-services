import { renderToString } from "react-dom/server";
import App from "./App";
import { trades } from "./data/trades";
import { cities } from "./data/cities";
import { blogPosts } from "./data/blogPosts";

export function getRoutes(): string[] {
  const r: string[] = ["/", "/about", "/sample-report", "/blog"];
  for (const b of blogPosts) r.push(`/blog/${b.slug}`);
  for (const c of cities) r.push(`/areas/${c.slug}`);
  for (const t of trades) {
    r.push(`/services/${t.slug}`);
    for (const c of cities) r.push(`/services/${t.slug}/${c.slug}`);
  }
  return r;
}

export function getRouteImages(): Record<string, { src: string; title: string; caption?: string }[]> {
  return Object.fromEntries(blogPosts.map((post) => [
    `/blog/${post.slug}`,
    (post.gallery?.length
      ? post.gallery.map((photo) => ({ src: photo.src, title: post.title, caption: photo.caption }))
      : [{ src: post.image, title: post.title }]),
  ]));
}

export function render(url: string): { html: string; head: string } {
  const helmetContext: Record<string, any> = {};
  const rendered = renderToString(<App ssrPath={url} helmetContext={helmetContext} />);
  const h = helmetContext.helmet;
  const inlineHead: string[] = [];
  const html = rendered.replace(/<title\b[^>]*>[\s\S]*?<\/title>|<meta\b[^>]*>|<link\b[^>]*>/gi, (tag) => {
    inlineHead.push(tag);
    return "";
  });
  const head = (h ? [h.title, h.meta, h.link, h.script].map((x: any) => (x ? x.toString() : "")).join("") : "") + inlineHead.join("");
  return { html, head };
}
