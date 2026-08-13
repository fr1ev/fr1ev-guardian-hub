import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/site/Background";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Features } from "@/components/site/Features";
import { DashboardPreview } from "@/components/site/DashboardPreview";
import { Commands } from "@/components/site/Commands";
import { RobloxSection } from "@/components/site/RobloxSection";
import { Comparison } from "@/components/site/Comparison";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

const TITLE = "FR1EV SECURITY | Discord Moderation & Protection Bot";
const DESCRIPTION =
  "FR1EV SECURITY is an advanced Discord moderation and protection bot with dashboard controls, automod, tickets, leveling, Roblox verification, AI tools, and server security.";
const URL = "https://fr1ev.xyz/";
const IMAGE = "https://fr1ev.xyz/fr1ev_security.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      {
        name: "google-site-verification",
        content: "CCaXhxuBgHjBknScV_EMFCmz6NVOu2kSI3Sb2W1lOSU",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { property: "og:image", content: IMAGE },
      { property: "og:site_name", content: "FR1EV SECURITY" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: IMAGE },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "FR1EV SECURITY",
          applicationCategory: "SecurityApplication",
          operatingSystem: "Discord",
          url: URL,
          image: IMAGE,
          description: DESCRIPTION,
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();

  return (
    <div className="relative min-h-screen">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <DashboardPreview />
        <Commands />
        <RobloxSection />
        <Comparison />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
