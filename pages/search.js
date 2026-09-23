import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { Reveal, IconSearch } from "../components/ui";
import { search } from "../lib/search";

export default function SearchPage() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!router.isReady) return;
    setQuery(typeof router.query.q === "string" ? router.query.q : "");
  }, [router.isReady, router.query.q]);

  const results = useMemo(() => search(query, 20), [query]);
  const trimmed = query.trim();

  const onSubmit = (e) => {
    e.preventDefault();
    router.replace(
      trimmed ? `/search?q=${encodeURIComponent(trimmed)}` : "/search",
      undefined,
      { shallow: true }
    );
  };

  return (
    <Layout title="Search" description="Search services, pages and questions.">
      <section className="page-head">
        <div className="wrap wrap--narrow">
          <Reveal>
            <p className="breadcrumb">
              <Link href="/">Home</Link> / Search
            </p>
            <h1>Search</h1>
            <p className="lede" style={{ marginBottom: "2rem" }}>
              Everything on this site — services, pages and common questions.
            </p>

            <form className="searchbar" onSubmit={onSubmit} role="search">
              <span style={{ color: "var(--ink-faint)" }}><IconSearch /></span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="What are you looking for?"
                aria-label="Search this site"
                autoComplete="off"
              />
              <button type="submit" className="btn btn--primary">Search</button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap wrap--narrow">
          {trimmed.length < 2 ? (
            <p className="muted">Type at least two characters to search.</p>
          ) : (
            <>
              <p className="muted">
                {results.length} result{results.length === 1 ? "" : "s"} for “{trimmed}”
              </p>
              {results.length === 0 ? (
                <p className="muted" style={{ marginTop: "1.5rem" }}>
                  Nothing matched. Try a broader word like “accommodation”,
                  “coaching” or “respite” — or just{" "}
                  <Link href="/contact">ask us directly</Link>.
                </p>
              ) : (
                <ul className="result-list">
                  {results.map((r) => (
                    <li key={r.id}>
                      <Link href={r.href}>
                        <span className="tag" style={{ marginBottom: "0.5rem" }}>{r.type}</span>
                        <h3 style={{ fontSize: "1.15rem", marginBottom: "0.35rem" }}>{r.title}</h3>
                        <p className="muted" style={{ fontSize: "0.92rem" }}>{r.summary}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      </section>
    </Layout>
  );
}
