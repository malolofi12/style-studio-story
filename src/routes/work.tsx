import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Experience — Mohammed Alolofi" },
      { name: "description", content: "Professional experience of Mohammed Alolofi as System Administrator and IT Support across financial services and broadcast." },
      { property: "og:title", content: "Experience — Mohammed Alolofi" },
      { property: "og:description", content: "System administration and IT support experience." },
    ],
  }),
  component: WorkPage,
});

const projects = [
  {
    year: "Sep 2023 → Present",
    role: "System Administrator & IT Support",
    title: "Pure Money Exchange",
    stack: ["Windows Server", "Active Directory", "VMware", "Veeam"],
    description:
      "Administer Windows Server and Active Directory across a multi-branch financial services environment (30–50 users, 7+ servers). Manage domain users, permissions, and OUs. Maintain VMware virtual machines, monitor backup jobs, verify restores, and provide Level 2/3 technical support across branches.",
  },
  {
    year: "Jan 2023 → Dec 2023",
    role: "IT Support & Administrative Officer",
    title: "Broadcast Academy",
    stack: ["Networking", "Surveillance", "Support"],
    description:
      "Provided IT support for internal systems and network infrastructure. Maintained surveillance systems and the internal network, and supported website content and administrative operations.",
  },
];

const certifications = [
  "Google IT Support Professional Certificate",
  "Foundations of Cybersecurity — Google",
  "SQL — DataCamp",
];

function WorkPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
      <header className="mb-20 max-w-3xl">
        <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-4">Index — 002</p>
        <h1 className="font-serif text-5xl md:text-7xl tracking-tight leading-[0.95]">
          Experience, in <span className="italic text-primary">order</span>.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl">
          A reverse-chronological log of roles and the systems I've kept alive. Most recent at the top.
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

      <section className="mt-24">
        <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
          Certifications
        </h2>
        <ul className="grid sm:grid-cols-2 gap-px bg-border border border-border rounded-md overflow-hidden">
          {certifications.map((c) => (
            <li key={c} className="bg-background p-6 font-serif text-xl text-foreground">
              <span className="text-primary mr-3">◆</span>{c}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}