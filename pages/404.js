import Link from "next/link";
import Layout from "../components/Layout";
import { IconArrow } from "../components/ui";

export default function NotFound() {
  return (
    <Layout title="Page not found" hideCta>
      <section className="wrap notfound">
        <span className="code">404</span>
        <h1 style={{ fontSize: "var(--step-2)", marginBottom: "1rem" }}>
          That page isn’t here.
        </h1>
        <p className="muted" style={{ marginBottom: "2rem" }}>
          It may have moved when the site was rebuilt. Try searching, or start
          from the services page.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/services" className="btn btn--primary">
            Browse services <IconArrow />
          </Link>
          <Link href="/search" className="btn btn--ghost">Search the site</Link>
        </div>
      </section>
    </Layout>
  );
}
