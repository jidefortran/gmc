import { useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { Reveal, IconArrow } from "../components/ui";
import { site, services, contactIntro } from "../data/site";
import { trackEvent, events } from "../lib/analytics";

const EMPTY = {
  name: "",
  email: "",
  phone: "",
  service: "",
  subject: "",
  message: "",
  company: "", // honeypot
};

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (form.company) return; // bot

    if (!form.name.trim() || !form.email.trim()) {
      setStatus({ state: "error", message: "Please fill in your name and email." });
      return;
    }

    setStatus({ state: "sending", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      trackEvent(events.CONTACT_SUBMIT, { service: form.service || "unspecified" });
      setForm(EMPTY);
      setStatus({
        state: "ok",
        message: "Thanks — we've got your enquiry and will be in touch within one business day.",
      });
    } catch (err) {
      setStatus({
        state: "error",
        message: `Something went wrong sending that. Please call ${site.phone} or email ${site.email} instead.`,
      });
    }
  };

  return (
    <Layout
      title="Contact"
      description={`Contact ${site.name} — phone ${site.phone}, email ${site.email}, or send an enquiry online.`}
      hideCta
    >
      <section className="page-head">
        <div className="wrap">
          <Reveal>
            <p className="breadcrumb">
              <Link href="/">Home</Link> / Contact
            </p>
            <h1>Get in touch.</h1>
            <p className="lede">{contactIntro}</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <Reveal>
            <form className="form" onSubmit={onSubmit} noValidate>
              <div className="form__row">
                <div className="field">
                  <label htmlFor="name">Your name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={update("name")}
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={update("email")}
                    required
                  />
                </div>
              </div>

              <div className="form__row">
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={update("phone")}
                  />
                  <span className="field__hint">Optional, but usually faster.</span>
                </div>
                <div className="field">
                  <label htmlFor="service">What’s it about?</label>
                  <select id="service" name="service" value={form.service} onChange={update("service")}>
                    <option value="">Not sure yet</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Other">Something else</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={update("subject")}
                />
              </div>

              <div className="field">
                <label htmlFor="message">Message (optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={update("message")}
                />
              </div>

              {/* honeypot — hidden from people, catches bots */}
              <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" tabIndex={-1} autoComplete="off" value={form.company} onChange={update("company")} />
              </div>

              {status.message && (
                <p
                  role="status"
                  className={`form__status ${status.state === "ok" ? "form__status--ok" : "form__status--err"}`}
                >
                  {status.message}
                </p>
              )}

              <div>
                <button type="submit" className="btn btn--primary" disabled={status.state === "sending"}>
                  {status.state === "sending" ? "Sending…" : "Send enquiry"} <IconArrow />
                </button>
              </div>

              <p className="field__hint">
                We use what you send here only to respond to your enquiry. See our{" "}
                <Link href="/privacy">privacy page</Link>.
              </p>
            </form>
          </Reveal>

          <Reveal delay={120}>
            <aside className="sidecard">
              <h3>Direct</h3>
              <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "1rem", marginBottom: "1.75rem" }}>
                <li>
                  <span className="field__hint">Phone</span>
                  <br />
                  <Link href={site.phoneHref} style={{ fontSize: "1.1rem" }}>{site.phone}</Link>
                </li>
                <li>
                  <span className="field__hint">Email</span>
                  <br />
                  <Link href={`mailto:${site.email}`}>{site.email}</Link>
                </li>
                <li>
                  <span className="field__hint">Office</span>
                  <br />
                  {site.address.street}
                  <br />
                  {site.address.suburb} {site.address.state} {site.address.postcode}
                </li>
              </ul>

              <div style={{ borderTop: "1px solid var(--line)", paddingTop: "1.25rem" }}>
                <h3 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>Hours</h3>
                {site.hours.map((h) => (
                  <p key={h.days} style={{ fontSize: "0.9rem", marginBottom: "0.35rem", color: "var(--ink-soft)" }}>
                    {h.days} — {h.time}
                  </p>
                ))}
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
