import fs from "node:fs";
import path from "node:path";
import express from "express";

const isProd = process.env.NODE_ENV === "production";
const port = Number(process.env.PORT) || 5173;
const root = import.meta.dirname;
const ROOT_DIV = /<div id="root">[\s\S]*?<\/div>/;

const app = express();

let vite;
let prodTemplate;
let prodRender;

if (isProd) {
  const clientDir = path.join(root, "dist/client");
  prodTemplate = fs.readFileSync(
    path.join(root, "dist/server/template.html"),
    "utf-8",
  );
  ({ render: prodRender } = await import("./dist/server/entry-server.js"));

  // hashed build assets can be cached forever
  app.use(
    "/assets",
    express.static(path.join(clientDir, "assets"), {
      immutable: true,
      maxAge: "1y",
      index: false,
    }),
  );
  // index: false so pages are server-rendered per request, not served from the prerendered files
  app.use(express.static(clientDir, { index: false, redirect: false }));
} else {
  const { createServer } = await import("vite");
  vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
  });
  app.use(vite.middlewares);
}

app.use("*all", async (req, res, next) => {
  if (path.extname(req.path)) return res.sendStatus(404);
  try {
    const url = req.originalUrl;
    let template, render;

    if (isProd) {
      template = prodTemplate;
      render = prodRender;
    } else {
      template = await vite.transformIndexHtml(
        url,
        fs.readFileSync(path.join(root, "index.html"), "utf-8"),
      );
      ({ render } = await vite.ssrLoadModule("/src/entry-server.tsx"));
    }

    const { html: appHtml, redirect } = await render(url);

    if (redirect) {
      return res.redirect(redirect.status, redirect.headers.get("Location"));
    }

    res
      .status(200)
      .set({ "Content-Type": "text/html" })
      .end(template.replace(ROOT_DIV, () => `<div id="root">${appHtml}</div>`));
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    next(e);
  }
});

app.listen(port, () => console.log(`http://localhost:${port}`));
