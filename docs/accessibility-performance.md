# Accessibility & Performance Gates

## Accessibility baseline
- Semantic HTML before custom roles.
- Full keyboard operation; no hover-only actions.
- Visible focus styles and logical focus order.
- Labels and useful error messages for form controls.
- Status messages available to assistive technology.
- Do not use color alone to convey state.
- Interactive targets aim for 44 × 44 CSS px on touch layouts.
- Text contrast target: WCAG AA (4.5:1 normal text, 3:1 large text and essential UI graphics).
- Respect prefers-reduced-motion and zoom/reflow.
- Dialogs must manage focus, close on Escape when appropriate, and restore focus to the opener.
- Carousels must not auto-advance by default; if that changes, provide a pause control.

## Performance budgets (initial targets, not measured results)
- Keep core UI usable without WebGL.
- Avoid shipping Three.js to every route by default; lazy-load scenes.
- Avoid large animation libraries for simple transitions.
- Prefer compressed images and responsive image sizes.
- Avoid layout-affecting animations and large continuous blur effects.
- Keep third-party scripts out of the critical rendering path.
- Reserve image/video dimensions to prevent layout shift.
- Measure on a real mid-range Android device as well as desktop.

## Suggested release checks
- TypeScript strict typecheck.
- Linting and formatting.
- Unit tests for stateful components.
- Keyboard walkthrough for navigation, menus, dialog, carousel, and forms.
- Automated accessibility scan plus manual screen-reader checks.
- Reduced-motion test.
- Lighthouse or equivalent on a representative route.
- Mobile network/CPU throttling and no horizontal overflow at 320px.
- Verify no secrets, credentials, or generated media are committed.
