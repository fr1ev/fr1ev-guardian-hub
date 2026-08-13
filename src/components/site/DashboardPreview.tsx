import {
  LayoutGrid,
  Gavel,
  ShieldHalf,
  BadgeCheck,
  Ticket,
  TrendingUp,
  ScrollText,
  Settings,
  ExternalLink,
} from "lucide-react";
import { LINKS, LOGO } from "@/config/site";
import { Container, SectionHeading, btn } from "./primitives";

const SIDEBAR = [
  { icon: LayoutGrid, label: "Overview", active: true },
  { icon: Gavel, label: "Moderation" },
  { icon: ShieldHalf, label: "Automod" },
  { icon: BadgeCheck, label: "Verification" },
  { icon: Ticket, label: "Tickets" },
  { icon: TrendingUp, label: "Leveling" },
  { icon: ScrollText, label: "Logging" },
  { icon: Settings, label: "Settings" },
];

const TOGGLES = [
  { label: "Automod", value: "Enabled" },
  { label: "Invite Blocking", value: "Enabled" },
  { label: "Spam Protection", value: "Enabled" },
  { label: "Mention Protection", value: "Enabled" },
  { label: "Logging", value: "Active" },
];

export function DashboardPreview() {
  return (
    <section id="dashboard" className="relative scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Dashboard"
          title="Control everything from one dashboard"
          description="Authenticate with Discord, pick a server and configure protection without a single config file."
        />

        <div className="glass-panel reveal glow-ring mt-14 overflow-hidden rounded-2xl">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div className="flex items-center gap-2.5">
              <img src={LOGO} alt="" aria-hidden width={22} height={22} className="h-[22px] w-[22px]" loading="lazy" />
              <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                dashboard.fr1ev.xyz
              </span>
            </div>
            <span className="hidden font-mono text-[11px] text-muted-foreground sm:inline">
              Guild · FR1EV Community
            </span>
          </div>

          <div className="grid md:grid-cols-[220px_1fr]">
            <nav
              aria-hidden
              className="flex gap-1 overflow-x-auto border-b border-border p-3 md:flex-col md:overflow-visible md:border-r md:border-b-0"
            >
              {SIDEBAR.map(({ icon: Icon, label, active }) => (
                <span
                  key={label}
                  className={
                    "flex shrink-0 items-center gap-2.5 rounded-md px-3 py-2 text-sm transition-colors " +
                    (active
                      ? "border border-electric/40 bg-panel-2/80 text-foreground"
                      : "text-muted-foreground hover:bg-panel/60 hover:text-foreground")
                  }
                >
                  <Icon className="h-4 w-4" /> {label}
                </span>
              ))}
            </nav>

            <div className="p-5 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-semibold">Server Security</h3>
                <span className="inline-flex items-center gap-2 rounded border border-[oklch(0.78_0.19_150/35%)] px-2.5 py-1 font-mono text-[11px] text-online">
                  <span className="animate-pulse-ring h-1.5 w-1.5 rounded-full bg-online" />
                  Protected
                </span>
              </div>

              <ul className="mt-5 space-y-2.5">
                {TOGGLES.map((t) => (
                  <li
                    key={t.label}
                    className="flex items-center justify-between rounded-lg border border-border bg-panel/50 px-4 py-3 transition-colors hover:border-electric/40"
                  >
                    <span className="text-sm">{t.label}</span>
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-xs text-online">{t.value}</span>
                      <span
                        aria-hidden
                        className="relative h-5 w-9 rounded-full bg-[oklch(0.62_0.21_262)] shadow-[0_0_18px_-4px_oklch(0.68_0.2_254/80%)]"
                      >
                        <span className="absolute top-0.5 right-0.5 h-4 w-4 rounded-full bg-white" />
                      </span>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { k: "Actions today", v: "48" },
                  { k: "Threats blocked", v: "12" },
                  { k: "Verified users", v: "156" },
                ].map((s) => (
                  <div key={s.k} className="rounded-lg border border-border bg-panel/40 p-4">
                    <p className="text-[11px] tracking-wide text-muted-foreground uppercase">
                      {s.k}
                    </p>
                    <p className="mt-1 font-mono text-xl font-semibold text-cyan">{s.v}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7">
                <a href={LINKS.dashboard} className={btn.primary}>
                  Open Dashboard <ExternalLink className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
