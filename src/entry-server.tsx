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

export function render(url: string): { html: string; head: string } {
  const helmetContext: Record<string, any> = {};
  const html = renderToString(<App ssrPath={url} helmetContext={helmetContext} />);
  const h = helmetContext.helmet;
  const head = h ? [h.title, h.meta, h.link, h.script].map((x: any) => (x ? x.toString() : "")).join("") : "";
  return { html, head };
}
