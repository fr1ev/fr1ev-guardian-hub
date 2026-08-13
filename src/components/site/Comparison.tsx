import { Check, Minus, X } from "lucide-react";
import { Container, SectionHeading } from "./primitives";

type Cell = true | false | string;

const ROWS: { feature: string; fr1ev: Cell; other: Cell }[] = [
  { feature: "Advanced Moderation", fr1ev: true, other: true },
  { feature: "Web Dashboard", fr1ev: true, other: "Sometimes" },
  { feature: "Automod", fr1ev: true, other: "Basic" },
  { feature: "Roblox Verification", fr1ev: true, other: false },
  { feature: "AI Tools", fr1ev: true, other: false },
  { feature: "Image Generation", fr1ev: true, other: false },
  { feature: "Ticket System", fr1ev: true, other: "Sometimes" },
  { feature: "Leveling", fr1ev: true, other: "Sometimes" },
  { feature: "Centralized Server Control", fr1ev: true, other: "Limited" },
];

function Value({ value, highlight }: { value: Cell; highlight?: boolean }) {
  if (value === true)
    return (
      <span className="inline-flex items-center gap-1.5 font-medium text-online">
        <Check className="h-4 w-4" aria-hidden />
        <span className="sr-only">Yes</span>
      </span>
    );
  if (value === false)
    return (
      <span className="inline-flex items-center gap-1.5 text-muted-foreground/70">
        <X className="h-4 w-4" aria-hidden />
        <span className="sr-only">No</span>
      </span>
    );
  return (
    <span
      className={
        "inline-flex items-center gap-1.5 text-sm " +
        (highlight ? "text-foreground" : "text-muted-foreground")
      }
    >
      <Minus className="h-3.5 w-3.5" aria-hidden /> {value}
    </span>
  );
}

export function Comparison() {
  return (
    <section id="comparison" className="relative scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Comparison"
          title="Why teams choose FR1EV SECURITY"
          description="A single platform instead of five half-configured bots."
        />

        {/* Desktop table */}
        <div className="reveal mt-14 hidden overflow-hidden rounded-2xl border border-border md:block">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">
              Feature comparison between FR1EV SECURITY and a typical Discord bot
            </caption>
            <thead>
              <tr className="bg-panel/70">
                <th scope="col" className="px-6 py-4 text-sm font-semibold">
                  Feature
                </th>
                <th
                  scope="col"
                  className="border-x border-electric/40 bg-[oklch(0.62_0.21_262/16%)] px-6 py-4 text-sm font-semibold"
                >
                  FR1EV SECURITY
                </th>
                <th scope="col" className="px-6 py-4 text-sm font-semibold text-muted-foreground">
                  Typical Discord Bot
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.feature} className="border-t border-border">
                  <th scope="row" className="px-6 py-4 text-sm font-normal">
                    {r.feature}
                  </th>
                  <td className="border-x border-electric/40 bg-[oklch(0.62_0.21_262/10%)] px-6 py-4">
                    <Value value={r.fr1ev} highlight />
                  </td>
                  <td className="px-6 py-4">
                    <Value value={r.other} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="mt-10 grid gap-3 md:hidden">
          {ROWS.map((r) => (
            <div key={r.feature} className="reveal rounded-xl border border-border bg-panel/50 p-4">
              <p className="text-sm font-semibold">{r.feature}</p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-electric/40 bg-[oklch(0.62_0.21_262/14%)] p-3">
                  <p className="text-[11px] tracking-wide text-muted-foreground uppercase">
                    FR1EV
                  </p>
                  <div className="mt-1">
                    <Value value={r.fr1ev} highlight />
                  </div>
                </div>
                <div className="rounded-lg border border-border bg-panel/40 p-3">
                  <p className="text-[11px] tracking-wide text-muted-foreground uppercase">
                    Typical bot
                  </p>
                  <div className="mt-1">
                    <Value value={r.other} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
