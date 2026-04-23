import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Developer Portfolio" },
      { name: "description", content: "Get in touch about consulting, full-time roles, or collaborations." },
      { property: "og:title", content: "Contact — Developer Portfolio" },
      { property: "og:description", content: "Get in touch about consulting, full-time roles, or collaborations." },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { label: "Email", value: "hello@yourdomain.dev", href: "mailto:hello@yourdomain.dev" },
  { label: "GitHub", value: "@yourhandle", href: "https://github.com" },
  { label: "LinkedIn", value: "in/yourhandle", href: "https://linkedin.com" },
  { label: "Signal", value: "On request", href: "#" },
];

function ContactPage() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-glow)" }} />

      <div className="mx-auto max-w-5xl px-6 md:px-10 py-20 md:py-28 w-full">
        <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-6">Contact — 004</p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95]">
          Let's make<br />
          <span className="italic text-primary">something good.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
          I'm currently open to selective consulting and a small number of
          full-time conversations. The fastest way to reach me is email.
        </p>

        <div className="mt-16 grid sm:grid-cols-2 gap-px bg-border border border-border rounded-md overflow-hidden">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="group bg-background p-6 md:p-8 hover:bg-card transition-colors flex items-start justify-between gap-6"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  {c.label}
                </p>
                <p className="font-serif text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors">
                  {c.value}
                </p>
              </div>
              <span className="font-mono text-primary text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </a>
          ))}
        </div>

        <p className="mt-12 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Based in Berlin · Working globally · CET
        </p>
      </div>
    </div>
  );
}