import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Developer Portfolio" },
      { name: "description", content: "Software engineer focused on developer tools, infrastructure, and product craft." },
      { property: "og:title", content: "About — Developer Portfolio" },
      { property: "og:description", content: "Software engineer focused on developer tools, infrastructure, and product craft." },
      { property: "og:image", content: portrait },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "2024 →", title: "Founding Engineer, Lumen", note: "Edge observability." },
  { year: "2022 — 2024", title: "Tech Lead, Northstar", note: "Scaled platform team 3 → 11." },
  { year: "2020 — 2022", title: "Senior Engineer, Helio", note: "Real-time data infrastructure." },
  { year: "2018 — 2020", title: "Engineer, Studio Black", note: "Product engineering for design tools." },
  { year: "2017", title: "BSc, Computer Science", note: "Distributed systems thesis." },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
      <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
        <div className="md:col-span-5 md:sticky md:top-28">
          <div className="aspect-[4/5] overflow-hidden rounded-md border border-border bg-card">
            <img
              src={portrait}
              alt="Portrait"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full h-full object-cover grayscale contrast-110"
            />
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-4">
            Photograph · Studio, 2024
          </p>
        </div>

        <div className="md:col-span-7">
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-4">About — 003</p>
          <h1 className="font-serif text-5xl md:text-6xl tracking-tight leading-[1.0]">
            I write software the way<br />
            <span className="italic text-primary">a craftsman</span> sands wood.
          </h1>

          <div className="mt-10 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Eight years building products and the systems beneath them. My
              focus sits where developer experience, infrastructure, and
              interface design quietly overlap.
            </p>
            <p>
              I care about latency budgets, well-named functions, and pages
              that load before you notice. I prefer small teams, clear
              writing, and APIs that reveal themselves slowly.
            </p>
            <p>
              When I'm away from a screen — film photography, long runs, and
              the eternal renovation of an old apartment.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
              Trajectory
            </h2>
            <ol className="space-y-px">
              {timeline.map((t) => (
                <li key={t.title} className="grid grid-cols-12 gap-4 py-4 border-b border-border">
                  <span className="col-span-4 font-mono text-xs tracking-wider text-muted-foreground pt-1">
                    {t.year}
                  </span>
                  <div className="col-span-8">
                    <p className="font-serif text-xl text-foreground">{t.title}</p>
                    <p className="text-sm text-muted-foreground mt-1">{t.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}