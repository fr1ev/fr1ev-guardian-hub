import { BadgeCheck, Heart } from "lucide-react";
import { LINKS, LOGO } from "@/config/site";
import { Container, btn } from "./primitives";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Commands", href: "#commands" },
      { label: "Dashboard", href: LINKS.dashboardPage },
      { label: "Roblox", href: LINKS.roblox },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Support Server", href: LINKS.support },
      { label: "Profile", href: LINKS.profile },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: LINKS.privacy },
      { label: "Terms", href: LINKS.terms },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-[#040a19]/70">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src={LOGO}
                alt="FR1EV SECURITY logo"
                width={32}
                height={32}
                loading="lazy"
                className="h-8 w-8"
              />
              <span className="font-mono text-sm font-bold tracking-[0.14em] uppercase">
                FR1EV <span className="text-gradient">Security</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Advanced Discord moderation, automod, tickets, leveling, Roblox verification, AI
              tools and server management — with a full web dashboard.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 rounded-md border border-border bg-panel/50 px-3 py-1.5 text-xs text-muted-foreground">
              <BadgeCheck className="h-4 w-4 text-cyan" aria-hidden /> Verified Discord Application
            </span>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                {col.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-border bg-panel/40 p-5">
          <h2 className="flex items-center gap-2 text-sm font-semibold">
            <Heart className="h-4 w-4 text-electric" aria-hidden /> Support FR1EV
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Voting helps more communities discover FR1EV SECURITY.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a href={LINKS.topgg} target="_blank" rel="noopener noreferrer" className={btn.small}>
              Vote on Top.gg
            </a>
            <a href={LINKS.dbl} target="_blank" rel="noopener noreferrer" className={btn.small}>
              Vote on Discord Bot List
            </a>
            <a
              href={LINKS.support}
              target="_blank"
              rel="noopener noreferrer"
              className={btn.small}
            >
              Join Support Server
            </a>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          © 2026 FR1EV SECURITY. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
