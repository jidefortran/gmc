import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { search } from "../lib/search";
import { IconSearch, IconClose } from "./ui";

export default function SearchDialog({ open, onClose }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const router = useRouter();

  const results = useMemo(() => search(query, 7), [query]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      const t = setTimeout(() => inputRef.current?.focus(), 40);
      document.body.style.overflow = "hidden";
      return () => {
        clearTimeout(t);
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  useEffect(() => setActive(0), [query]);

  if (!open) return null;

  const go = (href) => {
    onClose();
    router.push(href);
  };

  const onKeyDown = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (results.length ? (i + 1) % results.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (results.length ? (i - 1 + results.length) % results.length : 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (results[active]) go(results[active].href);
      else if (query.trim().length > 1) go(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div
      className="search-overlay"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="search-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Search this site"
        onKeyDown={onKeyDown}
      >
        <div className="search-panel__field">
          <span style={{ color: "var(--ink-faint)" }}>
            <IconSearch size={20} />
          </span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            placeholder="Search services, questions, pages…"
            aria-label="Search"
            autoComplete="off"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            style={{ background: "none", border: 0, color: "var(--ink-faint)" }}
          >
            <IconClose />
          </button>
        </div>

        {query.trim().length < 2 ? (
          <div className="search-empty">
            Try “respite”, “recovery coach”, “SIL” or “plan review”.
          </div>
        ) : results.length === 0 ? (
          <div className="search-empty">
            Nothing matched “{query.trim()}”. Give us a call on 0404 185 123 and
            we’ll point you in the right direction.
          </div>
        ) : (
          <ul className="search-results">
            {results.map((r, i) => (
              <li key={r.id} className={i === active ? "is-active" : ""}>
                <Link
                  href={r.href}
                  onClick={onClose}
                  onMouseEnter={() => setActive(i)}
                >
                  <span className="tag">{r.type}</span>
                  <h4>{r.title}</h4>
                  <p>{r.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div className="search-foot">
          <span>↑ ↓ to move · Enter to open · Esc to close</span>
          {query.trim().length > 1 && (
            <Link href={`/search?q=${encodeURIComponent(query.trim())}`} onClick={onClose}>
              All results
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
