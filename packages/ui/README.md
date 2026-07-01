# @pp/ui

This library was generated with [Nx](https://nx.dev).

## Tailwind CSS

This package uses Tailwind utility classes in components and expects consuming
applications to run Tailwind in their own build.

### Local development in this package

Tailwind tooling is installed in this package for local development:

- `tailwindcss`
- `@tailwindcss/postcss`
- `postcss`

If you create a local demo entry in this package, import `src/tailwind.css` in
that demo entry to enable Tailwind styles while developing components.

### Consuming `@pp/ui` from an app

Apps should install and configure Tailwind themselves. Also make sure Tailwind
scans `@pp/ui` files so classes used by this package are included.

For Tailwind v4, add an `@source` entry in your app stylesheet:

```css
@import "tailwindcss";
@source "../../../packages/ui/src/**/*.{ts,tsx}";
```

For published package consumption, point `@source` to your installed package
path (for example `../node_modules/@pp/ui/dist/**/*.js`).

## Running unit tests

Run `nx test @pp/ui` to execute the unit tests via [Vitest](https://vitest.dev/).
