/**
 * FR1EV SECURITY — central configuration.
 * Edit URLs, IDs and displayed statistics here.
 */

export const DISCORD_CLIENT_ID = "1453017552551936000";

export const LINKS = {
  addToDiscord:
    "https://discord.com/oauth2/authorize?client_id=1453017552551936000&integration_type=0&scope=bot%20applications.commands&permissions=1495155600630",
  userInstall:
    "https://discord.com/oauth2/authorize?client_id=1453017552551936000&integration_type=1&scope=applications.commands",
  dashboard: "https://dashboard.fr1ev.xyz/",
  support: "https://discord.gg/TEMa2cFh6h",
  topgg: "https://top.gg/bot/1453017552551936000/vote",
  dbl: "https://discordbotlist.com/bots/1453017552551936000/upvote",
  roblox: "/roblox/",
  profile: "/profile/",
  dashboardPage: "/dashboard/",
  privacy: "/privacy.html",
  terms: "/tos.html",
} as const;

/** Placeholder stats — replace the `value` strings with real numbers. */
export const STATS: { value: string; label: string }[] = [
  { value: "XX+", label: "Servers" },
  { value: "XXK+", label: "Members Protected" },
  { value: "24/7", label: "Protection" },
  { value: "99.9%", label: "Availability" },
];

export const STATUS_ENDPOINT = "/status.json";
export const LOGO = "/fr1ev_security.png";
