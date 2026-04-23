import { createFileRoute, Link } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohammed Alolofi — System Administrator" },
      { name: "description", content: "System Administrator and IT Infrastructure Engineer with experience in Windows Server, Active Directory, VMware, and backup & recovery for financial services." },
      { property: "og:title", content: "Mohammed Alolofi — System Administrator" },
      { property: "og:description", content: "System Administrator and IT Infrastructure Engineer." },
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
              System Administrator · Available
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-foreground">
              Keeping critical<br />
              <span className="italic text-primary">infrastructure</span>
              <br />running quietly.
            </h1>
            <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              I'm Mohammed Alolofi — a System Administrator with hands-on
              experience in Windows Server, Active Directory, VMware, and
              backup &amp; recovery across multi-branch financial services
              environments.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/work"
                className="group inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-md font-mono text-sm uppercase tracking-wider hover:opacity-90 transition-all shadow-[var(--shadow-glow)]"
              >
                View Experience
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
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3">01 — Focus</p>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight">What I do</h2>
          </div>
          <Link to="/work" className="hidden md:inline font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
            Full experience →
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
              <span>Windows Server</span><span className="text-primary">◆</span>
              <span>Active Directory</span><span className="text-primary">◆</span>
              <span>VMware ESXi</span><span className="text-primary">◆</span>
              <span>Veeam Backup</span><span className="text-primary">◆</span>
              <span>Sophos Firewall</span><span className="text-primary">◆</span>
              <span>Mikrotik</span><span className="text-primary">◆</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const previewProjects = [
  {
    year: "Core",
    tag: "Systems",
    title: "Windows Server & AD",
    description: "Administer Windows Server, Active Directory, DNS and DHCP. Manage domain users, permissions, and organizational units across multi-branch environments.",
  },
  {
    year: "Core",
    tag: "Virtualization",
    title: "VMware ESXi / vSphere",
    description: "Maintain virtual machines, monitor system performance, and ensure uptime across 7+ servers serving 30–50 users.",
  },
  {
    year: "Core",
    tag: "Backup & DR",
    title: "Veeam Backup & Restore",
    description: "Monitor scheduled backup jobs, verify restore operations, and maintain disaster recovery readiness for financial services data.",
  },
  {
    year: "Core",
    tag: "Network & Security",
    title: "Mikrotik · Sophos · VLAN",
    description: "Maintain LAN/WAN connectivity across branches. Configure VLANs, manage Mikrotik routers and Sophos firewalls, enforce access control policies.",
  },
];
