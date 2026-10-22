import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(import.meta.dirname, "..");
const clientDir = path.join(root, "dist/client");
const template = fs.readFileSync(path.join(clientDir, "index.html"), "utf-8");
const { render, paths } = await import(
  pathToFileURL(path.join(root, "dist/server/entry-server.js")).href
);

const ROOT = /<div id="root">[\s\S]*?<\/div>/;
if (!ROOT.test(template)) {
  throw new Error('<div id="root"> not found in dist/client/index.html');
}
fs.mkdirSync(path.join(root, "dist/server"), { recursive: true });
fs.writeFileSync(path.join(root, "dist/server/template.html"), template);

const write = (file, html) => {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(
    file,
    template.replace(ROOT, () => `<div id="root">${html}</div>`),
  );
};

for (const route of paths) {
  const { html } = await render(route);
  if (!html) throw new Error(`No HTML rendered for ${route}`);
  write(
    route === "/"
      ? path.join(clientDir, "index.html")
      : path.join(clientDir, route, "index.html"),
    html,
  );
  console.log("prerendered", route);
}

// unknown URLs: Vercel serves 404.html automatically
const { html: notFound } = await render("/__not-found");
write(path.join(clientDir, "404.html"), notFound);
