import Link from "next/link";
import Layout from "../components/Layout";
import { Reveal } from "../components/ui";
import { site } from "../data/site";

export default function Terms() {
  return (
    <Layout title="Terms" description="Terms of use for the Grace & Mercy Care Services website.">
      <section className="page-head">
        <div className="wrap wrap--narrow">
          <Reveal>
            <p className="breadcrumb"><Link href="/">Home</Link> / Terms</p>
            <h1>Terms of Use</h1>
            <p className="lede">Last updated: [insert date before publishing]</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap wrap--narrow prose">
          <Reveal>
            <div className="notice" style={{ marginBottom: "2rem" }}>
              This is a generic terms-of-use template. It is not legal advice.
              Have it reviewed by a qualified lawyer before publishing —
              particularly the liability and governing law sections, which
              should reflect your actual business structure and insurance.
            </div>

            <h2 style={{ marginTop: 0 }}>1. Acceptance of these terms</h2>
            <p>
              This website is operated by {site.legalName}. By using it, you
              agree to these terms. If you don&apos;t agree, please don&apos;t use the
              site.
            </p>

            <h2>2. General information only</h2>
            <p>
              Content on this website — including service descriptions,
              eligibility information and FAQs — is general information
              only. It is not clinical, legal, financial or NDIS planning
              advice, and it doesn&apos;t form part of, or vary, any service
              agreement. What you actually receive is set out in the written
              service agreement between you and us.
            </p>

            <h2>3. No guarantee of availability</h2>
            <p>
              Accommodation vacancies, rosters and service availability
              change regularly. Nothing on this site is an offer, a
              reservation, or a guarantee of a place in any program or
              accommodation. Enquiry and referral forms register your
              interest — they don&apos;t create a service agreement.
            </p>

            <h2>4. Referrals and enquiries</h2>
            <p>
              Submitting a referral or enquiry through this site doesn&apos;t
              guarantee we can accept the referral, and doesn&apos;t create any
              contractual relationship. We&apos;ll assess referrals against
              current capacity, staffing, and fit, and let you know the
              outcome.
            </p>
            <p>
              Please don&apos;t submit sensitive clinical detail through the
              website forms. If a matter is urgent or involves risk to
              someone&apos;s safety, call us on{" "}
              <Link href={site.phoneHref}>{site.phone}</Link>, or 000 in an
              emergency.
            </p>

            <h2>5. Acceptable use</h2>
            <p>You agree not to use this website to:</p>
            <ul className="checklist">
              <li>Submit false, misleading or malicious information</li>
              <li>Attempt to gain unauthorised access to our systems</li>
              <li>Copy, scrape or republish site content for commercial purposes without permission</li>
              <li>Upload or transmit anything unlawful, defamatory, or that infringes another person&apos;s rights</li>
            </ul>

            <h2>6. Intellectual property</h2>
            <p>
              Text, images, layout and design on this site belong to{" "}
              {site.legalName} or are used with permission, unless otherwise
              stated. You may view and print pages for personal,
              non-commercial use, but may not reproduce, distribute or modify
              site content without our written consent.
            </p>

            <h2>7. Third-party links</h2>
            <p>
              This site may link to external organisations (for example, the
              NDIS Quality and Safeguards Commission) for convenience. We
              don&apos;t control and aren&apos;t responsible for the content,
              accuracy, or availability of external sites.
            </p>

            <h2>8. Liability</h2>
            <p>
              To the extent permitted by law, {site.legalName} excludes all
              liability for any loss or damage arising from your use of this
              website, including reliance on its content, except where that
              liability cannot be excluded under the Australian Consumer Law
              or other applicable legislation. Nothing in these terms limits
              any rights you have that cannot lawfully be excluded.
            </p>

            <h2>9. Accessibility</h2>
            <p>
              This site is built with a visible focus outline for keyboard
              navigation, a skip-to-content link, and reduced motion for
              anyone whose browser or device requests it. If something on
              this site is difficult to use with a screen reader, keyboard,
              or other assistive technology, please tell us at{" "}
              <Link href={`mailto:${site.email}`}>{site.email}</Link> and
              we&apos;ll fix it.
            </p>

            <h2>10. Privacy</h2>
            <p>
              Our handling of personal information collected through this
              site is set out in our{" "}
              <Link href="/privacy">Privacy Policy</Link>.
            </p>

            <h2>11. Changes to these terms</h2>
            <p>
              We may update these terms from time to time. Continued use of
              the site after changes are posted means you accept the updated
              terms.
            </p>

            <h2>12. Governing law</h2>
            <p>
              These terms are governed by the laws of Western Australia,
              Australia. You submit to the non-exclusive jurisdiction of the
              courts of Western Australia for any dispute arising from your
              use of this site.
            </p>

            <h2>13. Contact</h2>
            <p>
              Questions about these terms:{" "}
              <Link href={`mailto:${site.email}`}>{site.email}</Link> or{" "}
              <Link href={site.phoneHref}>{site.phone}</Link>.
            </p>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
