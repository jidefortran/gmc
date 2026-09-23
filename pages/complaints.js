import Link from "next/link";
import Layout from "../components/Layout";
import { Reveal } from "../components/ui";
import { site, ndisCommission } from "../data/site";

export default function Complaints() {
  return (
    <Layout
      title="Complaints"
      description="How to raise a concern or make a complaint with Grace & Mercy Care Services, or with the NDIS Quality and Safeguards Commission."
    >
      <section className="page-head">
        <div className="wrap wrap--narrow">
          <Reveal>
            <p className="breadcrumb"><Link href="/">Home</Link> / Complaints</p>
            <h1>Complaints and Feedback Policy</h1>
            <p className="lede">
              If something hasn&apos;t gone the way it should, we want to know —
              and you always have the right to raise it outside of us too.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap wrap--narrow prose">
          <Reveal>
            <div className="notice" style={{ marginBottom: "2rem" }}>
              This is a generic complaints policy template, structured
              around the NDIS Practice Standards&apos; complaints management
              requirements. It is not legal advice. Replace the process and
              timeframes below with your actual documented procedure —
              the one on file with the NDIS Commission — before publishing.
            </div>

            <h2 style={{ marginTop: 0 }}>Our commitment</h2>
            <p>
              You have the right to make a complaint about any part of the
              supports we provide, without it affecting the supports you
              receive. We treat every complaint seriously, and you&apos;re
              welcome to bring a support person, family member, advocate or
              interpreter into the process at any point.
            </p>

            <h2>How to make a complaint</h2>
            <p>You can raise a concern:</p>
            <ul className="checklist">
              <li>By phone: <Link href={site.phoneHref}>{site.phone}</Link></li>
              <li>By email: <Link href={`mailto:${site.email}`}>{site.email}</Link></li>
              <li>In writing, to {site.address.street}, {site.address.suburb} {site.address.state} {site.address.postcode}</li>
              <li>Verbally, to your support worker, coordinator, or any staff member, who will pass it on</li>
              <li>Anonymously, if you prefer not to give your name</li>
            </ul>

            <h2>What happens next</h2>
            <p>
              We&apos;ll acknowledge your complaint within [insert business days
              — e.g. 2 business days], and let you know who is handling it.
              We&apos;ll look into what happened, speak with the people
              involved, and aim to resolve most complaints within [insert
              timeframe — e.g. 21 days]. If it&apos;s going to take longer, we&apos;ll
              tell you why and give you an updated timeframe.
            </p>
            <p>
              Once we&apos;ve investigated, we&apos;ll come back to you with what we
              found and what we&apos;re doing about it — including any changes
              to how we deliver supports, where relevant.
            </p>

            <h2>Reportable incidents</h2>
            <p>
              Some matters — such as allegations of abuse or neglect, or
              unauthorised use of restrictive practices — must be reported by
              us to the NDIS Quality and Safeguards Commission regardless of
              whether you also want to make a complaint. If that applies, we&apos;ll
              explain what that process involves and keep you informed.
            </p>

            <h2>If you&apos;d rather not raise it with us</h2>
            <p>
              You can contact the NDIS Quality and Safeguards Commission
              directly, at any time, including anonymously if you prefer.
              This covers concerns about a service we&apos;ve provided, the
              conduct of a staff member, or anything covered by the NDIS
              Code of Conduct:
            </p>
            <p>
              <strong>{ndisCommission.complaintsPhone}</strong> (free call)
              <br />
              <Link href={ndisCommission.website} target="_blank" rel="noopener noreferrer">
                {ndisCommission.website}
              </Link>
            </p>
            <p>
              If your complaint is specifically about how we&apos;ve handled your
              personal information, see our{" "}
              <Link href="/privacy">Privacy Policy</Link> for how to contact
              the Office of the Australian Information Commissioner instead.
            </p>

            <h2>No repercussions</h2>
            <p>
              Raising a concern, complaint or feedback — with us or with the
              NDIS Commission — will never affect the supports you receive
              from us.
            </p>

            <p className="field__hint" style={{ marginTop: "2.5rem" }}>
              Note for the site owner: fill in the bracketed timeframes above
              to match your actual documented complaints procedure, and have
              the whole page reviewed against what&apos;s on file with the NDIS
              Commission before publishing.
            </p>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
