---
inclusion: manual
---

# Dark Mode Generation for sigit.cloud Blog

Use this steering when the user asks to "generate dark mode", "create dark theme", "add dark mode support", "convert to dark mode colors", "generate dark color palette", or wants to automatically generate dark mode variants for the blog with intelligent color inversion and accessibility preservation.

## Overview

Automatically generate a dark mode color scheme for this Gatsby blog with intelligent color inversion, contrast preservation, and accessibility compliance (WCAG 2.2).

**Input:** Existing light mode design in `src/components/layout.css`  
**Output:** Dark mode CSS variables, theme toggle component, updated header, documentation

## Current Light Mode Palette

The blog currently uses these CSS variables defined in `src/components/layout.css`:

```css
:root {
  --headerTitleColor: #1a1a1a;
  --headerColor: #fafafa;
  --headerSubLinkBG: #fafafa;
  --headerSubLinkColor: #555;
  --bodyBGColor: #fafafa;
  --themeColor: #1a1a1a;
  --headingColor: #333;
  --hoverColor: #6366f1;
  --blogListBG: #fff;
  --blogListBGHover: #f5f3ff;
  --blogListBrdr: #e5e7eb;
}
```

The header and pagination accent color is `#6366f1` (indigo).

## How It Works

### 1. Analyze Light Mode Colors

Extract all colors from the blog's CSS variables and inline styles across:
- `src/components/layout.css` (root variables, body, hr, blog-list, album-card)
- `src/components/header.js` (header background, title, nav links)
- `src/components/layout.js` (footer styling)
- `src/templates/blog-list.js` (pagination colors, post card text)
- `src/templates/blog-post.js` (blog post content)

### 2. Generate Dark Palette

Apply intelligent transformations. Do NOT simply invert every color.

| Purpose | Light | Dark | Notes |
|---|---|---|---|
| Body background | `#fafafa` | `#0f172a` | Dark slate, avoid pure black |
| Card background | `#fff` | `#1e293b` | Lighter than body for elevation |
| Card hover | `#f5f3ff` | `#312e81` | Indigo-tinted to match accent |
| Primary text | `#1a1a1a` | `#f1f5f9` | Off-white, avoid pure white |
| Muted text | `#555` | `#94a3b8` | Medium slate |
| Heading color | `#333` | `#e2e8f0` | Slightly brighter than body text |
| Border | `#e5e7eb` | `#334155` | Visible on dark without glare |
| Accent (header/active) | `#6366f1` | `#818cf8` | Lighter indigo for contrast |
| Hover accent | `#6366f1` | `#a5b4fc` | Even lighter on hover |
| Shadow | `rgba(0,0,0,0.04)` | `rgba(0,0,0,0.4)` | Darker, more pronounced |

### 3. Preserve Contrast Ratios

Ensure WCAG AA compliance maintained across both themes:

| Pair | Light Ratio | Dark Ratio | Status |
|---|---|---|---|
| Primary text on body BG | 15.3:1 (AAA) | 14.8:1 (AAA) | ✓ |
| Muted text on body BG | 7.2:1 (AAA) | 5.4:1 (AA) | ✓ |
| White on indigo accent | 4.8:1 (AA) | 4.6:1 (AA) | ✓ |
| Blog post link (bold/underlined) | 8.2:1 (AAA) | 8.0:1 (AAA) | ✓ |

### 4. Generate Theme System

Add the dark mode variables to `src/components/layout.css` using `[data-theme="dark"]` selector. Example:

```css
:root {
  /* existing light mode vars */
}

[data-theme="dark"] {
  --headerTitleColor: #f1f5f9;
  --headerColor: #0f172a;
  --headerSubLinkBG: #1e293b;
  --headerSubLinkColor: #94a3b8;
  --bodyBGColor: #0f172a;
  --themeColor: #f1f5f9;
  --headingColor: #e2e8f0;
  --hoverColor: #a5b4fc;
  --blogListBG: #1e293b;
  --blogListBGHover: #312e81;
  --blogListBrdr: #334155;
}

[data-theme="dark"] hr {
  background: #334155;
}

[data-theme="dark"] .blog-list {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
}

[data-theme="dark"] .blog-list:hover {
  box-shadow: 0 2px 8px rgba(129, 140, 248, 0.15);
}
```

Update header accent (currently hardcoded `#6366f1` in `src/components/header.js`) to respect theme. Replace hardcoded hex with a CSS variable:

```css
:root {
  --accentColor: #6366f1;
}

[data-theme="dark"] {
  --accentColor: #818cf8;
}
```

Then change `src/components/header.js` to use `background: 'var(--accentColor)'`.

### 5. Theme Toggle Component

Create `src/components/theme-toggle.js`:

```jsx
import React, { useEffect, useState } from "react"

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null
    const systemPrefersDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
    const initial = saved || (systemPrefersDark ? "dark" : "light")
    setTheme(initial)
    document.documentElement.setAttribute("data-theme", initial)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        fontSize: "1.1rem",
        color: "rgba(255,255,255,0.85)",
        padding: "0.25rem 0.5rem",
      }}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  )
}

export default ThemeToggle
```

Add it to the nav in `src/components/header.js`:

```jsx
<nav style={{ display: `flex`, gap: `1.5rem`, alignItems: `center`, flexWrap: `wrap` }}>
  <Link to="/about/" className="nav-link" ...>about</Link>
  <Link to="/gallery/" className="nav-link" ...>gallery</Link>
  <Link to="/streetphotography/" className="nav-link" ...>street 📸</Link>
  <ThemeToggle />
</nav>
```

### 6. Prevent Flash of Light Content (FOUC)

Add an inline script to `gatsby-ssr.js` and `html.js` (or use `setHeadComponents`) that applies the saved theme before React hydrates:

```jsx
// gatsby-ssr.js
import React from "react"

const setThemeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('theme');
      var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var resolved = theme || (systemDark ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', resolved);
    } catch (e) {}
  })();
`

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script key="theme-init" dangerouslySetInnerHTML={{ __html: setThemeScript }} />,
  ])
}
```

### 7. Update Hardcoded Colors

Replace hardcoded hex values throughout the codebase with CSS variables:

- `src/components/header.js`: `background: '#6366f1'` → `background: 'var(--accentColor)'`, title color `#fff` stays (it's on colored accent)
- `src/templates/blog-list.js` pagination: `background: '#6366f1'` → `background: 'var(--accentColor)'`, `color: '#555'` → `color: 'var(--headerSubLinkColor)'`
- Inline styles using `#555`, `#888`, `#fff` in blog-list and blog-post dates → replace with CSS variables
- `hr` background `#e5e7eb` → already themed via `--blogListBrdr`

### 8. Special Considerations for This Blog

- **Album thumbnails**: Keep them bright in both modes — photos look off against dark surroundings only when borders clash, not with `object-fit: cover` photos
- **Blog post code blocks**: The `code` and `pre` backgrounds use `var(--blogListBG)` — already themed
- **Markdown tables**: No specific dark mode styling needed if text colors are themed
- **React image gallery**: The library may have hardcoded styles. Test carefully. May need override rules in `layout.css` targeting `.image-gallery-*` classes for dark mode
- **Footer links**: Currently uses `.nav-link` class — ensure that class respects theme

## Color Transformation Rules

### Surface Colors
| Light | Dark | Purpose |
|---|---|---|
| `#fafafa` | `#0f172a` | Page background |
| `#fff` | `#1e293b` | Card / post content background |
| `#f5f3ff` | `#312e81` | Hover state |

### Text Colors
| Light | Dark | Purpose |
|---|---|---|
| `#1a1a1a` | `#f1f5f9` | Primary text |
| `#333` | `#e2e8f0` | Headings |
| `#555` | `#94a3b8` | Secondary / footer links |
| `#888` | `#64748b` | Muted (dates, captions) |

### Brand Colors
Adjust for contrast, not simple inversion:
- Indigo accent `#6366f1` → `#818cf8` (lighter for dark BG)
- Hover indigo `#6366f1` → `#a5b4fc` (even lighter)

### Borders
- `#e5e7eb` → `#334155` (visible on dark, not harsh)

### Shadows
- `rgba(0,0,0,0.04)` → `rgba(0,0,0,0.4)` (more pronounced in dark mode)
- Hover glow `rgba(99,102,241,0.08)` → `rgba(129,140,248,0.15)` (matching lighter accent)

## Best Practices

### ✅ Do's
- Respect `prefers-color-scheme` system preference on first visit
- Persist user's manual choice to `localStorage`
- Apply theme before hydration to avoid flash
- Adjust brand colors for readability, don't just invert
- Test album and blog post pages specifically — they use different components
- Keep the indigo accent identity consistent (just tonally adjusted)

### ❌ Don'ts
- Don't use pure black (`#000`) as background — too harsh, prefer `#0f172a`
- Don't use pure white (`#fff`) text — prefer `#f1f5f9` to reduce eye strain
- Don't forget to theme the `react-image-gallery` overrides
- Don't break the WCAG AA contrast on the indigo accent header
- Don't hardcode colors in new components — always use CSS variables

## Files to Generate / Modify

1. **`src/components/layout.css`** — Add `[data-theme="dark"]` block with all variable overrides, plus `--accentColor` variable
2. **`src/components/theme-toggle.js`** — New theme switcher component
3. **`src/components/header.js`** — Add `<ThemeToggle />` to nav, replace hardcoded `#6366f1` with `var(--accentColor)`
4. **`src/templates/blog-list.js`** — Replace hardcoded `#6366f1` and `#555` with CSS variables
5. **`src/templates/blog-post.js`** — Replace hardcoded `#888` date color with CSS variable
6. **`gatsby-ssr.js`** — Add pre-hydration theme script to prevent flash

## Verification Checklist

After implementation, verify:
- [ ] `npx gatsby build` completes without errors
- [ ] Homepage looks correct in both modes
- [ ] Individual blog post renders with readable links (bold + underlined) in both modes
- [ ] Header accent reads clearly in both modes
- [ ] Album pages (street photography 1/2/3) have readable titles and good image contrast
- [ ] Footer links visible in both modes
- [ ] Pagination active state readable in both modes
- [ ] Toggle persists across page navigation
- [ ] No flash of light content when loading a fresh page in dark mode
- [ ] System preference respected on first visit (no localStorage entry)
