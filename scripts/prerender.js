// Runs after `vite build`: renders each route to static HTML so search
// engines and link previews get the full page text without running JS.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { PAGES, SITE_URL } from "../src/constants/seo.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const { render } = await import(
  pathToFileURL(path.join(ssrDir, "entry-server.js")).href
);
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

const escape = (s) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function setAttr(html, selector, attr, value) {
  const re = new RegExp(`(<[^>]*${selector}[^>]*${attr}=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`prerender: no tag matching ${selector}`);
  return html.replace(re, `$1${escape(value)}$2`);
}

for (const [route, { title, description }] of Object.entries(PAGES)) {
  const url = SITE_URL + route;
  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escape(title)}</title>`)
    .replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`);
  html = setAttr(html, 'name="description"', "content", description);
  html = setAttr(html, 'rel="canonical"', "href", url);
  html = setAttr(html, 'property="og:url"', "content", url);
  html = setAttr(html, 'property="og:title"', "content", title);
  html = setAttr(html, 'property="og:description"', "content", description);

  // "/" -> index.html, "/privacy" -> privacy.html (nginx tries $uri.html).
  const file = route === "/" ? "index.html" : `${route.slice(1)}.html`;
  fs.writeFileSync(path.join(dist, file), html);
  console.log(`prerendered ${route} -> dist/${file}`);
}

fs.rmSync(ssrDir, { recursive: true, force: true });
