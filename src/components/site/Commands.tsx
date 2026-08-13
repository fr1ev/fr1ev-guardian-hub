import { useState } from "react";
import { Slash } from "lucide-react";
import { Container, SectionHeading } from "./primitives";

type Category = "All" | "Moderation" | "Utility" | "Verification" | "Leveling" | "Administration";

const CATEGORIES: Category[] = [
  "All",
  "Moderation",
  "Utility",
  "Verification",
  "Leveling",
  "Administration",
];

const COMMANDS: { name: string; desc: string; category: Exclude<Category, "All"> }[] = [
  {
    name: "/setup",
    desc: "Start server setup and configure important protection features.",
    category: "Administration",
  },
  {
    name: "/dashboard",
    desc: "Open the dashboard and manage server settings.",
    category: "Utility",
  },
  { name: "/rank", desc: "View level, XP progress, and rank card.", category: "Leveling" },
  { name: "/warns", desc: "View warnings and moderation history.", category: "Moderation" },
  { name: "/verify", desc: "Link or verify a Roblox account.", category: "Verification" },
  { name: "/ticket", desc: "Create or manage server support tickets.", category: "Utility" },
];

export function Commands() {
  const [active, setActive] = useState<Category>("All");
  const shown = COMMANDS.filter((c) => active === "All" || c.category === active);

  return (
    <section id="commands" className="relative scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Commands"
          title="Powerful commands. Simple controls."
          description="Native Discord slash commands with permission checks built in."
        />

        <div
          role="tablist"
          aria-label="Command categories"
          className="reveal mt-10 flex flex-wrap justify-center gap-2"
        >
          {CATEGORIES.map((c) => (
            <button
              key={c}
              role="tab"
              type="button"
              aria-selected={active === c}
              onClick={() => setActive(c)}
              className={
                "rounded-md border px-4 py-2 text-sm transition-all duration-200 " +
                (active === c
                  ? "border-electric/60 bg-panel-2/80 text-foreground shadow-[0_0_28px_-14px_oklch(0.68_0.2_254)]"
                  : "border-border bg-panel/40 text-muted-foreground hover:border-electric/40 hover:text-foreground")
              }
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((cmd) => (
            <article
              key={cmd.name}
              className="reveal group rounded-xl border border-border bg-panel/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-electric/60 hover:bg-panel-2/60"
            >
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded border border-electric/40 bg-[oklch(0.62_0.21_262/20%)] text-electric">
                  <Slash className="h-3.5 w-3.5" aria-hidden />
                </span>
                <code className="font-mono text-base font-semibold text-cyan">{cmd.name}</code>
                <span className="ml-auto font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                  {cmd.category}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{cmd.desc}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
