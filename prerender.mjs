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
console.log(`✓ prerendered ${ok} routes (${fail} skipped)`);
