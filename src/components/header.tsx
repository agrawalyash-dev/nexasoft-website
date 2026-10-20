import { useEffect, useState } from "react";
import { ArrowRight, Menu } from "lucide-react";
import { Link, NavLink } from "react-router";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const links = [
  { label: "Businesses", href: "/businesses" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Technology", href: "/technology" },
  { label: "About", href: "/about" },
];

// Must match the breakpoint used by the `lg:` classes below.
const DESKTOP_QUERY = "(min-width: 64rem)";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu if the viewport grows to desktop width while it's open.
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent bg-background/90 backdrop-blur-md transition-colors",
        scrolled && "border-border",
      )}
    >
      <div className="mx-auto flex h-16 items-center justify-between lg:h-20 global-padding-x">
        <Link
          to="/"
          aria-label="Nexasoft home"
          className="flex shrink-0 items-center"
        >
          <img
            src="/logo.png"
            alt="Nexasoft"
            className="h-9 w-auto sm:h-10 lg:h-12"
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 font-medium lg:flex xl:gap-9"
        >
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className={({ isActive }) =>
                cn(
                  "transition-colors hover:text-primary",
                  isActive && "text-primary",
                )}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Button
          className="hidden lg:inline-flex"
          nativeButton={false}
          render={<Link to="/contact" />}
          size={"lg"}
        >
          Contact
          <ArrowRight className="size-5" />
        </Button>

        {/* Mobile navigation */}
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon-lg"
                className="-mr-2 size-11 lg:hidden"
                aria-label="Open menu"
              />
            }
          >
            <Menu className="size-6" />
          </SheetTrigger>

          <SheetContent side="right" className="w-[85vw] gap-0 sm:max-w-sm">
            <SheetHeader className="h-16 justify-center border-b px-5">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <Link to="/" onClick={closeMenu} aria-label="Nexasoft home">
                <img src="/logo.png" alt="Nexasoft" className="h-9 w-auto" />
              </Link>
            </SheetHeader>

            <nav aria-label="Mobile" className="flex flex-col px-5 py-2">
              {links.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.href}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    cn(
                      "border-b border-border py-4 text-lg font-medium transition-colors last:border-b-0 hover:text-primary",
                      isActive && "text-primary",
                    )}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <SheetFooter className="border-t p-5">
              <Button
                className="w-full"
                nativeButton={false}
                render={<Link to="/contact" onClick={closeMenu} />}
              >
                Contact
                <ArrowRight className="size-5" />
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
