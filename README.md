# Grace & Mercy Care Services — 2026 site

A minimal Next.js (pages router) rebuild. One content file, one stylesheet,
zero UI frameworks. Built on the Next 13.4.19 base from the uploaded project,
with the legacy template stripped out.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # verified passing — 16 routes
```

## Structure

```
data/site.js          ← ALL content lives here. Edit this, not the pages.
lib/search.js         ← builds the search index from data/site.js
lib/analytics.js       ← no-op analytics wrapper, see "Analytics" below
styles/globals.css    ← the entire design system (tokens at the top)
components/
  Layout.js           ← header, side-drawer mobile nav, footer, CTA, SEO tags
  SearchDialog.js     ← ⌘K / "/" command-palette search
  ui.js               ← icons, scroll-reveal, image-with-placeholder
pages/
  index.js about.js faq.js contact.js search.js privacy.js terms.js 404.js
  referral.js         ← structured intake form for coordinators/plan managers
  careers.js          ← expression-of-interest form for prospective staff
  complaints.js       ← consolidated complaints process + NDIS Commission
  services/index.js services/[slug].js   ← one page per service, generated
  api/contact.js api/referral.js api/careers.js   ← all validate + honeypot
```

## Mobile navigation

The mobile menu is a slide-in side drawer (not a dropdown) — full height,
right-anchored, with a backdrop, close button, Escape-to-close and body
scroll lock while open. Triggered by the burger icon under 900px width.

## New pages added for launch-readiness

- **`/referral`** — the form support coordinators, plan managers and
  clinicians actually want: participant details, NDIS number (optional),
  plan management type, a checklist of services being requested, and an
  urgency selector. Posts to `/api/referral`.
- **`/careers`** — an always-open expression-of-interest form for support
  workers, nurses, recovery coaches and coordinators. Posts to
  `/api/careers`.
- **`/complaints`** — consolidates the complaints process in one place and
  publishes the NDIS Quality and Safeguards Commission's national
  complaints line (1800 035 544), which every registered provider can
  display. Replace the process description with your actual documented
  procedure before launch.

## SEO

- `public/sitemap.xml` — static, lists every route. Update it if you add
  or remove pages.
- `public/robots.txt` — points at the sitemap.
- Every page sets a canonical URL and Open Graph tags via `Layout.js`,
  using `site.url` in `data/site.js`.
- JSON-LD `MedicalBusiness` structured data (name, phone, email, address,
  service area, hours, ABN) is injected on every page — this is what lets
  Google show your details directly in search results. It does **not**
  include an NDIS registration number; add that to `data/site.js` and the
  schema once you have it handy.
- `og-image.jpg` is referenced in the meta tags but doesn't exist yet —
  see **IMAGE_PROMPTS.md** for the prompt and exact filename.

## Analytics

`lib/analytics.js` is a no-op wrapper until you set
`NEXT_PUBLIC_PLAUSIBLE_DOMAIN` in your environment, at which point
`pages/_document.js` loads the Plausible script automatically. Until then,
`trackEvent()` calls just log to the console in development and do nothing
in production — safe to ship either way. Events already wired up: contact
form submit, referral submit, careers submit, phone/email clicks in the
footer, and search-dialog opens. Swap the body of `trackEvent()` if you'd
rather use GA4 or another provider.

## Adding your team and testimonials

`data/site.js` exports empty `team` and `testimonials` arrays on purpose —
real names, roles and quotes need to come from you, not be invented. Add
entries in the commented shape shown in the file and the About page (team)
and homepage (testimonials) will render them automatically; both sections
stay hidden while the arrays are empty.

## Search

Client-side, no service, no index to maintain. `lib/search.js` reads
`data/site.js` and builds a flat document set at load. Add a service to the
data file and it's searchable immediately.

- `/` or `⌘K` / `Ctrl+K` anywhere opens the palette
- Arrow keys to move, Enter to open, Esc to close
- `/search?q=…` is the full results page, shareable as a link
- Scoring favours title matches, then summary, then body, with light prefix
  matching so "accom" finds "accommodation"

## Editing content

Everything — services, FAQs, values, phone number, address, opening hours — is
in `data/site.js`. Adding a service to the `services` array creates its card,
its detail page, its footer link and its search entry automatically.

## Images

Missing images render as a labelled sage placeholder, so the site looks
complete before photography exists. See **IMAGE_PROMPTS.md** for the eight
prompts and the exact filenames to save into `public/images/`.

## Contact, referral and careers forms

`pages/api/contact.js`, `pages/api/referral.js` and `pages/api/careers.js`
all validate server-side, use a honeypot field, and log to the console.
To actually send mail, set `SENDGRID_API_KEY`, `CONTACT_TO` and
`CONTACT_FROM`, run `npm i @sendgrid/mail`, and uncomment the delivery
block in `pages/api/contact.js` — copy the same pattern into the other two
routes. Consider routing "Urgent" referrals to a different inbox or an SMS
alert.

## Content notes

Site copy was written fresh for this build using the service structure and
contact details from the existing site — it is not lifted from the old pages,
which were thin and carried template leftovers. Two things worth fixing in your
records regardless: the old footer's email link pointed at an
`@essencewa.com.au` address, and the header social links pointed at
`utmost_solutions_wa` accounts. Both are corrected or removed here.

The Privacy and Terms pages are real, site-specific content rather than filler,
but they carry a visible note that they need legal review before launch.

## Not carried over from the base project

Apollo/GraphQL, Bootstrap, FontAwesome, AOS, Swiper, SweetAlert2, the legacy
SCSS bundle and ~30 unused template pages. If you need the WordPress GraphQL
layer back for a blog, add `@apollo/client` and reinstate the `blog/` routes —
nothing here blocks it.

## Deploy

Static-friendly: `npm run build && npm start`, or push to Vercel and it builds
as-is. Set the canonical domain and add `og-image.jpg` before launch.
