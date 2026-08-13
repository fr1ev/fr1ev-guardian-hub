import { useEffect, useState } from "react";
import { Menu, X, LayoutDashboard } from "lucide-react";
import { LINKS, LOGO } from "@/config/site";
import { Container, btn } from "./primitives";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home", href: "#top" },
  { label: "Features", href: "#features" },
  { label: "Commands", href: "#commands" },
  { label: "Dashboard", href: LINKS.dashboardPage },
  { label: "Roblox", href: LINKS.roblox },
  { label: "Profile", href: LINKS.profile },
  { label: "Support", href: LINKS.support },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-[#050b1c]/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5" aria-label="FR1EV SECURITY home">
          <img
            src={LOGO}
            alt="FR1EV SECURITY logo"
            width={32}
            height={32}
            className="h-8 w-8 drop-shadow-[0_0_12px_oklch(0.68_0.2_254/55%)]"
          />
          <span className="font-mono text-sm font-bold tracking-[0.14em] uppercase">
            FR1EV <span className="text-gradient">Security</span>
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-panel/60 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href={LINKS.dashboard} className={btn.small}>
            <LayoutDashboard className="h-4 w-4" aria-hidden /> Dashboard
          </a>
          <a
            href={LINKS.addToDiscord}
            target="_blank"
            rel="noopener noreferrer"
            className={btn.primary}
          >
            Add to Discord
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-panel/60 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-border bg-[#050b1c]/95 backdrop-blur-xl lg:hidden"
      >
        <Container className="flex flex-col gap-1 py-4">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-sm text-muted-foreground hover:bg-panel/70 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-3 flex flex-col gap-2">
            <a
              href={LINKS.addToDiscord}
              target="_blank"
              rel="noopener noreferrer"
              className={btn.primary}
            >
              Add to Discord
            </a>
            <a href={LINKS.dashboard} className={btn.outline}>
              Open Dashboard
            </a>
          </div>
        </Container>
      </div>
    </header>
  );
}
