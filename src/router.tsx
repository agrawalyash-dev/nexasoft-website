import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/main-layout";
import Home from "./pages/home";
import Businesses from "./pages/businesses";
import Services from "./pages/services";
import Industries from "./pages/industries";
import Technology from "./pages/technology";
import Contact from "./pages/contact";
import Privacy from "./pages/legal/privacy";
import Terms from "./pages/legal/terms";
import About from "./pages/about";
import Careers from "./pages/careers";
import CaseStudiesPage from "./pages/case-studies";
import CaseStudyDetail from "./pages/case-studies/details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "businesses",
        element: <Businesses />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "industries",
        element: <Industries />,
      },
      {
        path: "technology",
        element: <Technology />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "privacy",
        element: <Privacy />,
      },
      {
        path: "terms",
        element: <Terms />,
      },
      {
        path: "careers",
        element: <Careers />,
      },
      {
        path: "case-studies",
        element: <CaseStudiesPage />,
      },
      {
        path: "case-studies/:slug",
        element: <CaseStudyDetail />,
      },
    ],
  },
]);

export default router;
