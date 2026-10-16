#!/usr/bin/env python3
"""Build the Centience policy set into one branded, reviewable PDF."""
import re, base64, pathlib, subprocess, sys
import markdown

SP = pathlib.Path("/tmp/claude-0/-home-user-centience-nextjs/3c94399f-c0c8-5a53-821f-4d60fbaea90c/scratchpad")
POL = pathlib.Path("/home/user/centience-nextjs/docs/policies")
OUT = pathlib.Path("/home/user/centience-nextjs/docs/policies/Centience-Policy-Set-DRAFT.pdf")

ORDER = ["00-information-security-policy", "01-access-control-policy", "02-acceptable-use-policy",
         "03-data-classification-and-handling", "04-data-retention-and-disposal",
         "05-encryption-and-key-management", "06-change-management-and-sdlc",
         "07-logging-and-monitoring", "08-incident-response-plan",
         "09-business-continuity-and-disaster-recovery", "10-vendor-and-third-party-management",
         "11-risk-management-policy", "12-onboarding-and-offboarding", "13-sub-processor-register"]

md = markdown.Markdown(extensions=["tables", "sane_lists", "attr_list"])


def strip_front_matter(text):
    """Drop the H1 and the metadata table; we render those ourselves."""
    lines = text.split("\n")
    title = next((l[2:].strip() for l in lines if l.startswith("# ")), "")
    i = next((n for n, l in enumerate(lines) if l.startswith("# ")), 0)
    rest = lines[i + 1:]
    # remove the leading metadata table and the first --- rule
    while rest and (rest[0].strip() == "" or rest[0].startswith("|")):
        rest.pop(0)
    while rest and rest[0].strip() in ("", "---"):
        rest.pop(0)
    return title, "\n".join(rest)


def meta_rows(text):
    """Pull the metadata table rows back out so we can render them as a strip."""
    rows = []
    for line in text.split("\n"):
        if not line.startswith("|"):
            if rows:
                break
            continue
        cells = [c.strip() for c in line.strip("|").split("|")]
        if len(cells) >= 2 and not set("".join(cells)) <= set("-: "):
            k = re.sub(r"\*\*", "", cells[0])
            v = re.sub(r"\*\*", "", cells[1])
            if k:
                rows.append((k, v))
    return rows


def highlight(html):
    """Make the review markers impossible to miss."""
    html = re.sub(r"\[VERIFY([^\]]*)\]", r'<span class="m verify">VERIFY\1</span>', html)
    html = re.sub(r"\[DECIDE([^\]]*)\]", r'<span class="m decide">DECIDE\1</span>', html)
    return html


sections, toc = [], []
counts = {"verify": 0, "decide": 0}

for n, slug in enumerate(ORDER, start=0):
    raw = (POL / f"{slug}.md").read_text()
    counts["verify"] += len(re.findall(r"\[VERIFY", raw))
    counts["decide"] += len(re.findall(r"\[DECIDE", raw))
    title, body = strip_front_matter(raw)
    rows = meta_rows(raw)
    md.reset()
    inner = highlight(md.convert(body))
    ref = f"{n:02d}"
    toc.append((ref, title, len(re.findall(r"\[VERIFY", raw)), len(re.findall(r"\[DECIDE", raw))))
    metahtml = "".join(
        '<div><span class="k">%s</span><span class="v">%s</span></div>'
        % (k, highlight(v.replace("`", "")))
        for k, v in rows if k.lower() not in ("parent",)
    )
    sections.append(f"""
<section class="doc">
  <div class="dochead">
    <div class="ref">{ref}</div>
    <h1>{title}</h1>
  </div>
  <div class="meta">{metahtml}</div>
  {inner}
</section>""")

def pill(cls, n):
    return '<span class="pill %s">%d</span>' % (cls, n) if n else ""


toc_rows = "".join(
    '<tr><td class="tref">%s</td><td class="tname">%s</td><td class="tm">%s</td><td class="tm">%s</td></tr>'
    % (r, t, pill("v", v), pill("d", d))
    for r, t, v, d in toc)

logo = "data:image/png;base64," + base64.b64encode(
    pathlib.Path("/home/user/centience-nextjs/public/assets/logo-white.png").read_bytes()).decode()
fonts = (SP / "fonts-inline.css").read_text()

html = f"""<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">
<title>Centience Policy Set — Draft</title>
<style>{fonts}</style>
<style>
:root{{--navy:#0b1520;--navy2:#1a2540;--gold:#e8b84b;--gold2:#f5d070;
--ink:#16203a;--body:#414c60;--muted:#6b7686;--rule:#e3e7ee;--tint:#f7f8fb;}}
@page{{size:Letter;margin:0.75in 0.8in;}}
*{{box-sizing:border-box;margin:0;padding:0;}}
html,body{{-webkit-print-color-adjust:exact;print-color-adjust:exact;}}
body{{font-family:"DM Sans",system-ui,sans-serif;color:var(--body);font-size:9.6pt;line-height:1.52;}}

.cover,.contents{{page-break-after:always;}}
.cover{{background:linear-gradient(135deg,var(--navy) 0%,var(--navy2) 100%);color:#fff;
height:9.5in;position:relative;overflow:hidden;padding:0.62in 0.6in;}}
.cover::after{{content:"";position:absolute;inset:0;opacity:.05;
background:repeating-linear-gradient(-52deg,transparent 0 46px,var(--gold) 46px 47px);}}
.cover>*{{position:relative;z-index:1;}}
.cover img{{height:34px;margin-bottom:34px;}}
.rule{{width:56px;height:3px;background:linear-gradient(90deg,var(--gold),var(--gold2));margin-bottom:16px;}}
.eyebrow{{font-size:8pt;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:var(--gold);margin-bottom:14px;}}
.cover h1{{font-family:"Plus Jakarta Sans",sans-serif;font-weight:800;font-size:34pt;line-height:1.1;
letter-spacing:-.02em;margin-bottom:14px;}}
.cover .sub{{font-size:11pt;color:rgba(255,255,255,.72);max-width:5in;line-height:1.5;}}
.warn{{margin-top:34px;padding:16px 18px;border-left:3px solid var(--gold);background:rgba(232,184,75,.09);
max-width:5.3in;}}
.warn b{{color:var(--gold2);display:block;margin-bottom:5px;font-family:"Plus Jakarta Sans",sans-serif;font-size:10pt;}}
.warn p{{font-size:9.2pt;color:rgba(255,255,255,.8);line-height:1.5;}}
.warn strong{{color:var(--gold2);}}
.coverfoot{{position:absolute;bottom:0.62in;left:0.6in;right:0.6in;font-size:8.4pt;
color:rgba(255,255,255,.45);border-top:1px solid rgba(255,255,255,.14);padding-top:11px;}}

.contents h2{{font-family:"Plus Jakarta Sans",sans-serif;font-weight:800;font-size:19pt;color:var(--ink);
margin-bottom:6px;}}
.contents .lede{{font-size:9.6pt;margin-bottom:20px;max-width:5.6in;}}
table.toc{{width:100%;border-collapse:collapse;}}
table.toc td{{padding:7px 6px;border-bottom:1px solid var(--rule);vertical-align:top;}}
.tref{{font-family:"Plus Jakarta Sans",sans-serif;font-weight:800;color:var(--gold);width:34px;font-size:9pt;}}
.tname{{color:var(--ink);font-weight:500;}}
.tm{{width:44px;text-align:right;}}
.pill{{display:inline-block;font-size:7.6pt;font-weight:700;padding:1.5px 7px;border-radius:9px;}}
.pill.v{{background:#fdeaea;color:#a02020;}}
.pill.d{{background:#eef3fd;color:#1f4fa3;}}
.legend{{margin-top:18px;font-size:8.8pt;color:var(--muted);}}
.legend .m{{margin-right:5px;}}

/* Documents */
section.doc{{page-break-before:always;}}
.dochead{{border-bottom:2px solid var(--gold);padding-bottom:9px;margin-bottom:12px;
display:flex;align-items:baseline;gap:12px;}}
.dochead .ref{{font-family:"Plus Jakarta Sans",sans-serif;font-weight:800;font-size:16pt;color:var(--gold);}}
.dochead h1{{font-family:"Plus Jakarta Sans",sans-serif;font-weight:800;font-size:16pt;color:var(--ink);
letter-spacing:-.015em;line-height:1.2;}}
.meta{{display:flex;flex-wrap:wrap;gap:4px 22px;padding:9px 0 11px;margin-bottom:14px;
border-bottom:1px solid var(--rule);font-size:8.4pt;}}
.meta .k{{color:var(--muted);text-transform:uppercase;letter-spacing:.08em;font-weight:700;margin-right:6px;font-size:7.6pt;}}
.meta .v{{color:var(--ink);}}

h2{{font-family:"Plus Jakarta Sans",sans-serif;font-weight:700;font-size:11.6pt;color:var(--ink);
margin:16px 0 7px;padding-left:11px;border-left:3px solid var(--gold);line-height:1.25;
page-break-after:avoid;}}
h3{{font-family:"Plus Jakarta Sans",sans-serif;font-weight:700;font-size:10pt;color:var(--ink);
margin:12px 0 5px;page-break-after:avoid;}}
p{{margin-bottom:7px;}}
strong{{color:var(--ink);font-weight:700;}}
ul,ol{{margin:0 0 8px 17px;}}
li{{margin-bottom:3.5px;}}
hr{{border:0;border-top:1px solid var(--rule);margin:14px 0;}}
a{{color:var(--ink);text-decoration:none;border-bottom:1px solid var(--rule);}}
code{{font-family:ui-monospace,"SFMono-Regular",Menlo,monospace;font-size:8.6pt;
background:var(--tint);border:1px solid var(--rule);border-radius:3px;padding:.5px 4px;color:var(--ink);}}
blockquote{{margin:10px 0;padding:10px 14px;background:var(--tint);border-left:3px solid var(--gold);}}
blockquote p:last-child{{margin-bottom:0;}}
table{{width:100%;border-collapse:collapse;margin:9px 0 12px;font-size:8.8pt;page-break-inside:avoid;}}
th{{background:var(--tint);color:var(--ink);font-weight:700;text-align:left;padding:6px 8px;
border:1px solid var(--rule);font-family:"Plus Jakarta Sans",sans-serif;font-size:8.4pt;}}
td{{padding:6px 8px;border:1px solid var(--rule);vertical-align:top;}}

.m{{font-family:"Plus Jakarta Sans",sans-serif;font-weight:700;font-size:8pt;
padding:1px 6px;border-radius:3px;letter-spacing:.02em;}}
.m.verify{{background:#fdeaea;color:#a02020;border:1px solid #f2c9c9;}}
.m.decide{{background:#eef3fd;color:#1f4fa3;border:1px solid #cddcf5;}}
</style></head><body>

<div class="cover">
  <img src="{logo}" alt="Centience" style="margin-top:0.55in;">
  <div class="rule"></div>
  <div class="eyebrow">Information Security · Draft for Review</div>
  <h1>Policy Set</h1>
  <p class="sub">Fourteen policies supporting vendor due diligence and SOC 2 readiness, written against the environment Centience actually operates.</p>
  <div class="warn">
    <b>Not approved. Do not release.</b>
    <p>Every <strong>VERIFY</strong> marker is a statement of fact only Orville can confirm. Every <strong>DECIDE</strong> marker is a cadence or threshold the document cannot choose. Both must be resolved before any part of this reaches a client.</p>
  </div>
  <div class="coverfoot">Centience · centience.ai · Drafted 24 September 2026 · Version 1.0 draft · Internal</div>
</div>

<div class="contents">
  <h2>Contents</h2>
  <p class="lede">Counts show open review markers per document. Document 00 is the master policy; the rest sit beneath it and are binding to the same extent.</p>
  <table class="toc"><tbody>{toc_rows}</tbody></table>
  <div class="legend">
    <span class="m verify">VERIFY</span> {counts['verify']} statements of fact requiring confirmation &nbsp;·&nbsp;
    <span class="m decide">DECIDE</span> {counts['decide']} cadences or thresholds requiring a decision
  </div>
  <div class="legend" style="margin-top:14px;">
    <strong>Not included, deliberately:</strong> a risk assessment, a penetration test summary, and anything implying a SOC&nbsp;2 report.
    The first two are records of work performed and cannot be drafted ahead of the work.
  </div>
</div>

{''.join(sections)}
</body></html>"""

(SP / "policyset.html").write_text(html)
print(f"HTML built: {len(html):,} bytes · VERIFY {counts['verify']} · DECIDE {counts['decide']}")

r = subprocess.run(["/opt/pw-browsers/chromium-1194/chrome-linux/chrome", "--headless", "--disable-gpu",
                    "--no-sandbox", f"--print-to-pdf={OUT}", "--no-pdf-header-footer",
                    f"file://{SP}/policyset.html"], capture_output=True, text=True)
if not OUT.exists():
    print("FAILED", r.stderr[-800:]); sys.exit(1)

import pypdfium2 as pdfium
pdf = pdfium.PdfDocument(str(OUT))
print(f"PDF: {len(pdf)} pages · {OUT.stat().st_size/1024:.0f} KB · {OUT}")
for i in (0, 1, 2, 9):
    if i < len(pdf):
        pdf[i].render(scale=1.5).to_pil().save(f"{SP}/ps_{i+1}.png")
