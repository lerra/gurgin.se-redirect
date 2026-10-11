# gurgin-redirect

Serves nothing but a 302 redirect to
<https://sv.wikipedia.org/wiki/Gurg%C3%AEn_Bakircioglu>, for every path and
every HTTP method.

Stack: Astro 7 + `@astrojs/cloudflare`, deployed by Cloudflare Workers Builds on
push to `main`.

## Local

```bash
npm install
npm run dev
curl -sI http://localhost:4321/ | head -3
curl -sI http://localhost:4321/a/b | head -3   # no trailing slash: must also 302
```

## Notes

- `trailingSlash: "ignore"` is deliberate. With `"always"` (as on gurgin.se),
  paths without a trailing slash 404 instead of redirecting.
- `wrangler.jsonc` exists only to stop Workers Builds running
  `astro add cloudflare` and rewriting `astro.config.mjs` in the build
  container. The adapter writes the real `dist/server/wrangler.json` (with
  `main` and `assets`) at build time.
