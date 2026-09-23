import { useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { Reveal, IconPlus } from "../components/ui";
import { faqs } from "../data/site";

function Accordion({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="accordion">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div className="accordion__item" key={item.q}>
            <h3 style={{ margin: 0 }}>
              <button
                type="button"
                className="accordion__btn"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-btn-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{item.q}</span>
                <span className="accordion__icon"><IconPlus /></span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-btn-${i}`}
              className={`accordion__panel ${isOpen ? "is-open" : ""}`}
            >
              <div>
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Faq() {
  return (
    <Layout
      title="FAQ"
      description="Common questions about NDIS eligibility, service areas, plan management, support workers and complaints."
    >
      <section className="page-head">
        <div className="wrap wrap--narrow">
          <Reveal>
            <p className="breadcrumb">
              <Link href="/">Home</Link> / FAQ
            </p>
            <h1>Questions we get a lot.</h1>
            <p className="lede">
              If yours isn’t here, ask — we’d rather answer it than have you
              guess.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap wrap--narrow">
          <Reveal>
            <Accordion items={faqs} />
          </Reveal>
          <Reveal delay={120}>
            <p className="muted" style={{ marginTop: "2.5rem" }}>
              Still stuck? <Link href="/contact">Send us an enquiry</Link> and
              we’ll come back to you within a business day.
            </p>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
