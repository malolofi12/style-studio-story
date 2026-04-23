import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mohammed Alolofi" },
      { name: "description", content: "About Mohammed Alolofi — System Administrator and IT Infrastructure Engineer." },
      { property: "og:title", content: "About — Mohammed Alolofi" },
      { property: "og:description", content: "System Administrator and IT Infrastructure Engineer." },
      { property: "og:image", content: portrait },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "Sep 2023 →", title: "System Administrator, Pure Money Exchange", note: "Windows Server, AD, VMware, Veeam across multi-branch financial services." },
  { year: "Jan — Dec 2023", title: "IT Support, Broadcast Academy", note: "Internal network, surveillance systems, and admin operations." },
  { year: "2023", title: "BSc, ICT — University of Saba Region", note: "GPA 88.91% (Very Good)." },
  { year: "Cert", title: "Google IT Support Professional", note: "Foundations of Cybersecurity (Google) · SQL (DataCamp)." },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
      <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
        <div className="md:col-span-5 md:sticky md:top-28">
          <div className="aspect-[4/5] overflow-hidden rounded-md border border-border bg-card">
            <img
              src={portrait}
              alt="Portrait of Mohammed Alolofi"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full h-full object-cover grayscale contrast-110"
            />
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-4">
            Mohammed Alolofi · System Administrator
          </p>
        </div>

        <div className="md:col-span-7">
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-4">About — 003</p>
          <h1 className="font-serif text-5xl md:text-6xl tracking-tight leading-[1.0]">
            I keep systems<br />
            <span className="italic text-primary">stable</span>, quiet, and ready.
          </h1>

          <div className="mt-10 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a System Administrator with experience running infrastructure
              for financial services environments — Windows Server, Active
              Directory, VMware virtual machines, and backup &amp; recovery
              operations across multi-branch operations of 30–50 users and 7+
              servers.
            </p>
            <p>
              I care about uptime, clean documentation, verified backups, and
              firewalls that do exactly what they're supposed to. My background
              also covers networking (LAN/WAN, VLAN, Mikrotik, Sophos) and
              cybersecurity fundamentals.
            </p>
            <p>
              I hold a Bachelor's degree in ICT from the University of Saba
              Region (GPA 88.91%) and certifications from Google and DataCamp
              in IT Support, Cybersecurity, and SQL.
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