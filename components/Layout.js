import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { site, nav, services } from "../data/site";
import SearchDialog from "./SearchDialog";
import { IconSearch, IconMenu, IconClose } from "./ui";
import { trackEvent, events } from "../lib/analytics";

export default function Layout({
  children,
  title,
  description,
  hideCta = false,
}) {
  const router = useRouter();
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  const pageTitle = title ? `${title} — ${site.name}` : `${site.name} — ${site.tagline}`;
  const pageDesc = description || site.description;

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(e.target?.tagName || "");
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing)) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => setMenuOpen(false), [router.asPath]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const isActive = (href) =>
    href === "/" ? router.pathname === "/" : router.pathname.startsWith(href);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#17453c" />
        <link rel="canonical" href={`${site.url}${router.asPath.split("?")[0]}`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${site.url}${router.asPath.split("?")[0]}`} />
        <meta property="og:image" content={`${site.url}/images/og-image.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: site.legalName,
              url: site.url,
              taxID: site.abn,
              telephone: site.phone,
              email: site.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: site.address.street,
                addressLocality: site.address.suburb,
                addressRegion: site.address.state,
                postalCode: site.address.postcode,
                addressCountry: "AU",
              },
              areaServed: site.serviceArea,
              sameAs: site.socials.map((s) => s.href).filter((h) => h.startsWith("http")),
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "17:00",
                },
              ],
            }),
          }}
        />
      </Head>

      <a className="skip-link" href="#main">Skip to content</a>

      <header className={`header ${stuck ? "is-stuck" : ""}`}>
        <div className="wrap header__inner">
          <Link href="/" className="brand" aria-label={`${site.name} home`}>
            Grace <span>&amp;</span> Mercy
          </Link>

          <nav className="nav" aria-label="Main">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav__link ${isActive(item.href) ? "is-active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header__actions">
            <button
              type="button"
              className="search-trigger"
              onClick={() => {
                trackEvent(events.SEARCH_OPEN, { location: "header" });
                setSearchOpen(true);
              }}
              aria-label="Search this site"
            >
              <IconSearch />
              <span className="search-trigger__label">Search</span>
              <kbd>/</kbd>
            </button>

            <Link href="/contact" className="btn btn--primary" style={{ display: "none" }}>
              Enquire
            </Link>

            <button
              type="button"
              className="burger"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>

        <div
          className={`nav-backdrop ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />

        <div
          id="mobile-nav"
          className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="mobile-nav__head">
            <span className="brand" style={{ fontSize: "1.05rem" }}>
              Grace <span>&amp;</span> Mercy
            </span>
            <button
              type="button"
              className="mobile-nav__close"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <IconClose />
            </button>
          </div>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={isActive(item.href) ? "is-active" : ""}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mobile-nav__foot">
            <Link href={site.phoneHref} className="btn btn--primary">
              Call {site.phone}
            </Link>
          </div>
        </div>
      </header>

      <main id="main">{children}</main>

      {!hideCta && (
        <section className="section">
          <div className="wrap">
            <div className="cta">
              <h2>Not sure where to start?</h2>
              <p>
                Tell us roughly what you need. If we’re not the right provider
                for it, we’ll say so and point you to someone who is.
              </p>
              <div className="cta__actions">
                <Link href="/contact" className="btn btn--light">Make an enquiry</Link>
                <Link href={site.phoneHref} className="btn btn--ghost" style={{ borderColor: "rgba(255,255,255,.35)", color: "#fff" }}>
                  {site.phone}
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <footer className="footer">
        <div className="wrap">
          <div className="footer__grid">
            <div>
              <span className="footer__brand">{site.name}</span>
              <p className="footer__about">
                A disability support provider based in Perth, Western Australia,
                partnering with people living with disability to improve quality
                of life through a person-centred approach.
              </p>
              <div className="ndis-note">Registered NDIS provider</div>
              {site.abn && (
                <p className="footer__about" style={{ fontSize: "0.82rem", marginTop: "0.75rem", opacity: 0.75 }}>
                  ABN {site.abn}
                </p>
              )}
            </div>

            <div>
              <h4>Services</h4>
              <ul>
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`}>{s.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Contact</h4>
              <ul>
                <li>
                  <Link href={site.phoneHref} onClick={() => trackEvent(events.PHONE_CLICK, { location: "footer" })}>
                    {site.phone}
                  </Link>
                </li>
                <li>
                  <Link href={`mailto:${site.email}`} onClick={() => trackEvent(events.EMAIL_CLICK, { location: "footer" })}>
                    {site.email}
                  </Link>
                </li>
                <li>
                  {site.address.street},<br />
                  {site.address.suburb} {site.address.state} {site.address.postcode}
                </li>
              </ul>
              <h4 style={{ marginTop: "1.75rem" }}>More</h4>
              <ul>
                <li><Link href="/about">About us</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/referral">Make a referral</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/complaints">Complaints</Link></li>
                <li><Link href="/search">Search</Link></li>
                <li><Link href="/privacy">Privacy</Link></li>
                <li><Link href="/terms">Terms</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer__bottom">
            <span>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</span>
            <span>Serving {site.serviceArea}.</span>
          </div>
        </div>
      </footer>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
