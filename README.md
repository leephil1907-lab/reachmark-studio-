# Reachmark Studio

Reachmark Studio is a modular creative workspace designed to take a campaign from brief and research through writing, visual assets, voice, and video production.

## Current implementation

- A responsive React 18 + Vite application in `apps/studio/`.
- A persistent navigation shell for Overview, Projects, Research, Scripts, Image Studio, Voice Studio, and Video Editor.
- The Reachmark design system and existing visual tokens.
- A first-brief intake interaction and clear module boundaries.
- Responsive navigation, reduced-motion support, and accessible form labels.

The current UI is the product foundation. The brief form currently runs client-side only; it does not yet save data or call generation providers. Production workflows require the backend, database, authentication, and provider adapters described below.

## Design direction

- **Character:** cinematic, editorial, precise, quietly futuristic.
- **Palette:** lime #D6F269, charcoal #101510, moss #202820, ivory #F5F6F0, sage #8A9A78.
- **Motion:** purposeful, layered, interruptible, and reduced-motion aware.
- **UX principle:** clear hierarchy and fast feedback before visual spectacle.
- **Mobile principle:** mobile is a first-class layout, not a compressed desktop.

## Repository map

- `apps/studio/` — React application and responsive workspace shell.
- `packages/design-system/` — reusable React primitives and CSS tokens.
- `docs/design-system.md` — foundations, layout, type, and component rules.
- `docs/reference-audit.md` — inspiration sources and design learnings.
- `docs/motion-system.md` — motion tokens, choreography, and fallbacks.
- `docs/accessibility-performance.md` — accessibility and performance budgets.

## Local development

Requirements: Node.js 20+ and pnpm 9+.

```bash
pnpm install
pnpm dev
```

Build and type-check:

```bash
pnpm typecheck
pnpm build
```

## Product architecture

1. **Brief and project foundation** — campaign intake, project records, brand profiles, and assets.
2. **Research engine** — audience, competitor, and trend research with source attribution.
3. **Writing engine** — hooks, scripts, captions, translations, and content variants.
4. **Media engine** — image generation, voiceover, audio, and asset management.
5. **Video engine** — storyboard, timeline, captions, render jobs, and export.
6. **Distribution** — platform connections, scheduling, publishing, and analytics.

## Production integration work remaining

- Backend API and durable database persistence.
- Authentication, workspace membership, and per-user data isolation.
- Provider adapters and secure server-side credential storage.
- Research source retrieval and citation records.
- Image, voice, and video generation jobs with progress and retry handling.
- Render storage, export delivery, and publishing integrations.
- Automated tests, accessibility checks, and deployment configuration.

No external provider is represented as connected until its credentials and live API workflow have been configured and verified.
