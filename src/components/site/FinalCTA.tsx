import { ArrowRight, LayoutDashboard } from "lucide-react";
import { LINKS } from "@/config/site";
import { Container, btn } from "./primitives";

export function FinalCTA() {
  return (
    <section className="relative py-20 sm:py-28">
      <Container>
        <div className="reveal glass-panel glow-ring relative overflow-hidden rounded-2xl px-6 py-16 text-center sm:px-12">
          <div
            aria-hidden
            className="grid-bg absolute inset-0 opacity-40 [mask-image:radial-gradient(70%_70%_at_50%_50%,#000,transparent)]"
          />
          <div
            aria-hidden
            className="animate-drift absolute top-1/2 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[oklch(0.62_0.21_262/28%)] blur-[120px]"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
              Your server deserves{" "}
              <span className="text-gradient">better protection</span>.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground text-pretty">
              Set up FR1EV SECURITY and manage your Discord server with moderation, security,
              verification, AI, tickets, and more from one platform.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href={LINKS.addToDiscord}
                target="_blank"
                rel="noopener noreferrer"
                className={btn.primary}
              >
                Add FR1EV SECURITY <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a href={LINKS.dashboard} className={btn.outline}>
                <LayoutDashboard className="h-4 w-4" aria-hidden /> Open Dashboard
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
