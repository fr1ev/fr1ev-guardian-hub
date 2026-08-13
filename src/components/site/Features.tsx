import {
  Gavel,
  ShieldHalf,
  LayoutDashboard,
  Ticket,
  BadgeCheck,
  TrendingUp,
  Sparkles,
  AudioLines,
  BarChart3,
} from "lucide-react";
import { Container, SectionHeading } from "./primitives";

const FEATURES = [
  {
    icon: Gavel,
    title: "Advanced Moderation",
    text: "Ban, kick, timeout, untimeout, unban, warnings, moderation history, and advanced permission checks.",
  },
  {
    icon: ShieldHalf,
    title: "Automod Protection",
    text: "Spam filtering, Discord invite blocking, link blocking, mention limits, blocked words, and automatic timeout punishments.",
  },
  {
    icon: LayoutDashboard,
    title: "Web Dashboard",
    text: "Manage servers from the FR1EV dashboard with Discord authentication and server permission checks.",
  },
  {
    icon: Ticket,
    title: "Ticket System",
    text: "Create and manage structured support tickets directly inside Discord.",
  },
  {
    icon: BadgeCheck,
    title: "Roblox Verification",
    text: "Allow Discord users to securely link and verify their Roblox accounts.",
  },
  {
    icon: TrendingUp,
    title: "Leveling & XP",
    text: "Custom leveling, XP tracking, leaderboards, and rank cards.",
  },
  {
    icon: Sparkles,
    title: "AI Tools",
    text: "AI questions, intelligent tools, and image-generation functionality.",
  },
  {
    icon: AudioLines,
    title: "Voice & TTS",
    text: "Discord voice utilities and text-to-speech functionality.",
  },
  {
    icon: BarChart3,
    title: "Server Statistics",
    text: "Track useful Discord server information and activity.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="Everything your Discord server needs"
          description="One bot for moderation, security, engagement and management — configured from Discord or the web dashboard."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, text }, i) => (
            <article
              key={title}
              className="reveal group relative overflow-hidden rounded-xl border border-border bg-[linear-gradient(160deg,oklch(0.26_0.06_264/70%),oklch(0.18_0.05_265/60%))] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-electric/60 hover:shadow-[0_24px_60px_-30px_oklch(0.62_0.21_262/80%)]"
              style={{ animationDelay: `${(i % 3) * 90}ms` }}
            >
              <div
                aria-hidden
                className="absolute inset-x-0 -top-24 h-32 bg-[radial-gradient(50%_100%_at_50%_100%,oklch(0.68_0.2_254/25%),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-panel-2/70 text-electric transition-colors group-hover:border-electric/60 group-hover:text-cyan">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
