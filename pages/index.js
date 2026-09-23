import Link from "next/link";
import Layout from "../components/Layout";
import { Reveal, Img, IconArrow } from "../components/ui";
import { site, services, values, steps, testimonials } from "../data/site";

export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <div className="wrap hero__grid">
          <Reveal>
            <p className="eyebrow">Registered NDIS provider · Perth, WA</p>
            <h1>Support that starts with the life you want.</h1>
            <p className="lede">
              We work alongside people living with disability and their families
              to get the most out of an NDIS plan — from supported accommodation
              and respite to coordination and community access.
            </p>
            <div className="hero__actions">
              <Link href="/contact" className="btn btn--primary">
                Make an enquiry <IconArrow />
              </Link>
              <Link href="/services" className="btn btn--ghost">
                Browse services
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <figure className="hero__figure">
              <Img
                src="/images/hero-home.jpg"
                alt="A support worker and a participant talking together in a sunlit living room"
              />
              <figcaption className="hero__badge">
                <strong>Based in Haynes, working across Perth</strong>
                Armadale · Gosnells · Metro
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <dl className="facts">
        <div>
          <dt>Accommodation</dt>
          <dd>SIL, recovery &amp; respite</dd>
        </div>
        <div>
          <dt>Capacity building</dt>
          <dd>Coordination &amp; coaching</dd>
        </div>
        <div>
          <dt>Plan types</dt>
          <dd>Plan &amp; self-managed</dd>
        </div>
        <div>
          <dt>Enquiries</dt>
          <dd>{site.phone}</dd>
        </div>
      </dl>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">What we do</p>
            <h2 style={{ marginBottom: "1rem" }}>Six supports, one team</h2>
            <p className="lede" style={{ marginBottom: "3rem" }}>
              Everything below can be delivered on its own or combined. Most
              people start with one and add another once things settle.
            </p>
          </Reveal>

          <div className="grid">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <Link href={`/services/${s.slug}`} className="card" style={{ height: "100%" }}>
                  <div className="card__media">
                    <Img src={s.image} alt={s.imageAlt} />
                  </div>
                  <div className="card__body">
                    <span className="tag">{s.short}</span>
                    <h3>{s.title}</h3>
                    <p>{s.excerpt}</p>
                    <span className="card__more">
                      Read more <IconArrow size={14} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">How we work</p>
            <h2 style={{ marginBottom: "1.25rem" }}>
              Take the time to know you, then act with integrity.
            </h2>
            <p className="muted max-prose" style={{ marginBottom: "1rem" }}>
              We listen and let you lead, so you’re the one making the decisions
              about your wellbeing and how you take part in your community. That
              means understanding your support network before we suggest a
              roster, and being honest when something we offer isn’t the right
              fit.
            </p>
            <Link href="/about" className="btn btn--ghost" style={{ marginTop: "1rem" }}>
              More about us <IconArrow size={14} />
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="tiles" style={{ gridTemplateColumns: "1fr" }}>
              {values.slice(0, 3).map((v) => (
                <div className="tile" key={v.title}>
                  <h3>{v.title}</h3>
                  <p>{v.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Getting started</p>
            <h2 style={{ marginBottom: "3rem" }}>Four steps, no paperwork first</h2>
          </Reveal>
          <div className="tiles">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 80} className="tile">
                <span className="tile__num">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {testimonials.length > 0 && (
        <section className="section section--sage">
          <div className="wrap">
            <Reveal>
              <p className="eyebrow">In their words</p>
              <h2 style={{ marginBottom: "3rem" }}>What families tell us</h2>
            </Reveal>
            <div className="grid">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i * 80} className="card" as="div">
                  <div className="card__body">
                    <p style={{ fontFamily: "var(--font-display)", fontSize: "var(--step-1)", color: "var(--ink)" }}>
                      “{t.quote}”
                    </p>
                    <p className="muted" style={{ fontSize: "0.85rem" }}>
                      {t.name}{t.context ? ` — ${t.context}` : ""}
                    </p>
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
