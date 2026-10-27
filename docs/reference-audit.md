# Reference Audit — Phase 1

This is an interpretation guide, not a license to copy another site's code or assets. Use references to extract patterns, then implement an original Reachmark system. Confirm current licensing before reusing any code, shader, model, font, or media.

| Reference | Learn from it | Guardrail |
| --- | --- | --- |
| [Scrolltide](https://scrolltide.co/) | Scroll-led storytelling, reusable 3D sections, scene composition | Motion must support comprehension, not slow workflows |
| [Three.js](https://threejs.org/) | WebGL scenes, materials, camera/light composition | Lazy-load 3D; provide static/mobile fallback |
| [Three.js Journey](https://threejs-journey.com/) | Practical 3D implementation patterns | Learning resource, not a production dependency |
| [The Book of Shaders](https://thebookofshaders.com/) | Procedural gradients, noise, shader fundamentals | Test mobile GPUs and avoid expensive full-screen effects |
| [Shadertoy](https://www.shadertoy.com/) | Shader ideas and procedural motion studies | Check author/license; don't assume reuse rights |
| [3D Icons](https://3dicons.co/) | Dimensional icon language and visual consistency | Keep interface icons clear at 16–24px |
| [Glass](https://glass.samasante.com/) | Refraction and glass-like surfaces | Use sparingly; maintain text contrast |
| [Kinetics](https://kinetics.colorion.co/) | Micro-interactions, buttons, hover and text treatments | Keyboard and touch states matter equally |
| [Anime.js](https://animejs.com/) | Sequencing and timeline choreography | CSS is enough for simple transitions |
| [Landing Love](https://landing.love/) | Page composition, narrative pacing, hierarchy | Use patterns, not generic clones |
| [MotionSite AI](https://motionsite.ai/) | Motion-led site concepts and animation direction | Evaluate output for usability and runtime cost |
| [VIVIDSITES](https://vividsites.com/) | High-impact visual storytelling | Adapt restraint for a working creative tool |

## Proposed visual thesis
**A living darkroom for video production:** charcoal canvas, soft moss panels, lime signals, editorial type, a slow ambient light field, precise timeline markings, and carefully staged media previews. The environment feels alive, while task UI remains quiet and reliable.

## Motion motifs
- **Signal sweep:** soft lime highlight travels across a render progress track.
- **Orbit:** a few dots drift slowly behind a hero or empty state.
- **Frame reveal:** media previews reveal through a clean mask, not a bouncing entrance.
- **Timeline cascade:** scene cards enter in short staggered intervals; never animate hundreds of items.
- **Glass lift:** overlays subtly lift from the canvas and sharpen on entry.
- **Type focus:** short fade/translate for titles; avoid per-character effects in routine navigation.

## Research still required
- Verify exact current pages and mobile behavior of each reference.
- Compare animation performance under CPU/GPU throttling.
- Inspect keyboard and reduced-motion behavior.
- Confirm licensing for third-party visual assets.
- Test actual text/control contrast with an automated checker.
