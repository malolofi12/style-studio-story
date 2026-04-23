import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Developer Portfolio" },
      { name: "description", content: "A selection of products, libraries and experiments built over the past several years." },
      { property: "og:title", content: "Work — Developer Portfolio" },
      { property: "og:description", content: "A selection of products, libraries and experiments." },
    ],
  }),
  component: WorkPage,
});

const projects = [
  { year: "2024", role: "Founding Engineer", title: "Lumen", stack: ["Rust", "WASM", "ClickHouse"], description: "Edge-first observability with a sub-millisecond ingestion path. Designed the columnar storage layer and authored the public Rust SDK." },
  { year: "2024", role: "Tech Lead", title: "Atlas Studio", stack: ["TypeScript", "React", "Postgres"], description: "A design surface for AI workflows. Drove architecture, hiring, and the move from prototype to a paid public beta." },
  { year: "2023", role: "Author", title: "Halo Query", stack: ["TypeScript", "SQL", "DX"], description: "Streaming, type-safe database client built around inference. 8k stars, used in production at three Series-B startups." },
  { year: "2023", role: "Engineer", title: "Pierwise", stack: ["Go", "gRPC", "Kafka"], description: "Real-time payments routing for a fintech serving 200k merchants. Reduced p99 latency by 62% over the previous system." },
  { year: "2022", role: "Solo", title: "Field Notes", stack: ["Local-first", "CRDT", "Swift"], description: "A writing tool exploring slow computing. Released as a free, open companion app." },
  { year: "2022", role: "Contractor", title: "Northwind Console", stack: ["Next.js", "tRPC"], description: "Internal admin platform replacing a 9-year-old PHP system. Delivered in 11 weeks with two engineers." },
];

function WorkPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
      <header className="mb-20 max-w-3xl">
        <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-4">Index — 002</p>
        <h1 className="font-serif text-5xl md:text-7xl tracking-tight leading-[0.95]">
          Work, in <span className="italic text-primary">order</span>.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl">
          A reverse-chronological log of things I've shipped. Most recent at the top.
        </p>
      </header>

      <ol className="border-t border-border">
        {projects.map((p, i) => (
          <li key={p.title} className="group border-b border-border">
            <div className="grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 transition-colors hover:bg-card/40 px-2 md:px-4 -mx-2 md:-mx-4">
              <div className="col-span-2 md:col-span-1 font-mono text-xs text-muted-foreground pt-2">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="col-span-10 md:col-span-3">
                <p className="font-mono text-xs tracking-widest text-muted-foreground mb-2">{p.year}</p>
                <h2 className="font-serif text-3xl md:text-4xl tracking-tight group-hover:text-primary transition-colors">
                  {p.title}
                </h2>
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mt-2">{p.role}</p>
              </div>
              <div className="col-span-12 md:col-span-6 text-muted-foreground leading-relaxed">
                {p.description}
              </div>
              <div className="col-span-12 md:col-span-2 flex md:flex-col flex-wrap gap-2 md:items-end">
                {p.stack.map((s) => (
                  <span key={s} className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground border border-border px-2 py-1 rounded">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}