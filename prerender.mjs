import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const dist = path.resolve("dist");
const template = fs.readFileSync(path.join(dist, "index.html"), "utf-8");
const { render, getRoutes, getRouteImages } = await import(pathToFileURL(path.join(dist, "server", "entry-server.js")).href);

const routes = getRoutes();
const routeImages = getRouteImages();
let ok = 0, fail = 0;
for (const url of routes) {
  try {
    const { html, head } = render(url);
    let page = template.replace("<!--app-html-->", html).replace("<!--app-head-->", head);
    if (url === "/blog/beewarm-strata-fireplace-booking-app-beta") page = page.replace(/<script[^>]*src="https:\/\/talc-tv\.replit\.app\/bot\.js[^>]*><\/script>/g, "");
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
  const loc = `https://www.stratapropertyservices.com${url === "/" ? "/" : url}`;
  const imageEntries = (routeImages[url] || []).map((image) => `
    <image:image>
      <image:loc>https://www.stratapropertyservices.com/${image.src.replace(/^\//, "")}</image:loc>
      <image:title>${escapeXml(image.title)}</image:title>${image.caption ? `
      <image:caption>${escapeXml(image.caption)}</image:caption>` : ""}
    </image:image>`).join("");
  if (!url.startsWith("/services/snow-removal/")) return `  <url><loc>${loc}</loc><lastmod>${today}</lastmod>${imageEntries}</url>`;
  const citySlug = url.split("/").at(-1);
  const cityName = citySlug.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
  return `  <url>
    <loc>${loc}</loc><lastmod>${today}</lastmod>
    ${imageEntries}<video:video>
      <video:thumbnail_loc>https://plowwow.com/blog-images/_neighborhoods/city-all__tag-strata.jpg</video:thumbnail_loc>
      <video:title>${escapeXml(`Snow Removal in ${cityName} | PlowWow Field Operations`)}</video:title>
      <video:description>${escapeXml(`Professional PlowWow snow-removal readiness for strata and commercial properties in ${cityName}, British Columbia.`)}</video:description>
      <video:content_loc>https://www.stratapropertyservices.com/videos/plowwow-snow-removal-operations.mp4</video:content_loc>
      <video:duration>10</video:duration>
      <video:publication_date>2026-08-30T00:00:00-07:00</video:publication_date>
    </video:video>
  </url>`;
};
const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
  ...routes.map(sitemapUrl),
  '</urlset>',
].join('\n');
fs.writeFileSync(path.join(dist, "sitemap.xml"), xml);
console.log(`✓ prerendered ${ok} routes (${fail} skipped)`);

const dailySitemapPath=path.join(dist,"sitemap.xml");
fs.writeFileSync(dailySitemapPath,fs.readFileSync(dailySitemapPath,"utf8").replace("</urlset>",()=>"<url><loc>https://www.stratapropertyservices.com/blog/strata-building-wide-fireplace-servicing-schedule</loc><lastmod>2026-11-24</lastmod></url>"+"</urlset>"));
const dailyHomePath=path.join(dist,"index.html");
fs.writeFileSync(dailyHomePath,fs.readFileSync(dailyHomePath,"utf8").replace("</body>",()=>"<section aria-label=\"Latest article\" style=\"max-width:1050px;margin:24px auto;padding:20px 5%;font-family:system-ui\"><a href=\"/blog/strata-building-wide-fireplace-servicing-schedule\"><img src=\"https://ppdnkogmsfwhhknayolb.supabase.co/storage/v1/object/public/post-images/stratapropertyservices.com/strata-building-wide-fireplace-servicing-schedule.png\" alt=\"Gas fitter servicing a gas fireplace insert in a condo living room with the glass front set aside\" loading=\"lazy\" style=\"width:min(100%,400px);height:auto;border-radius:8px\"><h2>How Strata Councils Should Schedule Building-Wide Fireplace Servicing</h2></a><p>Servicing every fireplace in a building at once is cheaper and easier to track than leaving it to each owner, but only if the logistics are planned. Here&#39;s a schedule councils can follow, from booking to records.</p></section>"+"</body>"));

// Owner-requested November26 reviewed editorial import.
fs.writeFileSync(path.join(dist,"sitemap.xml"),fs.readFileSync(path.join(dist,"sitemap.xml"),"utf8").replace("</urlset>",()=>"<url><loc>https://www.stratapropertyservices.com/blog/owner-wont-allow-fireplace-inspection-strata</loc><lastmod>2026-11-26</lastmod></url>"+"</urlset>"));

// Preserve the November27 imported guide in canonical discovery.
fs.writeFileSync(path.join(dist,"sitemap.xml"),fs.readFileSync(path.join(dist,"sitemap.xml"),"utf8").replace("</urlset>",()=>"<url><loc>https://www.stratapropertyservices.com/blog/strata-fireplace-upgrade-approvals</loc><lastmod>2026-11-27</lastmod></url></urlset>"));
