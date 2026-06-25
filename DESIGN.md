---
name: Ascendant Leadership
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#434654'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#737685'
  outline-variant: '#c3c6d6'
  surface-tint: '#0c56d0'
  primary: '#003d9b'
  on-primary: '#ffffff'
  primary-container: '#0052cc'
  on-primary-container: '#c4d2ff'
  inverse-primary: '#b2c5ff'
  secondary: '#845400'
  on-secondary: '#ffffff'
  secondary-container: '#ffad2f'
  on-secondary-container: '#6c4400'
  tertiary: '#314368'
  on-tertiary: '#ffffff'
  tertiary-container: '#495a81'
  on-tertiary-container: '#c1d2ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b2c5ff'
  on-primary-fixed: '#001848'
  on-primary-fixed-variant: '#0040a2'
  secondary-fixed: '#ffddb5'
  secondary-fixed-dim: '#ffb958'
  on-secondary-fixed: '#2a1800'
  on-secondary-fixed-variant: '#643f00'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#b4c6f3'
  on-tertiary-fixed: '#051a3e'
  on-tertiary-fixed-variant: '#35466c'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style
The design system is engineered to evoke a sense of high-stakes precision, institutional trust, and forward-moving momentum. It targets high-level entrepreneurs with an aesthetic that balances corporate stability with the dynamic energy of modern African leadership.

The visual style is **Corporate / Modern** with a focus on high-density clarity. It utilizes a structured "Swiss" influence—heavy on grid alignment and purposeful white space—while incorporating vibrant accent hits to represent innovation and success. The emotional response is one of "attainable excellence": professional enough to be taken seriously by global investors, yet energetic enough to inspire the next generation of founders.

## Colors
The palette is dominated by **Electric Blue**, used as the foundational color for navigation, primary actions, and structural branding. This is complemented by **Saffron Gold** (#F4A424), a warm, prestigious accent used exclusively for high-priority Call-to-Actions and success indicators.

- **Primary:** Electric Blue is the voice of authority and technology.
- **Accent:** Saffron Gold provides warmth and represents the "Gold Standard" of entrepreneurship.
- **Neutral High:** A Deep Navy (#091E42) is used for text and heavy structural elements to provide better contrast than pure black.
- **Neutral Low:** Clean White and very light cool greys (#F4F5F7) define the container backgrounds to maintain a "breathable" high-end feel.

## Typography
The typography strategy pairings emphasize strength and readability. **Montserrat** is used for headings to provide a geometric, confident, and modern architectural feel. **Inter** is utilized for all functional text, offering superior legibility in data-heavy entrepreneurial dashboards and long-form training modules.

Headlines should use tight letter-spacing to appear more impactful and "locked-in." Body text uses a generous line height (1.5x - 1.6x) to ensure the educational content is easy to digest. Labels utilize uppercase styling with slight tracking to differentiate metadata from body content.

## Layout & Spacing
The design system employs a **Fixed Grid** model for desktop to maintain a premium "editorial" feel, transitioning to a fluid model for mobile devices. 

- **Grid:** A 12-column grid is standard for desktop.
- **Rhythm:** An 8px linear scale governs all padding and margin decisions. 
- **Vertical Spacing:** Section spacing should be generous (80px to 120px) to allow the "African leadership" imagery and bold headlines room to breathe.
- **Mobile Reflow:** On mobile, 3-column desktop layouts stack vertically, while 2-column layouts may persist if the content is visual (e.g., small metric cards).

## Elevation & Depth
Depth is communicated through **Tonal Layers** and **Ambient Shadows**. Surfaces do not use heavy gradients; instead, hierarchy is created by placing white "cards" on slightly grey backgrounds (#F4F5F7).

Shadows are used sparingly to indicate interactivity. A "Level 1" shadow (4px blur, 5% opacity) is used for static cards, while a "Level 2" shadow (12px blur, 10% opacity) is applied on hover or for active modal elements. This creates a tactile, responsive feel without cluttering the clean corporate aesthetic.

## Shapes
The shape language is defined by **Rounded** corners. This softens the "aggressive" nature of a high-end corporate system, making it feel more approachable and modern. 

- Standard components (inputs, small buttons) use `rounded-md` (8px).
- Large containers and feature cards use `rounded-lg` (16px).
- This consistent radius ensures the UI feels cohesive and prevents it from appearing too "industrial" or sharp.

## Components
- **Buttons:** Primary buttons use the Saffron Gold with high-contrast Navy text for maximum "clickability." Secondary buttons use Electric Blue with white text. Tertiary buttons are ghost-style with an Electric Blue outline.
- **Input Fields:** Use a 1px solid border (#D1D5DB) with a subtle 4px internal padding. Focus states should transition to a 2px Electric Blue border with a soft blue outer glow.
- **Cards:** White background, 8px corner radius, and Level 1 shadow. Headers within cards should use Montserrat Medium.
- **Chips/Badges:** Small, high-contrast labels for "Status" or "Module Category." Use light tints of the primary color with dark text.
- **Progress Indicators:** Linear bars using Electric Blue for the "fill" and a light grey track, essential for tracking training progress.
- **Success States:** Use a deep green accent, but maintain Saffron Gold for "Achievements" or "Certifications" to keep the brand's reward-loop consistent.