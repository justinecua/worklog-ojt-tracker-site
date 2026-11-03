// Per-page <title> and description. scripts/prerender.js writes these into
// each page's HTML at build time; usePageMeta keeps them right after
// client-side navigation.
export const SITE_URL = "https://worklogtracker.site";

export const PAGES = {
  "/": {
    title: "Worklog – OJT Hours Tracker & DTR App for iPhone and Android",
    description:
      "Track your OJT hours offline. Log time-in and time-out, see your remaining hours and projected finish date, and export a PDF Daily Time Record (DTR).",
  },
  "/privacy": {
    title: "Privacy Policy – Worklog OJT Hours Tracker",
    description:
      "How Worklog handles your data: everything stays on your device, with no accounts, no ads, and no tracking.",
  },
};
