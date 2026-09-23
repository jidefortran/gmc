import { services, faqs, values, steps } from "../data/site";

/**
 * A flat, static index of everything on the site.
 * Built at module load — no network calls, no third-party search service.
 */
export function buildIndex() {
  const docs = [];

  docs.push({
    id: "page-home",
    type: "Page",
    title: "Home",
    href: "/",
    summary:
      "Registered NDIS provider in Perth supporting people with disability to get the most from their plan.",
    body: [
      "NDIS provider Perth Western Australia disability support",
      values.map((v) => `${v.title} ${v.body}`).join(" "),
      steps.map((s) => `${s.title} ${s.body}`).join(" "),
    ].join(" "),
  });

  docs.push({
    id: "page-about",
    type: "Page",
    title: "About us",
    href: "/about",
    summary:
      "Who we are, how we work, and the values behind a person-centred approach to disability support.",
    body:
      "about values person centred approach vision culture registered NDIS provider Haynes Armadale Gosnells Perth quality safeguards",
  });

  docs.push({
    id: "page-contact",
    type: "Page",
    title: "Contact",
    href: "/contact",
    summary: "Phone, email, address and an enquiry form.",
    body: "contact phone email address enquiry referral intake Haynes Hayford Road appointment",
  });

  docs.push({
    id: "page-referral",
    type: "Page",
    title: "Referral",
    href: "/referral",
    summary: "Refer a participant — for support coordinators, plan managers and families.",
    body: "referral refer participant support coordinator plan manager NDIS number urgent priority intake",
  });

  docs.push({
    id: "page-careers",
    type: "Page",
    title: "Careers",
    href: "/careers",
    summary: "Register your interest in support work, nursing, coaching or coordination roles.",
    body: "careers jobs work with us support worker nurse recovery coach coordinator expression of interest employment",
  });

  docs.push({
    id: "page-complaints",
    type: "Page",
    title: "Complaints",
    href: "/complaints",
    summary: "How to raise a concern with us or with the NDIS Quality and Safeguards Commission.",
    body: "complaints feedback concern NDIS Quality and Safeguards Commission code of conduct",
  });

  docs.push({
    id: "page-services",
    type: "Page",
    title: "All services",
    href: "/services",
    summary: "Every support we offer, in one place.",
    body: services.map((s) => `${s.title} ${s.excerpt}`).join(" "),
  });

  services.forEach((s) => {
    docs.push({
      id: `service-${s.slug}`,
      type: "Service",
      title: s.title,
      href: `/services/${s.slug}`,
      summary: s.excerpt,
      body: [
        s.short,
        s.ndis,
        s.intro,
        s.points.join(" "),
        s.sections.map((sec) => `${sec.heading} ${sec.body}`).join(" "),
      ].join(" "),
    });
  });

  faqs.forEach((f, i) => {
    docs.push({
      id: `faq-${i}`,
      type: "FAQ",
      title: f.q,
      href: "/faq",
      summary: f.a.length > 150 ? `${f.a.slice(0, 150).trim()}…` : f.a,
      body: f.a,
    });
  });

  return docs.map((d) => ({
    ...d,
    haystack: `${d.title} ${d.summary} ${d.body}`.toLowerCase(),
    titleLower: d.title.toLowerCase(),
  }));
}

export const index = buildIndex();

const STOP = new Set(["the", "a", "an", "of", "and", "for", "to", "in", "is", "my", "i"]);

export function search(query, limit = 8) {
  const q = (query || "").trim().toLowerCase();
  if (q.length < 2) return [];

  const terms = q.split(/\s+/).filter((t) => t && !STOP.has(t));
  if (!terms.length) return [];

  const scored = index.map((doc) => {
    let score = 0;

    if (doc.titleLower === q) score += 200;
    if (doc.titleLower.includes(q)) score += 80;
    if (doc.haystack.includes(q)) score += 30;

    terms.forEach((term) => {
      if (doc.titleLower.includes(term)) score += 25;
      if (doc.summary.toLowerCase().includes(term)) score += 10;

      const matches = doc.haystack.split(term).length - 1;
      if (matches > 0) score += Math.min(matches, 5) * 4;

      // light prefix matching so "accom" finds "accommodation"
      if (term.length >= 4 && !doc.haystack.includes(term)) {
        const stem = term.slice(0, Math.max(4, term.length - 2));
        if (doc.haystack.includes(stem)) score += 5;
      }
    });

    if (doc.type === "Service") score += 6;

    return { doc, score };
  });

  return scored
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score || a.doc.title.localeCompare(b.doc.title))
    .slice(0, limit)
    .map((r) => r.doc);
}
