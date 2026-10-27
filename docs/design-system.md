# Reachmark Studio — Design System v0.1

## Product character
**Cinematic craft, operational clarity.** The interface should feel like a professional creative studio, not a generic admin template and not a neon sci-fi game UI. Use atmospheric depth to frame the work; keep controls, status, timelines, and decisions exceptionally legible.

## Visual foundations
### Color roles
| Token | Value | Use |
| --- | --- | --- |
| Lime | #D6F269 | Primary action, active state, key progress |
| Charcoal | #101510 | Main canvas |
| Moss | #202820 | Raised panels and structural layers |
| Ivory | #F5F6F0 | Primary text |
| Sage | #8A9A78 | Secondary accents, quiet metadata |
| Muted | #A7B0A0 | Supporting text |
| Danger | #FF8C83 | Destructive/error states |
| Success | #B9E7A2 | Completed/healthy states |

Lime is a signal, not a background for every panel. Reserve it for actions and meaningful state. Never communicate status by color alone.

### Typography
- **Display:** DM Sans or a comparable contemporary grotesk; use for short headlines and major numeric moments.
- **Body/UI:** Inter or system sans; use for reading, forms, tables, and dense workflows.
- **Technical metadata:** IBM Plex Mono or system monospace for job IDs, timestamps, codec details, and status labels.
- Use optical hierarchy, not many font sizes. Display text can be expressive; UI text must remain calm and readable.
- Avoid loading multiple font weights. Prefer variable font files and font-display: swap.

### Shape and depth
- Pill shapes for action controls only; panels use 14–28px radii.
- Use thin borders and restrained ambient shadows instead of stacking many translucent layers.
- Glass surfaces are an accent for floating overlays, not the default for every card.
- Use a consistent spacing scale and align panels to a shared grid.

## Layout rules
- Set a readable content max-width and fluid page gutters.
- Use a 12-column desktop grid where complex composition benefits; collapse intentionally to 4 columns on mobile.
- Avoid horizontal overflow at 320px viewport width.
- Use sticky navigation only when it improves orientation.
- Give primary content a clear start point; don't place decorative animation over text or controls.
- Keep persistent navigation, page title, primary action, and current status in predictable locations.

## Components in the first slice
- **Button:** primary, secondary, ghost, danger; small/medium/large; disabled/loading; native keyboard behavior.
- **Surface:** default, raised, and glass tones. Interactive treatment is opt-in.
- **Skeleton:** only while corresponding content loads; match expected content shape; respect reduced motion.
- **StatusDot:** always pair status color with a text label.
- **BrandMark:** one R in a line-box frame; avoid accidentally rendering a second R in the full wordmark.

## Planned next components
Navigation and mobile drawer; text input and validation; select/dropdown with keyboard navigation; tabs; tooltip/popover; modal/dialog; toast/notification; upload dropzone; timeline/stepper; progress meter; empty/error/success states; carousel; command palette; 404; media preview frame.

Every component needs usage guidance, API contract, keyboard behavior, responsive rules, loading/disabled/error states, and at least one example before it is considered ready.

## Interaction principles
1. Give immediate feedback to every meaningful action.
2. Keep animation short for controls and longer only for scene transitions.
3. Preserve state when a modal or drawer closes if expected.
4. Confirm destructive or irreversible actions.
5. Never make hover the only way to reveal important information.
6. Keep keyboard focus visible and ordered logically.
7. Make empty states teach the next action.

## Quality gate
A component is ready only after type-checking, keyboard review, reduced-motion review, narrow viewport review, and a check that it doesn't create layout shift.
