import { createFileRoute, Link } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Developer Portfolio — Engineering with Craft" },
      { name: "description", content: "Selected work, writing and experiments by a software engineer who cares about details." },
      { property: "og:title", content: "Developer Portfolio — Engineering with Craft" },
      { property: "og:description", content: "Selected work, writing and experiments by a software engineer who cares about details." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden flex items-center">
        <div
          className="absolute inset-0 -z-10 opacity-80"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/40 to-background" />

        <div className="mx-auto max-w-7xl px-6 md:px-10 w-full">
          <div className="max-w-4xl">
            <p className="font-mono text-xs md:text-sm tracking-[0.3em] text-primary uppercase mb-6">
              Software Engineer · Available Q3
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-foreground">
              Building quiet,<br />
              <span className="italic text-primary">precise</span> software
              <br />for ambitious teams.
            </h1>
            <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              I design and engineer interfaces, infrastructure, and the
              connective tissue between them. Currently focused on developer
              tools and AI-native products.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/work"
                className="group inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-md font-mono text-sm uppercase tracking-wider hover:opacity-90 transition-all shadow-[var(--shadow-glow)]"
              >
                View Work
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-6 py-3 border border-border rounded-md font-mono text-sm uppercase tracking-wider text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.4em] text-muted-foreground uppercase">
          Scroll ↓
        </div>
      </section>

      {/* Selected work preview */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-end justify-between mb-16 border-b border-border pb-6">
          <div>
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3">01 — Selected</p>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight">Recent work</h2>
          </div>
          <Link to="/work" className="hidden md:inline font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
            All projects →
          </Link>
        </div>

        <div className="grid gap-px bg-border md:grid-cols-2">
          {previewProjects.map((p) => (
            <article key={p.title} className="group bg-background p-8 md:p-12 hover:bg-card transition-colors">
              <div className="flex items-start justify-between mb-8">
                <span className="font-mono text-xs tracking-widest text-muted-foreground">{p.year}</span>
                <span className="font-mono text-xs tracking-widest text-primary">{p.tag}</span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl tracking-tight mb-3 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">{p.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Marquee strip */}
      <section className="border-y border-border py-8 overflow-hidden bg-card/40">
        <div className="flex gap-12 font-serif text-2xl md:text-3xl italic text-muted-foreground whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12 shrink-0">
              <span>TypeScript</span><span className="text-primary">◆</span>
              <span>Rust</span><span className="text-primary">◆</span>
              <span>Distributed Systems</span><span className="text-primary">◆</span>
              <span>Design Engineering</span><span className="text-primary">◆</span>
              <span>AI Infrastructure</span><span className="text-primary">◆</span>
              <span>Product</span><span className="text-primary">◆</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const previewProjects = [
  {
    year: "2024",
    tag: "Infra · Open Source",
    title: "Lumen",
    description: "An edge-first observability layer with sub-millisecond ingestion. Adopted by 14k engineers in its first quarter.",
  },
  {
    year: "2024",
    tag: "Product · Lead",
    title: "Atlas Studio",
    description: "Design tool for AI workflows. Led architecture from prototype to public beta with a team of four.",
  },
  {
    year: "2023",
    tag: "Library",
    title: "Halo Query",
    description: "Type-safe, streaming database client for TypeScript. Built around inference-first ergonomics.",
  },
  {
    year: "2023",
    tag: "Experiment",
    title: "Field Notes",
    description: "A private writing tool exploring local-first sync, CRDTs, and a slower kind of computing.",
  },
];
