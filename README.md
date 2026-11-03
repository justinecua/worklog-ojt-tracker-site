# Worklog – OJT Progress Tracker (website)

The landing page for **Worklog**, an offline app that helps students track their OJT (on-the-job training) hours.

**Live site:** [worklogtracker.site](https://worklogtracker.site)

**Get the app:**
[App Store](https://apps.apple.com/us/app/worklog-ojt-progress-tracker/id6824965877) ·
[Google Play](https://play.google.com/store/apps/details?id=com.justinecua.worklog)

## About the app

Worklog lets OJT students and interns:

- Log time-in and time-out for morning and afternoon sessions
- See hours completed, hours remaining, and a projected finish date
- Export a PDF Daily Time Record (DTR) ready to submit
- Back up and restore their logs

It works fully offline, with no account, no ads, and no tracking.

This repository contains only the website, not the mobile app.

## Tech stack

- [React 19](https://react.dev) and [Vite](https://vite.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- [React Router](https://reactrouter.com)
- Pages are pre-rendered to static HTML at build time for SEO
- Served by nginx in Docker

## Running locally

Requires Node.js 22 or later.

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:5173.

## Building

```bash
npm run build     # outputs to dist/
npm run preview   # serves the built site locally
```

`npm run build` does three things:

1. Builds the client bundle with Vite.
2. Builds a server bundle from `src/entry-server.jsx`.
3. Runs `scripts/prerender.js`, which renders each route to static HTML (`dist/index.html`, `dist/privacy.html`) with its own title, description and canonical URL.

To add a page, add its route in `src/App.jsx` and its title and description in `src/constants/seo.js`. Then add its URL to `public/sitemap.xml`.

## Deploying with Docker

```bash
docker compose up -d --build
```

This builds the site and serves it with nginx on `127.0.0.1:8090`. Put a reverse proxy (such as Cloudflare or a host-level nginx) in front of it for the public domain.

## Project structure

```
src/
  components/      Page sections (Hero, Features, FAQ, ...)
  pages/           Home and Privacy pages
  constants/       App links and per-page SEO metadata
  hooks/           usePageMeta (updates the title on navigation)
  entry-server.jsx Server entry used for pre-rendering
scripts/
  prerender.js     Writes static HTML for each route after the build
public/            Icons, manifest, robots.txt, sitemap.xml
```

## Contact

Questions or suggestions: [jcua.dev@gmail.com](mailto:jcua.dev@gmail.com)

## License

[MIT](LICENSE) © 2026 Justine Cua
