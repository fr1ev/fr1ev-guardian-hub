import { ArrowRight, LayoutDashboard, MessagesSquare, UserPlus } from "lucide-react";
import { LINKS } from "@/config/site";
import { Container, btn } from "./primitives";
import { BotStatus } from "./BotStatus";
import { HeroDashboard } from "./HeroDashboard";

export function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-10 sm:pt-32 lg:pt-40">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div className="reveal is-visible">
          <BotStatus className="mb-7" />

          <h1 className="text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-5xl xl:text-6xl">
            Protect. Moderate. Control.
            <span className="mt-3 block text-2xl font-semibold text-muted-foreground sm:text-3xl">
              Your Discord server, powered by{" "}
              <span className="text-gradient drop-shadow-[0_0_24px_oklch(0.68_0.2_254/45%)]">
                FR1EV SECURITY
              </span>
              .
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-muted-foreground text-pretty sm:text-lg">
            FR1EV SECURITY combines advanced moderation, automod, tickets, leveling, Roblox
            verification, AI tools, server management, and a powerful web dashboard into one
            Discord bot.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={LINKS.addToDiscord}
              target="_blank"
              rel="noopener noreferrer"
              className={btn.primary}
            >
              Add to Discord <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a href={LINKS.dashboard} className={btn.outline}>
              <LayoutDashboard className="h-4 w-4" aria-hidden /> Open Dashboard
            </a>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href={LINKS.support}
              target="_blank"
              rel="noopener noreferrer"
              className={btn.small}
            >
              <MessagesSquare className="h-4 w-4" aria-hidden /> Support Server
            </a>
            <a
              href={LINKS.userInstall}
              target="_blank"
              rel="noopener noreferrer"
              className={btn.small}
            >
              <UserPlus className="h-4 w-4" aria-hidden /> User Install
            </a>
          </div>
        </div>

        <div className="reveal is-visible lg:pl-4">
          <HeroDashboard />
        </div>
      </Container>
    </section>
  );
}
