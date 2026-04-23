import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mohammed Alolofi — System Administrator" },
      { name: "description", content: "Portfolio of Mohammed Alolofi, System Administrator and IT Infrastructure Engineer specializing in Windows Server, VMware, and backup & recovery." },
      { name: "author", content: "Mohammed Alolofi" },
      { property: "og:title", content: "Mohammed Alolofi — System Administrator" },
      { property: "og:description", content: "Portfolio of Mohammed Alolofi, System Administrator and IT Infrastructure Engineer specializing in Windows Server, VMware, and backup & recovery." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Mohammed Alolofi — System Administrator" },
      { name: "twitter:description", content: "Portfolio of Mohammed Alolofi, System Administrator and IT Infrastructure Engineer specializing in Windows Server, VMware, and backup & recovery." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1e18de9c-138d-46fc-8b97-d65a91abade2/id-preview-5264d02b--a967e65d-2c5e-4dee-b605-db6d94fbe07d.lovable.app-1776957800260.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1e18de9c-138d-46fc-8b97-d65a91abade2/id-preview-5264d02b--a967e65d-2c5e-4dee-b605-db6d94fbe07d.lovable.app-1776957800260.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased">
      <SiteHeader />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
