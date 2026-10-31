# artemis-design

A flat, minimal, **CSS-only** design system extracted from the Artemis homelab dashboard. No JavaScript, no build step required to use it.

**Principles:** no gradients, shadows or radii (except the status dot) · 1px hairlines for structure · mono for labels/data, sans for UI, serif italic for quotes · hierarchy via text color, not weight · one accent color, for status only.

## Install

Pick one:

```html
<!-- CDN (pin a tag) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jkotra/artemis-design@v0.1.0/dist/artemis.min.css">
```

```html
<!-- or vendor a copy: save dist/artemis.min.css into your project -->
<link rel="stylesheet" href="artemis.min.css">
```

```bash
# or as a dependency, then @import "artemis-design/dist/artemis.css";
npm install github:jkotra/artemis-design#v0.1.0
```

## Use

```html
<body class="art-page">
  <div class="art-stack">
    <header class="art-header">
      <span class="art-header__title">myservice</span>
      <span class="art-status"><span class="art-status__dot"></span><span>online</span></span>
    </header>

    <div class="art-meter">
      <div class="art-meter__head"><span class="art-meter__label">CPU</span><span class="art-meter__value">42%</span></div>
      <div class="art-meter__track"><div class="art-meter__fill" style="width:42%"></div></div>
    </div>
  </div>
</body>
```

See [`docs/index.html`](docs/index.html) for the full style guide with every component and copy-paste markup.

## Components

| Class | Purpose |
|---|---|
| `art-header`, `art-header__title` | Page header with hairline underline |
| `art-status`, `__dot`, `__icon`, `--positive` | Status indicator |
| `art-topbar`, `__inner`, `__title`, `__links` | Fixed, blurred navigation bar |
| `art-link`, `art-sep` | Muted nav links and separators |
| `art-meter`, `__head`, `__label`, `__value`, `__pct`, `__track`, `__fill` | Flat 3px meter |
| `art-meters`, `art-stats` | Meter group and stat footer row |
| `art-footer`, `art-quote`, `art-note` | Footer, serif quote, small note |
| `art-page`, `art-page--with-topbar`, `art-stack` | Optional page layout |
| `art-mono`, `art-muted`, `art-dim` | Utilities |

## Theming

Everything is a CSS custom property (see [`src/tokens.css`](src/tokens.css)). Override in `:root`:

```css
:root { --color-positive: #38bdf8; --font-mono: "Berkeley Mono", monospace; }
```

Dark is the default. Set `<html data-theme="light">` for the light theme.

## Development

```bash
npm run build   # src/ -> dist/ (+ docs/artemis.css); no dependencies
```

`dist/` is committed so CDN/vendor use works straight from a tag. Class names and tokens are the public API; they follow semver.

## License

MIT
