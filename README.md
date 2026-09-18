# jessphoa.com

Static portfolio site, ported from Webflow (previously hosted at jessphoa.webflow.io) for deployment on GitHub Pages. This is a straight port: the original Webflow-generated HTML, CSS, and JS are unmodified except for rewriting asset URLs to local, document-relative paths.

## Structure

```
index.html
about/index.html
resume/index.html
work/
  postscript/index.html
  gladly/index.html
  chartbeat/index.html
  mastercard/index.html
  scramble-heart-city/index.html
  student-work/index.html
  pro-bono/index.html
assets/
  css/   shared Webflow stylesheet + a small badge-hiding override
  js/    Webflow runtime bundles + jQuery
  img/   all site images
  files/ resume PDF
```

Each page lives at its original URL path (e.g. `/work/gladly`). All asset references use relative paths (no leading `/`), so the site works both at the root of a custom domain and under a subpath like `[username].github.io/[repo]`.

Fonts (Besley, Figtree, Source Code Pro) are not bundled locally — they still load from Google Fonts via Webflow's webfont loader script, unchanged from the original.

## Local preview

From the repo root:

```
python3 -m http.server
```

Then open `http://localhost:8000`.

## Deployment

In the repo's GitHub Settings → Pages, set the source to the branch this is on, with the root (`/`) as the publish directory. No build step is required — this is already a static site.

## Known items to review

See the handoff notes for a list of remaining references to `jessphoa.webflow.io` / `website-files.com` (Webflow-internal `data-wf-*` attributes, the `og:image`/`twitter:image` social-share image, and a `preconnect` hint) that were intentionally left unchanged pending your decision, plus a note on the "Made in Webflow" badge.
