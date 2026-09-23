import Link from "next/link";
import Layout from "../components/Layout";
import { Reveal } from "../components/ui";
import { site } from "../data/site";

export default function Privacy() {
  return (
    <Layout title="Privacy" description="How Grace & Mercy Care Services collects, uses and protects personal information.">
      <section className="page-head">
        <div className="wrap wrap--narrow">
          <Reveal>
            <p className="breadcrumb"><Link href="/">Home</Link> / Privacy</p>
            <h1>Privacy Policy</h1>
            <p className="lede">Last updated: [insert date before publishing]</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap wrap--narrow prose">
          <Reveal>
            <div className="notice" style={{ marginBottom: "2rem" }}>
              This is a generic privacy policy template, drafted to reflect the
              structure of the Privacy Act 1988 (Cth) and the Australian
              Privacy Principles (APPs), and the NDIS Practice Standards&apos;
              record-keeping requirements. It is not legal advice. Have it
              reviewed by a qualified lawyer before publishing, so it matches
              exactly what you collect and how you actually handle it.
            </div>

            <h2 style={{ marginTop: 0 }}>1. About this policy</h2>
            <p>
              {site.legalName} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting
              the privacy of personal information in accordance with the
              Privacy Act 1988 (Cth) and the Australian Privacy Principles.
              This policy explains what personal information we collect, why,
              how we use and store it, and how you can access or correct it.
            </p>

            <h2>2. What we collect</h2>
            <p>Depending on how you interact with us, we may collect:</p>
            <ul className="checklist">
              <li>Contact details: name, email, phone number, address</li>
              <li>Enquiry and referral form content, including details you provide about a participant</li>
              <li>NDIS-related information: NDIS number, plan management type, plan details, funding and goals</li>
              <li>Sensitive information under the Privacy Act — including health information and information about disability — where relevant to delivering a support</li>
              <li>Employment application details, for people applying to work with us</li>
              <li>Website usage data collected through analytics (see section 8)</li>
            </ul>
            <p>
              We only collect sensitive information (such as health or
              disability information) with your consent, or where otherwise
              permitted or required by law, and only what is reasonably
              necessary to deliver or coordinate your supports.
            </p>

            <h2>3. How we collect it</h2>
            <p>
              Mostly directly from you or your representative — through our
              website forms, by phone, email, or in person. We may also
              collect information from a support coordinator, plan manager,
              treating clinician, family member or guardian acting on your
              behalf, or from the NDIA, where you&apos;ve consented to that or
              it&apos;s otherwise lawful.
            </p>

            <h2>4. Why we collect and use it</h2>
            <p>We use personal information to:</p>
            <ul className="checklist">
              <li>Respond to enquiries and referrals</li>
              <li>Assess and coordinate the supports you&apos;re seeking</li>
              <li>Deliver services under a service agreement, including day-to-day support notes and incident records</li>
              <li>Meet our reporting and record-keeping obligations under the NDIS Practice Standards and the NDIS Act</li>
              <li>Manage staffing, including assessing job applications</li>
              <li>Improve this website, using de-identified analytics data</li>
            </ul>
            <p>
              We don&apos;t use personal information for direct marketing without
              your consent, and we don&apos;t sell personal information.
            </p>

            <h2>5. Who we may share it with</h2>
            <p>We may disclose personal information to:</p>
            <ul className="checklist">
              <li>Your support coordinator, plan manager, or other providers involved in your supports, with your consent</li>
              <li>The NDIS Quality and Safeguards Commission and the NDIA, where required by law or the NDIS Practice Standards — for example, reportable incidents</li>
              <li>Emergency services, treating medical practitioners or next of kin, where there&apos;s a serious risk to health or safety</li>
              <li>Our service providers — for example, website hosting, email delivery, or payroll — bound by confidentiality obligations</li>
              <li>A person&apos;s legal guardian or authorised representative, where applicable</li>
            </ul>
            <p>We do not disclose personal information overseas except where a service provider we use (such as website hosting) stores data on servers located outside Australia — see section 6.</p>

            <h2>6. Storage, security and overseas hosting</h2>
            <p>
              We store information on access-controlled systems and take
              reasonable steps to protect it from misuse, loss, unauthorised
              access, modification or disclosure. This website may be hosted
              on servers located outside Australia (for example, through a
              cloud hosting provider); where that&apos;s the case, the provider is
              contractually required to protect data to a comparable
              standard.
            </p>
            <p>
              Participant service records are retained for the period
              required under the NDIS Practice Standards and applicable
              record-keeping laws, and securely destroyed or de-identified
              once that period has passed.
            </p>

            <h2>7. Access and correction</h2>
            <p>
              You can ask to see what personal information we hold about you,
              or ask us to correct it, at any time. Email{" "}
              <Link href={`mailto:${site.email}`}>{site.email}</Link> or call{" "}
              <Link href={site.phoneHref}>{site.phone}</Link>. We&apos;ll respond
              within a reasonable time and won&apos;t charge you for a straightforward request. In some
              circumstances permitted by law, we may need to refuse access —
              if so, we&apos;ll explain why.
            </p>

            <h2>8. Cookies and website analytics</h2>
            <p>
              This website does not use cookies for advertising or tracking
              you across other sites. Where analytics are enabled, they use
              aggregated, privacy-friendly measurement and do not identify
              individual visitors. Enquiry and referral forms are the only
              places this site asks for personal information directly.
            </p>

            <h2>9. Children and vulnerable people</h2>
            <p>
              Where a participant is a child or a person who requires a
              guardian or representative to provide consent, we collect and
              disclose personal information consistent with that person&apos;s
              consent arrangements, and take extra care with sensitive
              information about them.
            </p>

            <h2>10. Making a privacy complaint</h2>
            <p>
              If you think we&apos;ve mishandled your personal information, tell
              us first — email{" "}
              <Link href={`mailto:${site.email}`}>{site.email}</Link> or call{" "}
              <Link href={site.phoneHref}>{site.phone}</Link>, or see our{" "}
              <Link href="/complaints">Complaints page</Link>. If you&apos;re not
              satisfied with our response, you can complain to the Office of
              the Australian Information Commissioner (OAIC):
            </p>
            <p>
              <strong>1300 363 992</strong>
              <br />
              <Link href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer">www.oaic.gov.au</Link>
            </p>

            <h2>11. Changes to this policy</h2>
            <p>
              We may update this policy from time to time. The current
              version will always be available on this page.
            </p>

            <h2>12. Contact us</h2>
            <p>
              {site.legalName}
              <br />
              {site.address.street}, {site.address.suburb} {site.address.state} {site.address.postcode}
              <br />
              <Link href={site.phoneHref}>{site.phone}</Link> ·{" "}
              <Link href={`mailto:${site.email}`}>{site.email}</Link>
            </p>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
