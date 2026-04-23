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
          ◆ M.ALOLOFI
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
          © {new Date().getFullYear()} — MOHAMMED ALOLOFI · SYSTEM ADMINISTRATOR
        </p>
        <div className="flex gap-6 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          <a href="mailto:malolofi12@gmail.com" className="hover:text-primary transition-colors">Email</a>
          <a href="tel:+967775151839" className="hover:text-primary transition-colors">+967 775 151 839</a>
        </div>
      </div>
    </footer>
  );
}