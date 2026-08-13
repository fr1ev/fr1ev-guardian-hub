import { STATS } from "@/config/site";
import { Container } from "./primitives";

export function Stats() {
  return (
    <section aria-label="Statistics" className="relative py-10">
      <Container>
        <dl className="glass-panel reveal grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-border/40 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-[#050b1c]/70 px-6 py-7 text-center">
              <dt className="order-2 mt-1 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                {s.label}
              </dt>
              <dd className="text-gradient font-mono text-3xl font-bold sm:text-4xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
