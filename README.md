# Zaban Land Armani

Persian-first English-learning website with a forest theme, 20 interactive A1 lessons, placement assessment, vocabulary notebook, progress, and light/dark themes.

## Deploy to Vercel from GitHub

1. Extract `ZabanLandArmani.zip`.
2. Upload the extracted files and folders to the **root** of a new GitHub repository. `package.json`, `vite.config.ts`, and `vercel.json` must be at the repository root, not inside an extra folder.
3. Import that repository into Vercel.
4. Keep the root directory at the repository root. The included `vercel.json` sets the framework to **Other**, installs with `bun install --frozen-lockfile`, builds with `bun run build`, and uses `.vercel/output`.
5. Use **Node.js 22.x**. No environment variables or API keys are required for the existing features.
6. Click **Deploy**. After deployment, check `/`, `/levels`, `/placement`, and `/lesson/sounds`.

Do not override this export with an ordinary static Vite deployment: it includes server-rendered pages. The Vercel preset emits the static assets and server functions together.

## Run locally

Install Node.js 22 and Bun, then:

```sh
bun install --frozen-lockfile
bun run dev
```

## Tests

```sh
bun run test
```

## Included and excluded

All website source, images, public assets, configuration, dependency lockfile, and tests are included. Repository metadata, Lovable project metadata, installed dependencies, temporary files, and generated build output are intentionally excluded. Dependencies and deployment output are recreated during installation and build.

## Current limitations

This archive exports the website as it exists; it does not add missing product features. Progress, goals, favorites, and theme are session-only and reset on refresh. Hosted login, permanent progress storage, AI conversations, timed spaced repetition, adaptive weak-area analysis, multi-day streaks, and community features are not implemented. Speech synthesis/recognition depend on browser support, permissions, and available English voices; microphone recognition is not guaranteed on all devices. The Persian font is loaded from Google Fonts, with a sans-serif fallback.

## Technical stack

React 19, TypeScript, TanStack Start, Tailwind CSS v4, Vite, and Nitro's Vercel deployment preset. This export retains the Lovable configuration package as a build dependency; no Lovable account or private key is needed to run the existing application.
