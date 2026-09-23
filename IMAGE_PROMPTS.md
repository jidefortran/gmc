# Image brief — Grace & Mercy Care Services

Complete image manifest for the site as it currently stands — every `src`
in the codebase is listed below, nothing more, nothing missing. The site
renders a soft sage placeholder wherever a file is missing, so it looks
finished right now. Drop each file into `public/images/` with the **exact
filename** below and it appears automatically — no code changes.

Utility pages (Referral, Careers, Complaints, FAQ, Contact, Privacy, Terms,
Search) deliberately carry no photography — that's consistent with the
minimalist design, not a gap.

## House style (paste this into every prompt)

> Natural documentary photography, warm and calm, soft diffused Australian
> daylight, muted palette of eucalyptus green, sage, warm paper white and a
> restrained terracotta accent. Shallow depth of field, 35mm look, unposed
> candid moment, no eye contact with camera, no text or logos anywhere in frame,
> no watermarks. Australian suburban setting.

Faces: keep them soft, turned, or partially out of frame. Avoid anything that
reads as a stock-photo "carer and patient" cliché — no clasped hands over a
blanket, no clipboards.

---

## 1. `hero-home.jpg` — homepage hero
**Ratio:** 4:5 portrait · **Size:** 1200 × 1500

> A support worker and a young adult sitting together at a kitchen bench in a
> sunlit Australian suburban home, mid-conversation over mugs of tea, relaxed
> body language, morning light through a window with a sheer curtain, plants on
> the sill, soft focus background. [house style]

---

## 2. `about-team.jpg` — about page banner
**Ratio:** 21:9 wide · **Size:** 2100 × 900

> A small team of four support workers standing and talking in the driveway and
> front garden of a single-storey Australian brick home, casual polo shirts, one
> person laughing, late afternoon golden light, wide environmental framing with
> lots of negative space at the left. [house style]

---

## 3. `service-sil.jpg` — Supported Independent Living
**Ratio:** 16:10 · **Size:** 1600 × 1000

> A bright open-plan living and kitchen area of a shared Australian home, two
> people preparing a meal together at the bench while a third sits on the couch
> reading, wide doorways and clear floor space, natural light, lived-in but
> tidy. [house style]

---

## 4. `service-coordination.jpg` — Support Coordination
**Ratio:** 16:10 · **Size:** 1600 × 1000

> Two people seated side by side at a dining table reviewing printed documents
> and a laptop, one pointing at a page, notebook and reading glasses nearby, warm
> window light, over-the-shoulder framing, documents blurred and unreadable. [house style]

---

## 5. `service-recovery-coach.jpg` — Psychosocial Recovery Coaching
**Ratio:** 16:10 · **Size:** 1600 × 1000

> Two people walking side by side and talking along a gum-tree-lined suburban
> path in the late afternoon, viewed from behind at a distance, dappled light,
> relaxed pace, sense of space and quiet. [house style]

---

## 6. `service-recovery-accom.jpg` — Recovery Accommodation
**Ratio:** 16:10 · **Size:** 1600 × 1000

> A calm, simply furnished bedroom in a supported accommodation house — neatly
> made bed with linen bedding, a bedside lamp, a small stack of books, a chair by
> the window, sheer curtain diffusing morning light, no people in frame, uncluttered
> and restful. [house style]

---

## 7. `service-respite.jpg` — Short Term Accommodation & Respite
**Ratio:** 16:10 · **Size:** 1600 × 1000

> A comfortable accessible guest room and adjoining lounge in an Australian
> home, made bed with a folded throw, armchair, wide doorway, a packed overnight
> bag by the door, soft daylight, welcoming rather than clinical, no people. [house style]

---

## 8. `service-community.jpg` — Community Participation
**Ratio:** 16:10 · **Size:** 1600 × 1000

> A small group of people browsing a weekend community market under shade
> sails, one person using a wheelchair, fresh produce stalls, sunny day, candid
> mid-distance framing, faces soft or turned away. [house style]

---

## Optional extras (generated)

### 9. `og-image.jpg` — social sharing card
**Ratio:** 1.91:1 · **Size:** 1200 × 630

> Wide calm image of a sunlit Australian suburban home exterior with a garden
> path, shot at eye level with generous empty sky at the top for a text overlay,
> muted eucalyptus and warm paper palette, no people, no text. [house style]

This one's already wired into the site — `components/Layout.js` references
it on every page's Open Graph tags, so it's what shows up when a link to
the site is shared on Facebook, LinkedIn, Slack, etc.

### 10. `favicon.png` — 512 × 512
Not a photo. A simple flat mark: two overlapping rounded leaf shapes forming an
open arch, deep eucalyptus green `#17453c` on warm paper `#fbfaf7`, generous
padding, no text, no gradients, no drop shadow. Replace `public/favicon.ico`
and/or add the PNG and reference it in `_document.js`.

---

## After you drop them in

Nothing to rebuild in dev — refresh the page. For production, re-run
`npm run build`. Compress before committing (TinyPNG or `squoosh`); aim for
under ~300 KB each so the pages stay fast.
