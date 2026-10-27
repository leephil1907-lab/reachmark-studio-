# Motion System v0.1

## Intent
Motion should explain hierarchy, state change, continuity, or spatial relationships. It should not make routine tasks feel slower. Prefer opacity and transform over animating layout dimensions, blur, or large shadows.

## Timing tokens
| Token | Duration | Typical use |
| --- | ---: | --- |
| Fast | 140ms | Press, focus, small hover response |
| Base | 220ms | Button, border, surface response |
| Slow | 420ms | Drawer, popover, scene transition |
| Ambient | 8–24s | Background light/particle drift |

Use cubic-bezier(0.2, 0.75, 0.25, 1) for direct interactions and cubic-bezier(0.16, 1, 0.3, 1) for entrances. Ambient loops must be low contrast and nonessential.

## Choreography
1. **Orient:** page shell and heading are visible immediately.
2. **Reveal:** main content enters as a single group or small stagger.
3. **Focus:** one key item receives visual emphasis.
4. **Respond:** action feedback begins within one frame where possible.
5. **Settle:** motion stops cleanly; never loop a loading animation after completion.

## Background wallpaper
Use layered CSS gradients as the default. A WebGL/Three.js shader is an enhancement, not a requirement. Background motion must stay behind content, avoid high-frequency noise and large luminance changes, pause when hidden/offscreen, offer a static fallback, and respect reduced-motion settings.

## 3D motion
- One focal object or small scene cluster is usually enough.
- Keep camera movement slow; user interaction should be optional.
- Never require pointer movement to understand the scene.
- Prefer a poster on mobile/low-power contexts when the scene is decorative.
- Load scenes near the viewport and release GPU resources on unmount.
- Never put essential controls inside a 3D canvas.

## Transition patterns
- Page: 120–220ms opacity/translate.
- Modal/popover: 160–240ms fade plus 4–8px translate/scale; trap focus and return it to the trigger.
- Drawer: 220–320ms transform; support Escape and safe backdrop dismissal.
- Carousel: animate the active panel; expose labels and keyboard controls.
- Progress: animate only from real measured state; never fabricate progress.
- Loading: skeleton for known layouts, spinner for brief indeterminate operations, progress meter only when measurable.

## Reduced motion
Honor prefers-reduced-motion: reduce globally. Replace nonessential movement with instant state changes or subtle opacity changes. Status must never depend on motion alone.

## Acceptance checks
Can the user understand the action with motion disabled? Does animation avoid blocking interaction and layout shift? Is it smooth on a mid-range Android phone? Does it pause when hidden? Can decorative motion be removed without loss of meaning?
