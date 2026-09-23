import Link from "next/link";
import Layout from "../../components/Layout";
import { Reveal, Img, IconArrow } from "../../components/ui";
import { services } from "../../data/site";

export default function Services() {
  return (
    <Layout
      title="Services"
      description="Supported independent living, recovery accommodation, support coordination, psychosocial recovery coaching, short term accommodation and community participation across Perth."
    >
      <section className="page-head">
        <div className="wrap">
          <Reveal>
            <p className="breadcrumb">
              <Link href="/">Home</Link> / Services
            </p>
            <h1>What we can support you with.</h1>
            <p className="lede">
              Each support below maps to an NDIS line item, so you can see
              exactly which part of your plan it draws from. Combine as many as
              you need.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid grid--2">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <Link href={`/services/${s.slug}`} className="card" style={{ height: "100%" }}>
                  <div className="card__media">
                    <Img src={s.image} alt={s.imageAlt} />
                  </div>
                  <div className="card__body">
                    <span className="tag">{s.ndis.split("—")[0].trim()}</span>
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
