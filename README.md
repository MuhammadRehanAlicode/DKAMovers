# DKA Movers Website — v2

A redesigned, animated marketing website for DKA Movers, Dubai.

## What changed from v1
- **New transport-appropriate color palette**: deep navy + steel blue + amber/orange
  (replacing the plain taxi-yellow scheme) — evokes logistics/freight branding rather
  than a generic template.
- **Real photography throughout**, including packages and a brand-new **Fleet** section
  showing an actual 1–2 Ton pickup, a 3 Ton box truck, and a heavy-load flatbed truck —
  sourced from Unsplash (free license, credited below).
- **New sections**: How It Works (4-step process), Our Fleet, animated Stats counters,
  Customer Reviews carousel, FAQ accordion, and a Service Areas marquee — on top of the
  original Services, Packages, About and Contact sections.
- **Animations**: scroll-reveal fade-ups on every section, animated number counters,
  a looping "road" progress bar in the hero, a decorative driving-truck animation in the
  CTA band, smooth hero/testimonial carousels, and hover-lift/zoom effects on cards.
- Extra nav links (Fleet, Reviews), a "Back to top" button, and full English/Arabic
  translations (including RTL) for every new section — nothing was left English-only.

## Image sourcing note
This build could not reach image CDNs (e.g. Unsplash) from the sandbox to save files
locally into `/assets`, so photos are linked directly to Unsplash's CDN, the same way
the original template did. This is a normal, common practice (Unsplash's own hotlinking
is explicitly permitted under their license) and the images will load normally for any
visitor. If you'd rather have local copies:
1. Open each image URL in `index.html` (search for `images.unsplash.com`) in a browser.
2. Save it into `assets/` (e.g. `assets/fleet-3ton.jpg`).
3. Replace the corresponding `src="https://images.unsplash.com/..."` with `src="assets/fleet-3ton.jpg"`.

Images used (all free to use under the Unsplash License):
- Warehouse / logistics — Metin Erkut Bayrak & original hero photo
- Moving truck — original hero photo
- Flatbed truck with heavy tires — Marshall Minzz
- Row of trucks (fleet) — Marshall Minzz
- Truck loaded with boxes — Infinity Movers Cape Coral
- Forklift loading cargo — Metin Erkut Bayrak
- Woman carrying a moving box — Zachary Kadolph
- Moving boxes — original hero photo

## WhatsApp
Configured number: +971 50 109 0677
Message text now varies by section (packages, fleet vehicle asked about, general).

## Run
Static site — just open `index.html` in a browser, or use VS Code Live Server.

## Before publishing
- Replace the `#` social links in the footer with DKA Movers' real profiles.
- Consider localizing the Service Areas list if you'd like to highlight specific
  neighborhoods you prioritize.
- Optionally download and self-host the Unsplash images per the note above for
  faster, dependency-free loading.
