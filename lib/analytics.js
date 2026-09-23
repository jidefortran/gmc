/**
 * Minimal analytics wrapper. Does nothing until NEXT_PUBLIC_PLAUSIBLE_DOMAIN
 * (or another provider you wire up) is set — so this is safe to call
 * everywhere without adding a real dependency or sending data anywhere by
 * default.
 *
 * Swap the body of trackEvent() for your provider's call (Plausible, GA4,
 * PostHog, etc.) once you've chosen one. Plausible's own script exposes
 * window.plausible(eventName, { props }) once loaded — that's what this
 * assumes below.
 */
export function trackEvent(name, props = {}) {
  if (typeof window === "undefined") return;
  try {
    if (typeof window.plausible === "function") {
      window.plausible(name, { props });
    } else if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.log("[analytics:dev]", name, props);
    }
  } catch (err) {
    // Never let analytics break the UI.
  }
}

export const events = {
  PHONE_CLICK: "Phone Click",
  EMAIL_CLICK: "Email Click",
  CONTACT_SUBMIT: "Contact Form Submit",
  REFERRAL_SUBMIT: "Referral Submit",
  CAREERS_SUBMIT: "Careers EOI Submit",
  SEARCH_OPEN: "Search Opened",
};
