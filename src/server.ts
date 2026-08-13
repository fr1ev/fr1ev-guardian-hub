import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (
    request: Request,
    env: unknown,
    ctx: unknown,
  ) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }

  return serverEntryPromise;
}

const LEGACY_REPO =
  "https://raw.githubusercontent.com/fr1ev/fr1ev-security/main";

const PROFILE_REPO =
  "https://raw.githubusercontent.com/fr1ev/profile/main";

function contentTypeFor(path: string, upstream: Response) {
  const lower = path.toLowerCase();

  if (lower.endsWith(".html") || !lower.includes(".")) {
    return "text/html; charset=utf-8";
  }

  if (lower.endsWith(".json")) {
    return "application/json; charset=utf-8";
  }

  if (lower.endsWith(".css")) {
    return "text/css; charset=utf-8";
  }

  if (lower.endsWith(".js") || lower.endsWith(".mjs")) {
    return "text/javascript; charset=utf-8";
  }

  if (lower.endsWith(".xml")) {
    return "application/xml; charset=utf-8";
  }

  if (lower.endsWith(".txt") || lower.endsWith("/discord")) {
    return "text/plain; charset=utf-8";
  }

  if (lower.endsWith(".png")) {
    return "image/png";
  }

  if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) {
    return "image/jpeg";
  }

  if (lower.endsWith(".gif")) {
    return "image/gif";
  }

  if (lower.endsWith(".svg")) {
    return "image/svg+xml";
  }

  if (lower.endsWith(".ico")) {
    return "image/x-icon";
  }

  return upstream.headers.get("content-type") ?? "application/octet-stream";
}

async function proxyLegacy(request: Request): Promise<Response | null> {
  const url = new URL(request.url);

  let upstreamUrl: string | null = null;
  let logicalPath = url.pathname;

  // Live heartbeat from the old repo
  if (url.pathname === "/status.json") {
    upstreamUrl = `${LEGACY_REPO}/status.json?v=${Date.now()}`;
  }

  // Old standalone pages
  else if (
    ["/privacy.html", "/tos.html", "/callback.html"].includes(url.pathname)
  ) {
    upstreamUrl = `${LEGACY_REPO}${url.pathname}`;
  }

  // Discord verification files
  else if (url.pathname.startsWith("/.well-known/")) {
    upstreamUrl = `${LEGACY_REPO}${url.pathname}`;
  }

  // Dashboard landing page
  else if (
    url.pathname === "/dashboard" ||
    url.pathname === "/dashboard/"
  ) {
    logicalPath = "/dashboard/index.html";
    upstreamUrl = `${LEGACY_REPO}${logicalPath}`;
  } else if (url.pathname.startsWith("/dashboard/")) {
    upstreamUrl = `${LEGACY_REPO}${url.pathname}`;
  }

  // Roblox system
  else if (
    url.pathname === "/roblox" ||
    url.pathname === "/roblox/"
  ) {
    logicalPath = "/roblox/index.html";
    upstreamUrl = `${LEGACY_REPO}${logicalPath}`;
  } else if (url.pathname.startsWith("/roblox/")) {
    upstreamUrl = `${LEGACY_REPO}${url.pathname}`;
  }

  // Separate profile repository
  else if (
    url.pathname === "/profile" ||
    url.pathname === "/profile/"
  ) {
    logicalPath = "/profile/index.html";
    upstreamUrl = `${PROFILE_REPO}/index.html`;
  } else if (url.pathname.startsWith("/profile/")) {
    const profilePath = url.pathname.slice("/profile/".length);

    logicalPath = `/profile/${profilePath}`;
    upstreamUrl = `${PROFILE_REPO}/${profilePath}`;
  }

  // Brainrot Clicker files
  else if (
    url.pathname === "/brainrot-clicker" ||
    url.pathname === "/brainrot-clicker/"
  ) {
    logicalPath = "/brainrot-clicker/index.html";
    upstreamUrl = `${LEGACY_REPO}${logicalPath}`;
  } else if (url.pathname.startsWith("/brainrot-clicker/")) {
    upstreamUrl = `${LEGACY_REPO}${url.pathname}`;
  }

  if (!upstreamUrl) {
    return null;
  }

  const upstream = await fetch(upstreamUrl, {
    headers: {
      "User-Agent": "FR1EV-Cloudflare-Worker",
    },
  });

  if (!upstream.ok) {
    return new Response(
      `FR1EV resource not found: ${url.pathname}`,
      {
        status: upstream.status,
        headers: {
          "content-type": "text/plain; charset=utf-8",
        },
      },
    );
  }

  const headers = new Headers(upstream.headers);

  headers.set(
    "content-type",
    contentTypeFor(logicalPath, upstream),
  );

  if (url.pathname === "/status.json") {
    headers.set(
      "cache-control",
      "no-store, no-cache, must-revalidate, max-age=0",
    );
  } else {
    headers.set(
      "cache-control",
      "public, max-age=120",
    );
  }

  headers.delete("content-security-policy");
  headers.delete("x-frame-options");

  return new Response(upstream.body, {
    status: upstream.status,
    headers,
  });
}

async function normalizeCatastrophicSsrResponse(
  response: Response,
): Promise<Response> {
  if (response.status < 500) {
    return response;
  }

  const contentType =
    response.headers.get("content-type") ?? "";

  if (!contentType.includes("application/json")) {
    return response;
  }

  const body = await response.clone().text();

  if (!isH3SwallowedErrorBody(body)) {
    return response;
  }

  console.error(
    consumeLastCapturedError() ??
      new Error(`h3 swallowed SSR error: ${body}`),
  );

  return new Response(renderErrorPage(), {
    status: 500,
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as {
      unhandled?: unknown;
      message?: unknown;
    };

    return (
      payload.unhandled === true &&
      payload.message === "HTTPError"
    );
  } catch {
    return false;
  }
}

export default {
  async fetch(
    request: Request,
    env: unknown,
    ctx: unknown,
  ) {
    try {
      // Check old FR1EV routes before TanStack handles it.
      const legacy = await proxyLegacy(request);

      if (legacy) {
        return legacy;
      }

      // Everything else = new Lovable website.
      const handler = await getServerEntry();

      const response = await handler.fetch(
        request,
        env,
        ctx,
      );

      return await normalizeCatastrophicSsrResponse(
        response,
      );
    } catch (error) {
      console.error(error);

      return new Response(renderErrorPage(), {
        status: 500,
        headers: {
          "content-type": "text/html; charset=utf-8",
        },
      });
    }
  },
};
