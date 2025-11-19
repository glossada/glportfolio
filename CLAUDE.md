# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a no-build Vue 3 portfolio project designed to work with Node 12.x. It uses Vue 3.5.13, Vue Router, and vue3-sfc-loader from CDN, with SCSS compiled in the browser at runtime.

## Development Commands

**Start development server:**
```bash
# Use VS Code Live Server extension: Right-click index.html → "Open with Live Server"
# Or use any static file server
```

There is no build process. The page hot-reloads automatically when editing `.vue` or `.scss` files.

## Architecture

### Runtime Compilation System

**SCSS Compilation (src/main.js:2-61):**
- SCSS is compiled in the browser using `sass` from jspm.dev
- Entry point: `src/styles/index.scss` (forwards all style modules)
- Custom importer handles `@use`/`@forward` with HTTP URLs
- Supports SCSS partials (files prefixed with `_`)
- Compiled CSS is injected into `<head>` with `data-origin="scss:global"`

**Vue SFC Loading:**
- Uses `vue3-sfc-loader` to load `.vue` files at runtime
- Shared `SFC_OPTIONS` configuration in `src/router/index.js:7-19`
- Components use `defineAsyncComponent` with `loadModule` for lazy loading
- No compilation step required; components load on demand

### Router Configuration

- Uses hash-based routing (`createWebHashHistory`)
- Routes defined in `src/router/index.js:27-34`
- All route components loaded lazily via `loadModule`
- 404 handling via catch-all route pattern

### File Organization

**Styles (`src/styles/`):**
- `index.scss` - Entry point that forwards all modules
- `variables.scss` - Breakpoints, media query mixin, font variables, colors
- `main.scss` - Global base styles
- Component/view-specific SCSS files (e.g., `NavBar.scss`, `homeView.scss`)

**Components (`src/components/`):**
- Shared UI components (e.g., `NavBar.vue`, `BaseButton.vue`)
- Loaded asynchronously using `defineAsyncComponent` and `loadModule`

**Views (`src/views/`):**
- Route-level components (e.g., `HomeView.vue`, `ExperienceView.vue`)
- Access to global `window.SFC_OPTIONS` for nested component loading

### Global Variables

- `window.SFC_OPTIONS` - Exposed in main.js:70 for component loading throughout the app
- `window.Vue` - Vue 3 from CDN
- `window.VueRouter` - Vue Router from CDN
- `window['vue3-sfc-loader']` - SFC loader from CDN

### Styling System

**Media queries (variables.scss:10-35):**
Use the `@include media()` mixin with breakpoint names:
- `xxs` (max 359px)
- `xs` (max 767px)
- `s` (411px - 767px)
- `sm` (767px - 1023px)
- `md` (1023px - 1200px)
- `lg` (1200px+)
- `xl` (1400px+)
- `dsk` (1023px+)

**Font variables:** Multiple font family variables defined in variables.scss:38-54

**Color scheme:** Dark theme with `$bg: #0f1220`, `$text: #e7e9f5`, `$primary: #5b7cff`

## Important Constraints

- **Node 12 compatibility required** - Do not use modern JavaScript features unsupported in Node 12
- **No build tools** - All compilation happens in browser at runtime
- **CDN-based dependencies** - Vue, Router, and SFC loader loaded from CDN
- **Static hosting focused** - For production bundle/SSR, migration to Vite/Nuxt with newer Node is recommended

## Adding New Routes

1. Create new view component in `src/views/`
2. Import component in `src/router/index.js` using `loadModule`
3. Add route definition to routes array
4. Create corresponding SCSS file in `src/styles/` if needed
5. Forward new SCSS file in `src/styles/index.scss`

## Adding New Components

1. Create `.vue` file in `src/components/`
2. Import in parent using `defineAsyncComponent(() => loadModule('/path/to/Component.vue', window.SFC_OPTIONS))`
3. Component SCSS can be scoped or added as separate file in `src/styles/`
