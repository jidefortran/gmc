import { useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { Reveal, IconArrow } from "../components/ui";
import { site } from "../data/site";
import { trackEvent, events } from "../lib/analytics";

const ROLES = [
  "Disability Support Worker",
  "Mental Health Support Worker",
  "Registered Nurse",
  "Enrolled Nurse",
  "Support Coordinator",
  "Psychosocial Recovery Coach",
  "Other / not sure yet",
];

const EMPTY = {
  name: "",
  email: "",
  phone: "",
  role: "",
  availability: "",
  experience: "",
  message: "",
  company: "",
};

export default function Careers() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (form.company) return;

    if (!form.name.trim() || !form.email.trim()) {
      setStatus({ state: "error", message: "Please add your name and email." });
      return;
    }

    setStatus({ state: "sending", message: "" });
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      trackEvent(events.CAREERS_SUBMIT, { role: form.role || "unspecified" });
      setForm(EMPTY);
      setStatus({
        state: "ok",
        message: "Thanks for your interest — we'll keep your details on file and reach out when a suitable role opens up.",
      });
    } catch (err) {
      setStatus({
        state: "error",
        message: `That didn't send. Please email your details to ${site.email} instead.`,
      });
    }
  };

  return (
    <Layout
      title="Careers"
      description="Register your interest in support work, nursing, recovery coaching or coordination roles with Grace & Mercy Care Services."
      hideCta
    >
      <section className="page-head">
        <div className="wrap wrap--narrow">
          <Reveal>
            <p className="breadcrumb">
              <Link href="/">Home</Link> / Careers
            </p>
            <h1>Work with us.</h1>
            <p className="lede">
              We're always glad to hear from enthusiastic, compassionate
              people — support workers, nurses, recovery coaches and
              coordinators. Register your interest below, even if nothing is
              advertised right now.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap wrap--narrow">
          <Reveal>
            <form className="form" onSubmit={onSubmit} noValidate>
              <div className="form__row">
                <div className="field">
                  <label htmlFor="name">Your name</label>
                  <input id="name" type="text" value={form.name} onChange={update("name")} required />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" value={form.email} onChange={update("email")} required />
                </div>
              </div>

              <div className="form__row">
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" type="tel" value={form.phone} onChange={update("phone")} />
                </div>
                <div className="field">
                  <label htmlFor="role">Role you're interested in</label>
                  <select id="role" value={form.role} onChange={update("role")}>
                    <option value="">Select a role</option>
                    {ROLES.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="availability">Availability</label>
                <input
                  id="availability"
                  type="text"
                  placeholder="e.g. weekdays, overnight shifts, casual"
                  value={form.availability}
                  onChange={update("availability")}
                />
              </div>

              <div className="field">
                <label htmlFor="experience">Relevant experience or qualifications</label>
                <textarea
                  id="experience"
                  placeholder="Certificates, prior roles, First Aid/CPR, driver's licence, etc."
                  value={form.experience}
                  onChange={update("experience")}
                />
              </div>

              <div className="field">
                <label htmlFor="message">Anything else?</label>
                <textarea id="message" value={form.message} onChange={update("message")} />
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
                  {status.state === "sending" ? "Sending…" : "Register interest"} <IconArrow />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
