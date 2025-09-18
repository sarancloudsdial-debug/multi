// BlogPage.jsx
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";

/**
 * BlogPage
 * - Full blog layout: hero, articles list, sidebar (search, categories, tags, recent)
 * - Theme uses logo blue #4368b1
 *
 * Usage: import BlogPage from "./BlogPage"; <BlogPage />
 */

const LOGO_BLUE = "#4368b1";
const LOGO_BLUE_DARK = "#34528f";

const samplePosts = [
  {
    id: "best-api-india",
    title: "Best WhatsApp API Providers in India (2025 Guide)",
    excerpt:
      "A clear breakdown of WhatsApp API providers, pricing models, and use-cases so you can pick the right provider for your business.",
    cover:
      "https://images.unsplash.com/photo-1580894908361-1c9f36b3a7c0?q=80&w=1400&auto=format&fit=crop",
    date: "2025-08-10",
    category: "API & Integrations",
    tags: ["WhatsApp API", "Integrations", "Providers"],
    content: [
      `Choosing the right WhatsApp API provider can be the difference between reliable messaging at scale and unexpected downtime or high costs. This guide compares the top providers in India, focusing on pricing, throughput, template management, and developer friendliness.`,
      `We evaluate providers based on: message delivery SLA, support, ease of onboarding, pricing per message, and advanced features (rich messages, templates, media, multi-agent routing). For each provider we include a brief "who it's best for" summary so you can match business needs to offerings.`,
      `Bottom line: for startups and SMBs, pick a vendor with a simple onboarding and predictable pricing. For enterprises, favor providers that offer high throughput, SLAs, and integrations with CRMs.`
    ],
    author: "Aamir Khan",
    readTime: "7 min",
  },
  {
    id: "broadcast-strategy",
    title: "How to Run High-Converting WhatsApp Broadcasts",
    excerpt:
      "Broadcasts are powerful — if used right. This article outlines segmentation, personalization, and timing best practices.",
    cover:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop",
    date: "2025-06-20",
    category: "Marketing",
    tags: ["Broadcast", "Campaigns", "Segmentation"],
    content: [
      `Broadcast messages on WhatsApp offer an unparalleled open-rate compared to email, but they must be personalized, permission-based, and relevant. Smart segmentation is the first step: group your audience by behavior, lifecycle, and purchase patterns.`,
      `Use templates for transactional content and personalized variables for marketing content. A/B test subject lines and CTA phrasing to maximise CTR. Respect user consent and frequency caps to avoid opt-outs.`,
      `Measure success with click-through rates, conversion per segment, and re-engagement rates. Use those signals to refine future broadcasts.`
    ],
    author: "Priya Sharma",
    readTime: "6 min",
  },
  {
    id: "automation-playbook",
    title: "Automation Playbook: 7 Flows That Save Hours",
    excerpt:
      "An automation playbook for common WhatsApp flows — welcome sequences, order updates, FAQ answers, and more.",
    cover:
      "https://images.unsplash.com/photo-1581091215367-6f0b1cfefc35?q=80&w=1400&auto=format&fit=crop",
    date: "2025-04-02",
    category: "Product",
    tags: ["Automation", "Workflows", "Support"],
    content: [
      `Automations are your best opportunity to scale support without sacrificing quality. This playbook includes 7 repeatable flows you can implement quickly: welcome onboarding, cart abandonment, order tracking, delivery confirmation, subscription renewal reminder, FAQ bot, and escalation to human agent.`,
      `Design each flow with clear entry conditions, guardrails for errors, and metrics to measure effectiveness. Start small — implement a single high-value flow, measure impact, then expand.`,
      `Pro tip: combine automation with lightweight human handoff rules so customers can surface to a human when intent is ambiguous or when sentiment drops.`
    ],
    author: "Daniel Kim",
    readTime: "8 min",
  },
];

const allCategories = [...new Set(samplePosts.map((p) => p.category))];
const allTags = [...new Set(samplePosts.flatMap((p) => p.tags))];

function formatDate(dateStr) {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  } catch {
    return dateStr;
  }
}

export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [visibleArticleId, setVisibleArticleId] = useState(null);

  const filtered = useMemo(() => {
    return samplePosts.filter((p) => {
      const q = query.trim().toLowerCase();
      if (q) {
        const inText =
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.content.join(" ").toLowerCase().includes(q);
        if (!inText) return false;
      }
      if (selectedCategory && p.category !== selectedCategory) return false;
      if (selectedTag && !p.tags.includes(selectedTag)) return false;
      return true;
    });
  }, [query, selectedCategory, selectedTag]);

  function resetFilters() {
    setQuery("");
    setSelectedCategory("");
    setSelectedTag("");
  }

  return (
    <div style={pageStyles.wrapper}>
      <header style={pageStyles.hero}>
        <div style={pageStyles.heroInner}>
          <h1 style={pageStyles.heroTitle}>Multipli Blog — Insights & Guides</h1>
          <p style={pageStyles.heroSubtitle}>
            Practical articles about WhatsApp API, messaging strategy, automation and product updates —
            curated to help your team grow.
          </p>
        </div>
      </header>

      <main style={pageStyles.main}>
        <div style={pageStyles.contentGrid}>
          <section style={pageStyles.articles}>
            <div style={pageStyles.toolsRow}>
              <div style={pageStyles.searchBox}>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles, e.g. 'broadcast', 'API', 'automation'..."
                  style={pageStyles.searchInput}
                  aria-label="Search articles"
                />
                {query ? (
                  <button onClick={() => setQuery("")} style={pageStyles.clearBtn}>
                    ✕
                  </button>
                ) : null}
              </div>

              <div style={pageStyles.filterRow}>
                <button
                  onClick={() => { setSelectedCategory(""); setSelectedTag(""); }}
                  style={selectedCategory === "" && selectedTag === "" ? pageStyles.filterBtnActive : pageStyles.filterBtn}
                >
                  All
                </button>
                {allCategories.map((c) => (
                  <button
                    key={c}
                    onClick={() => { setSelectedCategory(c); setSelectedTag(""); }}
                    style={selectedCategory === c ? pageStyles.filterBtnActive : pageStyles.filterBtn}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 18 }}>
              <p style={pageStyles.resultsInfo}>
                {filtered.length} article{filtered.length !== 1 ? "s" : ""} found
                {selectedCategory && ` · category: ${selectedCategory}`}
                {selectedTag && ` · tag: ${selectedTag}`}
              </p>
            </div>

            <div style={pageStyles.list}>
              {filtered.map((post) => (
                <article key={post.id} style={pageStyles.postCard}>
                  <img src={post.cover} alt={post.title} style={pageStyles.postImage} />
                  <div style={pageStyles.postBody}>
                    <div style={pageStyles.metaRow}>
                      <span style={pageStyles.categoryPill}>{post.category}</span>
                      <span style={pageStyles.metaSmall}>{formatDate(post.date)} · {post.readTime}</span>
                    </div>

                    <h2 style={pageStyles.postTitle}>{post.title}</h2>
                    <p style={pageStyles.postExcerpt}>{post.excerpt}</p>

                    {/* Expand/collapse longer content */}
                    {visibleArticleId === post.id ? (
                      <div style={pageStyles.fullContent}>
                        {post.content.map((p, idx) => (
                          <p key={idx} style={pageStyles.paragraph}>{p}</p>
                        ))}

                        <div style={pageStyles.tagRow}>
                          {post.tags.map((t) => (
                            <button
                              key={t}
                              onClick={() => setSelectedTag(t)}
                              style={pageStyles.tag}
                            >
                              #{t}
                            </button>
                          ))}
                        </div>

                        <div style={{ marginTop: 14 }}>
                          <button
                            onClick={() => setVisibleArticleId(null)}
                            style={pageStyles.secondaryBtn}
                          >
                            Collapse ▲
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div style={{ display: "flex", gap: 12, marginTop: 14, alignItems: "center" }}>
                        <a
                          onClick={(e) => { e.preventDefault(); setVisibleArticleId(post.id); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                          href="#"
                          style={pageStyles.readMore}
                        >
                          Read full article →
                        </a>
                        <div style={{ marginLeft: "auto" }}>
                          <button style={pageStyles.iconBtn}>{post.author}</button>
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside style={pageStyles.sidebar}>
            <div style={pageStyles.widget}>
              <h4 style={pageStyles.widgetTitle}>Recent Posts</h4>
              {samplePosts.slice(0, 3).map((p) => (
                <a
                  key={p.id}
                  href="#"
                  onClick={(e) => { e.preventDefault(); setVisibleArticleId(p.id); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  style={pageStyles.recentItem}
                >
                  <img src={p.cover} alt={p.title} style={pageStyles.recentThumb} />
                  <div>
                    <div style={pageStyles.recentTitle}>{p.title}</div>
                    <div style={pageStyles.recentMeta}>{formatDate(p.date)}</div>
                  </div>
                </a>
              ))}
            </div>

            <div style={pageStyles.widget}>
              <h4 style={pageStyles.widgetTitle}>Categories</h4>
              <div style={pageStyles.categoryList}>
                <button
                  onClick={() => setSelectedCategory("")}
                  style={selectedCategory === "" ? pageStyles.categoryBtnActive : pageStyles.categoryBtn}
                >
                  All
                </button>
                {allCategories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedCategory(c)}
                    style={selectedCategory === c ? pageStyles.categoryBtnActive : pageStyles.categoryBtn}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div style={pageStyles.widget}>
              <h4 style={pageStyles.widgetTitle}>Popular Tags</h4>
              <div style={pageStyles.tagsWrap}>
                {allTags.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTag(t)}
                    style={selectedTag === t ? pageStyles.tagActive : pageStyles.tag}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div style={pageStyles.widget}>
              <h4 style={pageStyles.widgetTitle}>Subscribe</h4>
              <p style={{ color: "#4B5563", marginBottom: 8 }}>Get weekly product & growth tips in your inbox.</p>
              <div style={{ display: "flex", gap: 8 }}>
                <input placeholder="your@email.com" style={pageStyles.subInput} />
                <button style={pageStyles.primaryBtn}>Subscribe</button>
              </div>
            </div>
          </aside>
        </div>
      </main>

    </div>
  );
}

/* ---------------- Styles (JS objects) ---------------- */

const pageStyles = {
  wrapper: {
    fontFamily: "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif",
    color: "#0f172a",
    lineHeight: 1.5,
  },
  hero: {
    background: `linear-gradient(90deg, rgba(67,104,177,0.06), rgba(67,104,177,0.03))`,
    padding: "64px 20px",
    borderBottom: "1px solid rgba(15,23,42,0.04)",
  },
  heroInner: {
    maxWidth: 1200,
    margin: "0 auto",
    textAlign: "center",
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: 800,
    color: LOGO_BLUE,
    margin: 0,
    letterSpacing: "-0.5px",
  },
  heroSubtitle: {
    color: "#475569",
    fontSize: 16,
    marginTop: 10,
  },

  main: {
    maxWidth: 1200,
    margin: "36px auto",
    padding: "0 20px",
  },
  contentGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 320px",
    gap: 32,
  },

  articles: {
    minWidth: 0,
  },
  toolsRow: {
    display: "flex",
    gap: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    width: "64%",
    maxWidth: 640,
    background: "#fff",
    padding: 8,
    borderRadius: 12,
    boxShadow: "0 6px 18px rgba(15,23,42,0.04)",
    border: "1px solid rgba(15,23,42,0.04)",
  },
  searchInput: {
    flex: 1,
    border: "none",
    outline: "none",
    padding: "10px 8px",
    fontSize: 15,
  },
  clearBtn: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    color: "#64748b",
    fontSize: 14,
  },

  filterRow: {
    display: "flex",
    gap: 8,
    alignItems: "center",
  },
  filterBtn: {
    background: "#fff",
    border: "1px solid rgba(15,23,42,0.06)",
    padding: "8px 12px",
    borderRadius: 8,
    cursor: "pointer",
    color: "#111827",
  },
  filterBtnActive: {
    background: LOGO_BLUE,
    color: "#fff",
    padding: "8px 12px",
    borderRadius: 8,
    cursor: "pointer",
    border: "none",
  },

  resultsInfo: {
    color: "#64748b",
    fontSize: 14,
    marginBottom: 8,
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    marginTop: 12,
  },

  postCard: {
    display: "flex",
    gap: 18,
    background: "#fff",
    borderRadius: 14,
    overflow: "hidden",
    boxShadow: "0 8px 30px rgba(15,23,42,0.04)",
  },
  postImage: {
    width: 280,
    height: 180,
    objectFit: "cover",
    display: "block",
    flexShrink: 0,
  },
  postBody: {
    padding: 18,
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  metaRow: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    marginBottom: 6,
  },
  categoryPill: {
    background: "rgba(67,104,177,0.08)",
    color: LOGO_BLUE,
    padding: "6px 10px",
    fontSize: 13,
    borderRadius: 999,
    fontWeight: 700,
  },
  metaSmall: {
    color: "#94a3b8",
    fontSize: 13,
  },
  postTitle: {
    margin: 0,
    fontSize: 20,
    color: "#0f172a",
    fontWeight: 800,
  },
  postExcerpt: {
    color: "#475569",
    marginTop: 8,
    marginBottom: 8,
  },
  readMore: {
    color: LOGO_BLUE,
    fontWeight: 700,
    textDecoration: "none",
    cursor: "pointer",
  },
  iconBtn: {
    background: "transparent",
    border: "1px solid rgba(15,23,42,0.06)",
    padding: "6px 10px",
    borderRadius: 8,
    fontSize: 13,
  },

  fullContent: {
    marginTop: 14,
  },
  paragraph: {
    color: "#374151",
    marginBottom: 12,
  },
  tagRow: {
    display: "flex",
    gap: 8,
    marginTop: 6,
    flexWrap: "wrap",
  },
  tag: {
    background: "#f8fafc",
    border: "1px solid rgba(15,23,42,0.04)",
    color: LOGO_BLUE,
    padding: "6px 10px",
    borderRadius: 8,
    cursor: "pointer",
    fontSize: 13,
    fontWeight: 600,
  },

  secondaryBtn: {
    background: "#fff",
    border: "1px solid rgba(15,23,42,0.06)",
    padding: "8px 12px",
    borderRadius: 8,
    cursor: "pointer",
  },

  /* Sidebar */
  sidebar: {
    position: "relative",
    top: 0,
  },
  widget: {
    background: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    boxShadow: "0 8px 30px rgba(15,23,42,0.04)",
  },
  widgetTitle: {
    margin: 0,
    fontSize: 15,
    fontWeight: 800,
    color: "#0f172a",
    marginBottom: 8,
  },
  recentItem: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    textDecoration: "none",
    color: "inherit",
    padding: "8px 6px",
    borderRadius: 8,
  },
  recentThumb: {
    width: 72,
    height: 56,
    objectFit: "cover",
    borderRadius: 8,
    flexShrink: 0,
  },
  recentTitle: {
    fontSize: 14,
    fontWeight: 700,
  },
  recentMeta: {
    fontSize: 12,
    color: "#64748b",
  },
  categoryList: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  categoryBtn: {
    textAlign: "left",
    background: "#fff",
    border: "1px solid rgba(15,23,42,0.04)",
    padding: "8px 12px",
    borderRadius: 8,
    cursor: "pointer",
  },
  categoryBtnActive: {
    background: LOGO_BLUE,
    color: "#fff",
    padding: "8px 12px",
    borderRadius: 8,
    border: "none",
    cursor: "pointer",
  },
  tagsWrap: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
  },
  tagActive: {
    background: LOGO_BLUE,
    color: "#fff",
    padding: "6px 10px",
    borderRadius: 8,
    border: "none",
    cursor: "pointer",
    fontWeight: 700,
  },

  subInput: {
    flex: 1,
    padding: "10px 12px",
    borderRadius: 8,
    border: "1px solid rgba(15,23,42,0.06)",
  },

  primaryBtn: {
    background: LOGO_BLUE,
    color: "#fff",
    border: "none",
    padding: "10px 12px",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: 700,
  },

  footer: {
    textAlign: "center",
    padding: "36px 20px",
    color: "#94a3b8",
    marginTop: 40,
  },
};

/* -- Responsive tweaks -- */
const mq = `@media (max-width: 980px)`;
(function appendResponsiveStylesheet() {
  // append a small temp stylesheet to support responsive grid in non-CSS files
  if (typeof document === "undefined") return;
  if (document.getElementById("blogpage-inline-resp")) return;
  const style = document.createElement("style");
  style.id = "blogpage-inline-resp";
  style.innerHTML = `
    ${mq} {
      .__bp_contentGrid { grid-template-columns: 1fr !important; }
      .__bp_postImage { display: none; }
    }
  `;
  document.head.appendChild(style);

  // add class names so CSS can target them (only in browser)
  requestAnimationFrame(() => {
    const root = document.querySelector("body > div");
    if (!root) return;
    root.querySelectorAll("main > div").forEach((el) => el.classList.add("__bp_contentGrid"));
    root.querySelectorAll("article img").forEach((img) => img.classList.add("__bp_postImage"));
  });
})();
