import { ArrowDown, BadgeCheck, Blocks, MessageCircle, ShieldCheck } from "lucide-react";
import { LINKS, LOGO } from "@/config/site";
import { Container, SectionHeading, btn } from "./primitives";

export function RobloxSection() {
  return (
    <section id="roblox" className="relative scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Verification"
          title="Discord + Roblox, connected securely"
          description="Members link their Roblox identity to their Discord account through FR1EV SECURITY, so your staff always knows who is who."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <div className="reveal space-y-4">
            {[
              {
                icon: ShieldCheck,
                title: "Verified identities",
                text: "Only verified members receive access roles — no manual checking by moderators.",
              },
              {
                icon: BadgeCheck,
                title: "Secure linking flow",
                text: "Users confirm ownership of their Roblox account before the link is stored.",
              },
              {
                icon: Blocks,
                title: "Built for communities",
                text: "Ideal for Roblox groups, game servers and development teams.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex gap-4 rounded-xl border border-border bg-panel/50 p-5 transition-colors hover:border-electric/50"
              >
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-panel-2/70 text-electric">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
            <a href={LINKS.roblox} className={btn.primary}>
              Link Roblox Account
            </a>
          </div>

          <div className="reveal glass-panel glow-ring rounded-2xl p-8">
            <ol className="flex flex-col items-center gap-3">
              <li className="flex w-full max-w-sm items-center gap-3 rounded-lg border border-border bg-panel/60 px-4 py-4">
                <MessageCircle className="h-5 w-5 text-electric" aria-hidden />
                <span className="font-medium">Discord User</span>
              </li>
              <ArrowDown className="h-5 w-5 text-cyan" aria-hidden />
              <li className="flex w-full max-w-sm items-center gap-3 rounded-lg border border-electric/50 bg-[oklch(0.62_0.21_262/18%)] px-4 py-4 shadow-[0_0_40px_-18px_oklch(0.68_0.2_254)]">
                <img src={LOGO} alt="" aria-hidden width={22} height={22} className="h-[22px] w-[22px]" loading="lazy" />
                <span className="font-semibold">FR1EV SECURITY</span>
                <span className="ml-auto font-mono text-[11px] text-cyan">verifying…</span>
              </li>
              <ArrowDown className="h-5 w-5 text-cyan" aria-hidden />
              <li className="flex w-full max-w-sm items-center gap-3 rounded-lg border border-border bg-panel/60 px-4 py-4">
                <Blocks className="h-5 w-5 text-electric" aria-hidden />
                <span className="font-medium">Roblox Account</span>
                <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[11px] text-online">
                  <span className="animate-pulse-ring h-1.5 w-1.5 rounded-full bg-online" />
                  linked
                </span>
              </li>
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
