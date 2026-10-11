import type { APIRoute } from "astro";

// Not prerendered: the redirect is issued by the Worker at request time.
export const prerender = false;

const TARGET = "https://sv.wikipedia.org/wiki/Gurg%C3%AEn_Bakircioglu";

// ALL catches every method, so HEAD and POST redirect too.
export const ALL: APIRoute = () =>
  new Response(null, {
    status: 302,
    headers: { Location: TARGET, "Cache-Control": "public, max-age=3600" },
  });
