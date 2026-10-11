import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  // redirect.gurgin.se first; gurgin.se can be attached to the same Worker later.
  site: "https://redirect.gurgin.se",
  output: "static",
  // NOT "always" — with that, /a/b (no trailing slash) 404s instead of redirecting.
  trailingSlash: "ignore",
  build: { format: "directory" },
  adapter: cloudflare(),
  session: false,
  devToolbar: { enabled: false },
});
