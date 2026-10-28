import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(import.meta.dirname, "..");
const distDir = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");
const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");
const { render, paths } = await import(
  pathToFileURL(path.join(ssrDir, "entry-server.js")).href
);

const ROOT = /<div id="root">[\s\S]*?<\/div>/;
if (!ROOT.test(template)) {
  throw new Error('<div id="root"> not found in dist/index.html');
}

// A page's own <title> (React 19 renders it inside the page HTML) is copied
// into <head>, so search engines and link previews see the right title.
const PAGE_TITLE = /<title>([\s\S]*?)<\/title>/;

const write = (file, html, fallbackTitle) => {
  let page = template.replace(ROOT, () => `<div id="root">${html}</div>`);
  const title = html.match(PAGE_TITLE)?.[1] ?? fallbackTitle;
  if (title) {
    page = page.replace(PAGE_TITLE, () => `<title>${title}</title>`);
  }
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page);
  return page.match(PAGE_TITLE)?.[1];
};

for (const route of paths) {
  const { html } = await render(route);
  if (!html) throw new Error(`No HTML rendered for ${route}`);
  const title = write(
    route === "/"
      ? path.join(distDir, "index.html")
      : path.join(distDir, route, "index.html"),
    html,
  );
  console.log("prerendered", route, "->", title);
}

// unknown URLs: .htaccess ErrorDocument serves 404.html
const { html: notFound } = await render("/__not-found");
write(path.join(distDir, "404.html"), notFound, "Page not found · Nexasoft");

// ---------- sitemap.xml + robots.txt ----------
// Change this if the live domain is different (no trailing slash)
const SITE_URL = "https://nexasofttechnologies.com";

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${
  paths
    .map(
      (route) =>
        `  <url>
    <loc>${SITE_URL}${route === "/" ? "/" : route}</loc>
    <lastmod>${today}</lastmod>
  </url>`,
    )
    .join("\n")
}
</urlset>
`;
fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap);

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
fs.writeFileSync(path.join(distDir, "robots.txt"), robots);
console.log(`sitemap.xml (${paths.length} URLs) + robots.txt written`);

// the SSR bundle is only needed for prerendering; dist/ is now pure static files
fs.rmSync(ssrDir, { recursive: true, force: true });
console.log("dist/ ready to upload");
