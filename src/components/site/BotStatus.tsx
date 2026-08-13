import { useEffect, useState } from "react";
import { Activity, ShieldCheck, ShieldAlert } from "lucide-react";
import { STATUS_ENDPOINT } from "@/config/site";
import { cn } from "@/lib/utils";

type State = "loading" | "online" | "offline";

interface StatusPayload {
  last_heartbeat?: number | string;
  offline_after?: number;
  online?: boolean;
}

function toSeconds(value: number | string | undefined): number | null {
  if (value === undefined || value === null) return null;
  const n = typeof value === "string" ? Date.parse(value) / 1000 : Number(value);
  if (!Number.isFinite(n)) return null;
  return n > 1e11 ? n / 1000 : n;
}

function formatAgo(seconds: number) {
  if (seconds < 60) return `${Math.max(0, Math.round(seconds))}s ago`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  return `${Math.floor(seconds / 86400)}d ago`;
}

export function BotStatus({ className }: { className?: string }) {
  const [state, setState] = useState<State>("loading");
  const [detail, setDetail] = useState<string>("Checking status…");

  useEffect(() => {
    let cancelled = false;

    async function check() {
      try {
        const res = await fetch(`${STATUS_ENDPOINT}?v=${Date.now()}`, {
          cache: "no-store",
          headers: { "Cache-Control": "no-cache", Pragma: "no-cache" },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as StatusPayload;

        const heartbeat = toSeconds(data.last_heartbeat);
        const offlineAfter = Number(data.offline_after) || 60;
        const now = Date.now() / 1000;
        const age = heartbeat !== null ? now - heartbeat : null;

        const isOnline =
          data.online !== false && age !== null ? age <= offlineAfter : data.online === true;

        if (cancelled) return;
        if (isOnline) {
          setState("online");
          setDetail(age !== null ? `Heartbeat ${formatAgo(age)}` : "Heartbeat received");
        } else {
          setState("offline");
          setDetail(
            age !== null ? `Last heartbeat ${formatAgo(age)}` : "No recent heartbeat",
          );
        }
      } catch {
        if (cancelled) return;
        setState("offline");
        setDetail("Status unavailable");
      }
    }

    check();
    const id = window.setInterval(check, 15000);
    return () => {
      cancelled = true;
      window.clearInterval(id);
    };
  }, []);

  const online = state === "online";
  const loading = state === "loading";

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "glass-panel inline-flex items-center gap-3 rounded-lg px-4 py-2.5",
        online && "border-[oklch(0.78_0.19_150/35%)]",
        state === "offline" && "border-[oklch(0.62_0.22_25/35%)]",
        className,
      )}
    >
      <span className="relative flex h-2.5 w-2.5 shrink-0">
        <span
          className={cn(
            "h-2.5 w-2.5 rounded-full",
            loading && "bg-muted-foreground",
            online && "animate-pulse-ring bg-online",
            state === "offline" && "bg-destructive",
          )}
        />
      </span>
      <span className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm">
        <span className="font-semibold">
          {loading
            ? "Checking FR1EV SECURITY…"
            : online
              ? "FR1EV SECURITY is online"
              : "FR1EV SECURITY is offline"}
        </span>
        <span className="font-mono text-xs text-muted-foreground">{detail}</span>
      </span>
      {loading ? (
        <Activity className="h-4 w-4 text-muted-foreground" aria-hidden />
      ) : online ? (
        <ShieldCheck className="h-4 w-4 text-online" aria-hidden />
      ) : (
        <ShieldAlert className="h-4 w-4 text-destructive" aria-hidden />
      )}
    </div>
  );
}
