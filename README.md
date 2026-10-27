# Reachmark Studio

**Phase 1 — Design foundation & reusable UI primitives**

Reachmark Studio is being developed as a brief-to-finished-video pipeline. This repository starts with a reusable design system, not a finished marketing website or dashboard.

## Design direction
- **Character:** cinematic, editorial, precise, quietly futuristic.
- **Palette:** lime #D6F269, charcoal #101510, moss #202820, ivory #F5F6F0, sage #8A9A78.
- **Motion:** purposeful, layered, interruptible, and reduced-motion aware.
- **UX principle:** clear hierarchy and fast feedback before visual spectacle.
- **Mobile principle:** mobile is a first-class layout, not a compressed desktop.

## Repository map
- docs/design-system.md — foundations, layout, type, component rules.
- docs/reference-audit.md — inspiration sources and what to learn from each.
- docs/motion-system.md — motion tokens, choreography, fallbacks.
- docs/accessibility-performance.md — accessibility and speed budgets.
- packages/design-system/ — initial reusable React primitives and CSS tokens.

## Current scope
Phase 1 deliberately excludes a complete website, real video generation, publishing integrations, account flows, and backend orchestration. Those should be built only after the foundation is reviewed.

## Getting started
Requirements: Node.js 20+ and pnpm 9+.

    pnpm install
    pnpm --filter @reachmark/design-system typecheck

The package is intentionally small and dependency-light. Motion primitives use CSS first; heavier 3D and shader libraries should be lazy-loaded only where they materially improve the experience.

## Phases
1. Design system and reusable UI primitives.
2. Motion prototypes and responsive interaction tests.
3. Storyboard schema and rendering pipeline.
4. Voice, captions, render orchestration, and publishing adapters.
5. Product UI and integrations.

## Status
Phase 1 foundation in progress. This repository should not be considered production-ready until type checks, accessibility checks, and visual regression tests are added and run.
