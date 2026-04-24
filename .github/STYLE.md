# VaultWares Design System Style Guide

This file defines VaultWares visual rules for themes, tokens, layout rhythm, and motion.

## Meta Direction

### Brand Foundation

VaultWares builds premium SaaS, desktop apps, browser extensions, and open-source libraries. Everything shares one north star.

## Mission

Protect individuals from tracking, fingerprinting, and surveillance without making tools unusable

## Priority Order

    Privacy (individuals) → 2. Security → 3. Functionality → 4. Performance → 5. Scalability → 6. Dev experience

## Tagline

Privacy first. Security in service.

## French

La confidentialité d'abord. La sécurité au service.

## Positioning

Not fear-driven security. Calm, competent tools that collect the minimum, keep it briefly, and explain clearly

Your docs are explicit: privacy and security are different. We never use "security" language to justify surveillance. That becomes the brand differentiator.
Visual Identity

Built from STYLE.md — no Matrix black, real light/dark modes, colorful but restrained.
Color System

**Dark theme (primary surfaces `#4A5459`, not pure black):**

    - Slate Base: `#4A5459`
    - Vault Cyan: `#21B8CC`
    - Signal Green: `#4ECC21`
    - Warm Gold: `#CC9B21`

**Light theme (Solarized Light inspired, whiter background):**

    - Paper: `#FDFCF7`
    - Ink: `#002B36`    
    - Accent Burgundy: `#A63D40`
    - Deep Sea Blue: `#0A2540`

**Use gradients sparingly, discreetly, never neon.**

## Typography

Per your style guide: Segoe UI Semilight as default. It's slim, elegant, and native to Windows (your WinUI 3 target). Fallbacks: Inter, system-ui.

    - Headlines: Semilight, 300-400 weight, generous tracking
    - Body: Regular 400, 16px base, 1.6 line-height
    - Code: JetBrains Mono (for dev-facing products)

## Logo

    Wordmark "VaultWares" with integrated vault-door 'A' (the cyan shape in the render)
    No lock icons floating alone — too generic in privacy space
    Versions: full color, mono slate, reversed white, 32px extension icon, favicon
    Clear space = height of the 'V' on all sides

## UI Language

    Components: Radix UI + Shadcn patterns from /components/ui — never modify directly
    Glass: Use your glass-ui library in small doses for interactive cards only
    Icons: Lucide React, 1.5px stroke, no filled security shields
    Motion: Subtle 150-200ms fades and slides. Skip animations on hardware older than 8 years

## Voice & Tone

You require English + French at minimum, plain language, and no fear-mongering.

| Do | Don't |
| --- | --- |
| "We don't track you. Here's what we store, and why." | "Military-grade encryption keeps you safe from hackers!" |
| "Turn this on if you want analytics. It's off by default." | "For your security, we collect..." |
| "Failed to save. CorrelationId: c3f9a1b" | Silent failures or stack traces in UI |

Three adjectives from your code standards: Transparent, Minimal, Competent

## Implementation Kit for Developers

This section maps directly to your tech stack:
**Tailwind config snippet** (for the current theme)

    ```ts
    export default {
        darkMode: 'class',
        theme: {
            extend: {
            colors: {
                slate: { DEFAULT: '#4A5459' },
                cyan: { DEFAULT: '#21B8CC' },
                green: { DEFAULT: '#4ECC21' },
                gold: { DEFAULT: '#CC9B21' },
                paper: '#FDFCF7',
                ink: '#002B36'
            },
            fontFamily: {
                sans: ['"Segoe UI Semilight"', 'Inter', 'system-ui']
            }
            }
        }
    }
    ```

## Folder-ready assets

    - /public/brand/logo-full.svg, logo-mono.svg, icon-32.png
    - /styles/brand.css — light/dark CSS variables
    - /components/ui/brand/ — Toast with CorrelationId pattern, privacy toggle component
    - i18n keys: brand.tagline, privacy.notice, security.explainer

## Brand Applications

    - Web app (Next.js 15): App Router layout with dark slate sidebar, paper content, cyan focus rings
    - Windows desktop (WinUI 3): MVVM views using Segoe UI Semilight, glass panels for settings
    - Browser extension: 32px vault-door icon, no permission badges in branding
    - Open-source libs: README header uses mono logo, links to privacy principles, not just security

## Code Review Checklist (Brand Edition)

**From your CONTRIBUTING.md, adapted:**

    - No personal data in screenshots or mockups
    - Light and dark mode both tested
    - All user strings via react-i18next (en/fr)
    - No new tracking pixels in marketing pages
    - CorrelationId shown in error toasts, not logs only
    - Tailwind tokens used for colors, spacing, typography
    - Do not consider hardware older than 8 years as a target.

## Core Direction

- Avoid the generic "hacker terminal" look.
- Support both `light` and `dark` modes in every product.
- Favor calm, high-legibility palettes with vivid but controlled accents.
- Prioritize clarity, accessibility, and consistency over visual noise.

## Color System

### Principles

- Base surfaces should be neutral and slightly warm/cool, not pure black.
- Accent colors should be energetic but used sparingly for hierarchy.
- Brand accents should not reduce text readability.
- Never hardcode ad-hoc hex values in app code. Use named tokens.

### Baseline Palette Guidance

- Dark foundations: charcoal or blue-gray (`#222222` to `#4A5459` family).
- Light foundations: off-white or pale neutral (`#F5F5DC` to `#FDFDFD` family).
- Accent examples: gold, cyan, burgundy, deep blue, violet, or tangerine.

### Required Token Roles

Each theme should provide these roles at minimum:

- `background`
- `surface`
- `surface_elevated`
- `text_primary`
- `text_secondary`
- `accent`
- `accent_hover`
- `border_subtle`
- `focus_ring`
- `success`
- `warning`
- `danger`

## Figma Typography

- Primary UI typeface: `Segoe UI` with light/regular/semibold weights as needed.
- Reserve heavy weights for headings and key actions only.
- Maintain readable line-height:
- Body text: `1.4` to `1.6`.
- Headings: `1.15` to `1.3`.

## Spacing and Layout Rhythm

- Use an 8px spacing base for layout and component spacing.
- Recommended scale: `4, 8, 12, 16, 24, 32, 40, 48, 64`.
- Keep sections visually breathable and avoid dense card stacks.

## Motion and Effects

- Favor subtle entrance and state transitions (`120ms` to `240ms`).
- Use easing that feels natural (`ease-out` for entry, `ease-in-out` for state).
- Avoid infinite decorative animation loops by default.
- `glass-ui` is allowed in small doses for elevated surfaces and overlays.

## Accessibility Requirements

- Body text contrast target: WCAG AA (>= 4.5:1).
- Large text and UI component contrast target: >= 3.0:1.
- Focus states must be clearly visible in both modes.
- Do not rely on color alone to communicate state.

## Security and Privacy Requirements

- Authentication and encrypted client-to-client experiences must preserve the VaultWares order of priorities: privacy first, security second, functionality third.
- For key establishment in new authentication flows or encrypted client-to-client communication flows, standardize on post-quantum cryptography with ML-KEM as the key-encapsulation mechanism.
- Do not architect these flows so the server can access, store, derive, or reconstruct the client private keys or the shared keys used to decrypt messages between two clients.
- Server participation is limited to transport, policy, public key distribution, and encapsulated key exchange artifacts unless a stricter product-specific security document says otherwise.
- Do not describe any server-mediated encryption flow as end-to-end encrypted if the server can decrypt message content or recover client-held decryption material.

## Custom Skin Catalog

Format: `mode | primary | accent`

1. `light | #F5F5DC | #800020` (Vintage Velvet)
2. `dark | #073642 | #CB4B16` (Cyberpunk Cinder)
3. `dark | #4A5459 | #D4AF37` (Golden Slate)
4. `light | #FAF9F6 | #333333` (Modern Monolith)
5. `dark | #8B0000 | #FFC0CB` (Crimson Bloom)
6. `light | #D3D3D3 | #006994` (Ocean Mist)
7. `dark | #222222 | #00FFFF` (Neon Void)
8. `dark | #4B0082 | #F28500` (Royal Tangerine)
9. `light | #FDFDFD | #800080` (Amethyst Frost)

## Figma-to-Code Expectations

- Map Figma color values to Vault theme tokens before implementing components.
- Keep spacing aligned to the 8px scale unless host app constraints require otherwise.
- Validate final screens in both light and dark modes.
- Verify contrast and focus visibility before sign-off.

---
Example of a tailwind config snippet for a theme:

    ```js
    export default {
    darkMode: 'class',
    theme: {
        extend: {
        colors: {
            vault: {
            base: '#002B36',
            slate: '#4A5459',
            light: '#FDF6E3',
            cyan: '#21B8CC',
            green: '#4ECC21',
            gold: '#CC9B21',
            burgundy: '#A63D40',
            }
        },
        fontFamily: {
            sans: ['"Segoe UI Semilight"', '"Segoe UI"', 'Inter', 'system-ui']
        },
        borderRadius: { '3xl': '1.5rem', '4xl': '2rem' }
        }
    }
    }
    ```

[metaGeneratedTheme]: https://embed.fbsbx.com/playables/view/1617702179511809/?ext=1784086792&hash=Q92gDAFPAnV3KGwn5xl4FJ8TaV8m
