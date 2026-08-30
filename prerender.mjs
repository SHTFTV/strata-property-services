import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const dist = path.resolve("dist");
const template = fs.readFileSync(path.join(dist, "index.html"), "utf-8");
const { render, getRoutes } = await import(pathToFileURL(path.join(dist, "server", "entry-server.js")).href);

const routes = getRoutes();
let ok = 0, fail = 0;
for (const url of routes) {
  try {
    const { html, head } = render(url);
    const page = template.replace("<!--app-html-->", html).replace("<!--app-head-->", head);
    const outDir = path.join(dist, url === "/" ? "" : url);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "index.html"), page);
    ok++;
  } catch (e) {
    console.warn("prerender skip", url, "-", e.message);
    fail++;
  }
}
const today = new Date().toISOString().slice(0, 10);
const escapeXml = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const sitemapUrl = (url) => {
  const loc = `https://stratapropertyservices.com${url === "/" ? "/" : url}`;
  if (!url.startsWith("/services/snow-removal/")) return `  <url><loc>${loc}</loc><lastmod>${today}</lastmod></url>`;
  const citySlug = url.split("/").at(-1);
  const cityName = citySlug.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
  return `  <url>
    <loc>${loc}</loc><lastmod>${today}</lastmod>
    <video:video>
      <video:thumbnail_loc>https://plowwow.com/blog-images/_neighborhoods/city-all__tag-strata.jpg</video:thumbnail_loc>
      <video:title>${escapeXml(`Snow Removal in ${cityName} | PlowWow Field Operations`)}</video:title>
      <video:description>${escapeXml(`Professional PlowWow snow-removal readiness for strata and commercial properties in ${cityName}, British Columbia.`)}</video:description>
      <video:content_loc>https://stratapropertyservices.com/videos/plowwow-snow-removal-operations.mp4</video:content_loc>
      <video:duration>10</video:duration>
      <video:publication_date>2026-08-30T00:00:00-07:00</video:publication_date>
    </video:video>
  </url>`;
};
const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">',
  ...routes.map(sitemapUrl),
  '</urlset>',
].join('\n');
fs.writeFileSync(path.join(dist, "sitemap.xml"), xml);
console.log(`✓ prerendered ${ok} routes (${fail} skipped)`);
