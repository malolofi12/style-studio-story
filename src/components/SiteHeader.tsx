import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Index" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="font-mono text-sm tracking-widest text-foreground hover:text-primary transition-colors">
          ◆ DEV.PORTFOLIO
        </Link>
        <nav className="flex items-center gap-1 md:gap-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-xs md:text-sm font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "px-3 py-2 text-xs md:text-sm font-mono uppercase tracking-wider text-primary" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 mt-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="font-mono text-xs text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} — CRAFTED IN THE DARK
        </p>
        <div className="flex gap-6 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          <a href="https://github.com" className="hover:text-primary transition-colors">GitHub</a>
          <a href="https://linkedin.com" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="https://twitter.com" className="hover:text-primary transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}