import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router";
import { routes } from "./router";
import { caseStudies } from "./pages/case-studies/data";

// every URL that gets prerendered at build time
export const paths = [
  "/",
  "/businesses",
  "/services",
  "/industries",
  "/technology",
  "/contact",
  "/about",
  "/privacy",
  "/terms",
  "/careers",
  "/case-studies",
  ...caseStudies.map((c) => `/case-studies/${c.slug}`),
];

export async function render(url: string) {
  const { query, dataRoutes } = createStaticHandler(routes);
  const context = await query(
    new Request(new URL(url, "http://localhost").href),
  );

  if (context instanceof Response) {
    return { redirect: context };
  }

  const router = createStaticRouter(dataRoutes, context);
  const html = renderToString(
    <StrictMode>
      <StaticRouterProvider router={router} context={context} />
    </StrictMode>,
  );
  return { html };
}
