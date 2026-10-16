# Branded PDF sources

`ai-supervision-onepager.html` is the print source for
`../Centience-AI-Supervision-Overview.pdf`. It carries the site's brand
tokens (navy `#0b1520`→`#1a2540`, gold `#e8b84b`), Plus Jakarta Sans for
display and DM Sans for body.

## Placeholders

Two tokens are substituted at build time so the committed source stays small:

- `/*__FONTS__*/` — the Google Fonts CSS with every woff2 inlined as a data URI
- `__LOGO__` — `public/assets/logo-white.png` as a data URI

Inlining both is what makes the PDF self-contained and identical on any machine.

## Building

```
# 1. fetch the two families and inline them, plus the logo
# 2. substitute the placeholders into a temp file
# 3. render
chromium --headless --disable-gpu --no-sandbox \
  --print-to-pdf=Centience-AI-Supervision-Overview.pdf --no-pdf-header-footer \
  file:///path/to/built.html
```

## Pagination

`.page` is pinned to `height:1056px` (11in at 96dpi) with `overflow:hidden`.
That is deliberate: `min-height` let a sub-pixel rounding spill push a third
blank page into the PDF.

Because overflow is hidden, **content that grows past the page is silently
clipped**. Before committing a change, re-measure — load the built file in
headless Chromium and check each page's content bottom against the footer top.
At the current copy the clearances are roughly 31px on page 1 and 60px on
page 2, so there is little slack.

Verify the finished PDF by rasterizing it (`pypdfium2`), not by screenshotting
the HTML — headless screenshots truncate the lower part of the page and will
make a correct footer look cut off.
