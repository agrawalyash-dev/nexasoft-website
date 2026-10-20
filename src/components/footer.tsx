import { Link } from "react-router";

const columns = [
  {
    heading: "Services",
    links: [
      { label: "Digital Engineering", to: "/services" },
      { label: "Cloud & Infrastructure", to: "/services" },
      { label: "AI & Data", to: "/services" },
      { label: "Cybersecurity", to: "/services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Industries", to: "/industries" },
      { label: "Case Studies", to: "/case-studies" },
      { label: "Careers", to: "/careers" },
    ],
  },
];

// Evaluated once at load, outside render, so the component stays pure.
const YEAR = new Date().getFullYear();

const linkClass = "hover:text-primary transition-colors";

const Footer = () => {
  return (
    <footer className="pt-12 pb-8 text-muted-foreground">
      <div className="global-padding-x">
        <div className="mb-9 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2">
            <Link to="/" aria-label="Nexasoft home" className="inline-block">
              <img src="/logo.png" alt="Nexasoft" className="h-10 w-auto" />
            </Link>
            <p className="mt-3 max-w-xs">
              Intelligent software, digital infrastructure and secure technology
              services for businesses worldwide.
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h4 className="mb-3 font-bold text-foreground">{col.heading}</h4>
              <ul className="grid gap-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className={linkClass}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h4 className="mb-3 font-bold text-foreground">Contact</h4>
            <ul className="grid gap-2">
              <li>
                <a href="mailto:hello@nexasoft.com" className={linkClass}>
                  hello@nexasoft.com
                </a>
              </li>
              <li>Vadodara, Gujarat, India</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border pt-5 sm:flex-row sm:justify-between">
          <span>© {YEAR} Nexasoft Technologies. All rights reserved.</span>
          <span className="flex gap-5">
            <Link to="/privacy" className={linkClass}>
              Privacy Policy
            </Link>
            <Link to="/terms" className={linkClass}>
              Terms of Use
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
