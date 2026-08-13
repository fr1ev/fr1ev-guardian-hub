import {
  ShieldCheck,
  Bot,
  Ban,
  BadgeCheck,
  Ticket,
  Sparkles,
  ActivitySquare,
} from "lucide-react";

const CARDS = [
  { icon: ShieldCheck, label: "Protection Status", value: "Protected", tone: "good" },
  { icon: Bot, label: "Automod", value: "Enabled", tone: "good" },
  { icon: Ban, label: "Threats Blocked", value: "12", tone: "warn" },
  { icon: ActivitySquare, label: "Server", value: "Online", tone: "good" },
  { icon: BadgeCheck, label: "Verification", value: "Active", tone: "good" },
  { icon: Ticket, label: "Open Tickets", value: "3", tone: "info" },
] as const;

const FEED = [
  { icon: Ban, text: "Blocked invite link in #general", time: "just now" },
  { icon: BadgeCheck, text: "Roblox account verified", time: "1m" },
  { icon: Sparkles, text: "AI response generated", time: "3m" },
  { icon: Ticket, text: "Ticket #0421 opened", time: "6m" },
];

export function HeroDashboard() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-2xl bg-[radial-gradient(60%_60%_at_50%_20%,oklch(0.62_0.21_262/28%),transparent_70%)] blur-2xl"
      />
      <div className="glass-panel glow-ring relative overflow-hidden rounded-xl">
        <div
          aria-hidden
          className="animate-scan pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,transparent,oklch(0.68_0.2_254/10%),transparent)]"
        />
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.8_0.16_85/70%)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-online/70" />
            <span className="ml-3 font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
              fr1ev · security overview
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded border border-[oklch(0.78_0.19_150/35%)] px-2 py-0.5 font-mono text-[10px] text-online">
            <span className="animate-pulse-ring h-1.5 w-1.5 rounded-full bg-online" /> LIVE
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-3">
          {CARDS.map(({ icon: Icon, label, value, tone }) => (
            <div
              key={label}
              className="group rounded-lg border border-border bg-panel/60 p-3 transition-colors hover:border-electric/50"
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon className="h-4 w-4 text-electric" aria-hidden />
                <span className="truncate text-[11px] tracking-wide uppercase">{label}</span>
              </div>
              <p
                className={
                  "mt-2 font-mono text-lg font-semibold " +
                  (tone === "good"
                    ? "text-online"
                    : tone === "warn"
                      ? "text-cyan"
                      : "text-foreground")
                }
              >
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-border px-4 py-3">
          <p className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
            Recent activity
          </p>
          <ul className="mt-2 space-y-2">
            {FEED.map((f) => (
              <li key={f.text} className="flex items-center gap-3 text-sm">
                <span className="flex h-7 w-7 items-center justify-center rounded border border-border bg-panel-2/60">
                  <f.icon className="h-3.5 w-3.5 text-cyan" aria-hidden />
                </span>
                <span className="flex-1 truncate text-muted-foreground">{f.text}</span>
                <span className="font-mono text-[11px] text-muted-foreground/70">{f.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
