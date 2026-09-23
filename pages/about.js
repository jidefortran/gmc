import Link from "next/link";
import Layout from "../components/Layout";
import { Reveal, Img, IconArrow } from "../components/ui";
import { site, about, values, team } from "../data/site";

export default function About() {
  return (
    <Layout
      title="About us"
      description="Grace & Mercy Care Services is a Perth-based disability support provider partnering with people living with disability to improve quality of life through a person-centred approach."
    >
      <section className="page-head">
        <div className="wrap">
          <Reveal>
            <p className="breadcrumb">
              <Link href="/">Home</Link> / About
            </p>
            <h1>Who we are.</h1>
            <p className="lede">
              {site.legalName} is a disability support provider based in Perth,
              Western Australia, committed to partnering with people living with
              disability to improve their quality of life using a person-centred
              approach.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="figure-wide">
              <Img
                src="/images/about-team.jpg"
                alt="Support workers and participants together outside a suburban Perth home"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="prose">
            <Reveal>
              <h2 style={{ marginTop: 0 }}>Who are we?</h2>
              {about.intro.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}

              <h2>Where we work</h2>
              <p>
                We’re based at {site.address.street}, {site.address.suburb}, and
                deliver supports across {site.serviceArea}. Accommodation
                availability changes month to month, so the quickest way to find
                out what’s open is to ask.
              </p>

              <h2>Quality and safeguards</h2>
              <p>
                All of our operations adhere strictly to NDIS standards. You can
                verify our current registration on the NDIS Quality and
                Safeguards Commission register at any time, and you can raise a
                concern with the Commission directly — we’ll help you do it if
                you’d rather not do it alone.
              </p>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <aside className="sidecard">
              <h3>Talk to a person</h3>
              <p>
                No call centre. Ring during business hours and you’ll get someone
                who can actually answer questions about availability.
              </p>
              <div style={{ display: "grid", gap: "0.6rem" }}>
                <Link href={site.phoneHref} className="btn btn--primary" style={{ justifyContent: "center" }}>
                  {site.phone}
                </Link>
                <Link href="/contact" className="btn btn--ghost" style={{ justifyContent: "center" }}>
                  Send an enquiry
                </Link>
              </div>
              <div style={{ marginTop: "1.75rem", borderTop: "1px solid var(--line)", paddingTop: "1.25rem" }}>
                {site.hours.map((h) => (
                  <p key={h.days} style={{ marginBottom: "0.4rem", fontSize: "0.9rem" }}>
                    <strong style={{ color: "var(--ink)" }}>{h.days}</strong>
                    <br />
                    {h.time}
                  </p>
                ))}
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="section section--sage">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Our values</p>
            <h2 style={{ marginBottom: "3rem" }}>What we hold to</h2>
          </Reveal>
          <div className="tiles">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80} className="tile">
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={320}>
            <Link href="/services" className="btn btn--primary" style={{ marginTop: "2.5rem" }}>
              See what we offer <IconArrow />
            </Link>
          </Reveal>
        </div>
      </section>

      {team.length > 0 && (
        <section className="section">
          <div className="wrap">
            <Reveal>
              <p className="eyebrow">Meet the team</p>
              <h2 style={{ marginBottom: "3rem" }}>Who you'll actually talk to</h2>
            </Reveal>
            <div className="grid">
              {team.map((person, i) => (
                <Reveal key={person.name} delay={i * 70} className="card" as="div">
                  <div className="card__body">
                    <h3 style={{ fontSize: "1.05rem" }}>{person.name}</h3>
                    <p className="muted" style={{ fontSize: "0.85rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      {person.role}
                    </p>
                    <p>{person.bio}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
