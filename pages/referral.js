import { useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { Reveal, IconArrow } from "../components/ui";
import { site, services } from "../data/site";
import { trackEvent, events } from "../lib/analytics";

const EMPTY = {
  participantName: "",
  participantAge: "",
  ndisNumber: "",
  planType: "",
  servicesRequested: [],
  urgency: "Standard",
  referrerName: "",
  referrerOrg: "",
  referrerRole: "",
  referrerPhone: "",
  referrerEmail: "",
  notes: "",
  company: "", // honeypot
};

export default function Referral() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const toggleService = (title) => {
    setForm((f) => {
      const has = f.servicesRequested.includes(title);
      return {
        ...f,
        servicesRequested: has
          ? f.servicesRequested.filter((s) => s !== title)
          : [...f.servicesRequested, title],
      };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (form.company) return;

    if (!form.participantName.trim() || !form.referrerName.trim() || !form.referrerEmail.trim()) {
      setStatus({
        state: "error",
        message: "Please fill in the participant's name and your name and email.",
      });
      return;
    }

    setStatus({ state: "sending", message: "" });
    try {
      const res = await fetch("/api/referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      trackEvent(events.REFERRAL_SUBMIT, { urgency: form.urgency });
      setForm(EMPTY);
      setStatus({
        state: "ok",
        message: "Thanks — your referral has been received. We'll be in touch within one business day, sooner if marked urgent.",
      });
    } catch (err) {
      setStatus({
        state: "error",
        message: `Something went wrong sending that. Please call ${site.phone} or email ${site.email} directly instead.`,
      });
    }
  };

  return (
    <Layout
      title="Referral"
      description="Refer a participant to Grace & Mercy Care Services — for support coordinators, plan managers, clinicians and families."
      hideCta
    >
      <section className="page-head">
        <div className="wrap">
          <Reveal>
            <p className="breadcrumb">
              <Link href="/">Home</Link> / Referral
            </p>
            <h1>Refer a participant.</h1>
            <p className="lede">
              For support coordinators, plan managers, clinicians, and family
              members referring someone into our services. The more detail you
              can give us up front, the faster we can respond.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <Reveal>
            <form className="form" onSubmit={onSubmit} noValidate>
              <h3 style={{ marginBottom: "-0.25rem" }}>About the participant</h3>

              <div className="form__row">
                <div className="field">
                  <label htmlFor="participantName">Participant name</label>
                  <input
                    id="participantName"
                    type="text"
                    value={form.participantName}
                    onChange={update("participantName")}
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="participantAge">Age</label>
                  <input
                    id="participantAge"
                    type="text"
                    value={form.participantAge}
                    onChange={update("participantAge")}
                  />
                </div>
              </div>

              <div className="form__row">
                <div className="field">
                  <label htmlFor="ndisNumber">NDIS number</label>
                  <input
                    id="ndisNumber"
                    type="text"
                    value={form.ndisNumber}
                    onChange={update("ndisNumber")}
                    autoComplete="off"
                  />
                  <span className="field__hint">Optional at this stage.</span>
                </div>
                <div className="field">
                  <label htmlFor="planType">Plan management</label>
                  <select id="planType" value={form.planType} onChange={update("planType")}>
                    <option value="">Not sure / to confirm</option>
                    <option value="Plan-managed">Plan-managed</option>
                    <option value="Self-managed">Self-managed</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label>Services being requested</label>
                <div style={{ display: "grid", gap: "0.6rem" }}>
                  {services.map((s) => (
                    <label
                      key={s.slug}
                      style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontWeight: 400 }}
                    >
                      <input
                        type="checkbox"
                        checked={form.servicesRequested.includes(s.title)}
                        onChange={() => toggleService(s.title)}
                        style={{ width: "auto" }}
                      />
                      {s.title}
                    </label>
                  ))}
                </div>
              </div>

              <div className="field">
                <label htmlFor="urgency">Urgency</label>
                <select id="urgency" value={form.urgency} onChange={update("urgency")}>
                  <option value="Standard">Standard — within the next few weeks</option>
                  <option value="Priority">Priority — within the next week</option>
                  <option value="Urgent">Urgent — crisis or imminent need</option>
                </select>
              </div>

              <h3 style={{ marginTop: "1rem", marginBottom: "-0.25rem" }}>About you (the referrer)</h3>

              <div className="form__row">
                <div className="field">
                  <label htmlFor="referrerName">Your name</label>
                  <input
                    id="referrerName"
                    type="text"
                    value={form.referrerName}
                    onChange={update("referrerName")}
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="referrerRole">Your role</label>
                  <input
                    id="referrerRole"
                    type="text"
                    placeholder="e.g. Support Coordinator"
                    value={form.referrerRole}
                    onChange={update("referrerRole")}
                  />
                </div>
              </div>

              <div className="form__row">
                <div className="field">
                  <label htmlFor="referrerOrg">Organisation</label>
                  <input
                    id="referrerOrg"
                    type="text"
                    value={form.referrerOrg}
                    onChange={update("referrerOrg")}
                  />
                </div>
                <div className="field">
                  <label htmlFor="referrerPhone">Phone</label>
                  <input
                    id="referrerPhone"
                    type="tel"
                    value={form.referrerPhone}
                    onChange={update("referrerPhone")}
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="referrerEmail">Your email</label>
                <input
                  id="referrerEmail"
                  type="email"
                  value={form.referrerEmail}
                  onChange={update("referrerEmail")}
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="notes">Anything else we should know?</label>
                <textarea id="notes" value={form.notes} onChange={update("notes")} />
              </div>

              <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input id="company" tabIndex={-1} autoComplete="off" value={form.company} onChange={update("company")} />
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
                  {status.state === "sending" ? "Sending…" : "Submit referral"} <IconArrow />
                </button>
              </div>

              <p className="field__hint">
                Please don't include sensitive clinical detail in this form —
                we'll ask for anything further, including consent, once we
                make contact.
              </p>
            </form>
          </Reveal>

          <Reveal delay={120}>
            <aside className="sidecard">
              <h3>Not ready to submit a form?</h3>
              <p>
                Call and talk it through instead — especially for anything
                urgent.
              </p>
              <div style={{ display: "grid", gap: "0.6rem" }}>
                <Link href={site.phoneHref} className="btn btn--primary" style={{ justifyContent: "center" }}>
                  {site.phone}
                </Link>
                <Link href={`mailto:${site.email}`} className="btn btn--ghost" style={{ justifyContent: "center" }}>
                  {site.email}
                </Link>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
