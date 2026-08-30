# WEB-SLINGER — An Interactive Fan Tribute

A cinematic, scroll-driven 3D site celebrating the classic "friendly
neighborhood web-slinger" archetype. Built with React + TypeScript + Vite,
GSAP/ScrollTrigger/SplitText, Lenis smooth scroll, Tailwind CSS, and React
Three Fiber for an original low-poly city + swing-trail 3D scene.

**A note on originality:** this is an unofficial, non-commercial fan
tribute. All visuals — the 3D skyline, swing-trail, rogues-gallery cards,
color palette, and copy — are original work inspired by the general
web-slinging-superhero genre. It does not reproduce any studio's official
character art, logos, suit designs, or licensed likenesses.

## Running this without a terminal on your phone

### Option A — StackBlitz (fastest)
1. Go to https://stackblitz.com
2. Start an empty Vite + React + TS template, then drag every file from
   this project into it, keeping the `src/` folder structure intact.
3. StackBlitz auto-installs dependencies and runs `npm run dev` for you.

### Option B — GitHub Codespaces
1. Create a new GitHub repo from your phone and upload all files here
   (keep the `src/` structure).
2. Open the repo → "Code" → "Codespaces" → "Create codespace on main".
3. In the in-browser terminal:
   ```
   npm install
   npm run dev
   ```
4. Open the forwarded port when prompted.

### Option C — Replit
1. Create a new Replit → "Import from GitHub" (after Option B), or a
   Node.js template with the files uploaded.
2. Run:
   ```
   npm install
   npm run dev -- --host 0.0.0.0
   ```
3. Open the webview panel.

## Local commands (once on any of the above)

```
npm install       # install dependencies
npm run dev        # start dev server at http://localhost:5173
npm run build       # production build to /dist
npm run preview     # preview the production build
```

## Project structure

```
src/
  components/
    Hero.tsx              full-viewport hero, SplitText headline, 3D scene
    HeroScene.tsx           original R3F scene: low-poly skyline + swing-trail
    RoguesShowcase.tsx      pinned vertical→horizontal rogues-gallery scroll
    OriginStory.tsx          pinned multi-step origin narrative
    Powers.tsx                glass panels with cursor-tilt
    Counters.tsx              animated stat counters (light "ledger" section)
    Footer.tsx                 oversized-text transition + tip-line CTA
    Navbar.tsx                 transparent → glass navbar on scroll
    CustomCursor.tsx           desktop web-shooter crosshair cursor
    ScrollProgress.tsx         hairline scroll progress indicator
    Grain.tsx                   fixed film-grain overlay
  lib/lenis.ts                 Lenis + GSAP ScrollTrigger sync
  hooks/useScrollVelocity.ts    scroll-velocity hook
  data/content.ts                rogues, powers, and stats content
  index.css                      design tokens, glass/grain/cursor/web-pattern
  App.tsx                        assembles all sections
```

## Notes

- Respects `prefers-reduced-motion`.
- Custom cursor only activates on fine-pointer devices (desktop).
- All animation uses `transform`/`opacity` for GPU-friendly 60fps scroll.
- Could not run `npm install`/build in the environment this was authored
  in (no network access there), so give `npm run dev` a try early after
  import in case anything needs a small tweak.
