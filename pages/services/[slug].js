import Link from "next/link";
import Layout from "../../components/Layout";
import { Reveal, Img, IconArrow } from "../../components/ui";
import { services, site } from "../../data/site";

export async function getStaticPaths() {
  return {
    paths: services.map((s) => ({ params: { slug: s.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const service = services.find((s) => s.slug === params.slug) || null;
  const related = services.filter((s) => s.slug !== params.slug).slice(0, 3);
  return { props: { service, related } };
}

export default function ServiceDetail({ service, related }) {
  if (!service) return null;

  return (
    <Layout title={service.title} description={service.excerpt}>
      <section className="page-head">
        <div className="wrap">
          <Reveal>
            <p className="breadcrumb">
              <Link href="/">Home</Link> / <Link href="/services">Services</Link> /{" "}
              {service.title}
            </p>
            <span className="tag" style={{ marginBottom: "1.25rem" }}>{service.ndis}</span>
            <h1>{service.title}</h1>
            <p className="lede">{service.intro}</p>
          </Reveal>

          <Reveal delay={100}>
            <div className="figure-wide">
              <Img src={service.image} alt={service.imageAlt} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="prose">
            {service.sections.map((sec, i) => (
              <Reveal key={sec.heading} delay={i * 60}>
                <h2 style={i === 0 ? { marginTop: 0 } : undefined}>{sec.heading}</h2>
                <p>{sec.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <aside className="sidecard">
              <h3>At a glance</h3>
              <ul className="checklist" style={{ marginBottom: "1.75rem" }}>
                {service.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div style={{ display: "grid", gap: "0.6rem" }}>
                <Link href="/contact" className="btn btn--primary" style={{ justifyContent: "center" }}>
                  Enquire about this
                </Link>
                <Link href={site.phoneHref} className="btn btn--ghost" style={{ justifyContent: "center" }}>
                  {site.phone}
                </Link>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="section section--paper">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Also available</p>
            <h2 style={{ marginBottom: "3rem" }}>Other supports</h2>
          </Reveal>
          <div className="grid">
            {related.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <Link href={`/services/${s.slug}`} className="card" style={{ height: "100%" }}>
                  <div className="card__media">
                    <Img src={s.image} alt={s.imageAlt} />
                  </div>
                  <div className="card__body">
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
    </Layout>
  );
}
