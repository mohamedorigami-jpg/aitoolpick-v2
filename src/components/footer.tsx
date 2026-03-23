import Link from "next/link";

/**
 * Footer — site-wide footer with logo, links, affiliate disclosure, and copyright.
 */
export function Footer() {
  return (
    <footer className="border-t border-border-color bg-card/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-bold text-foreground">
              AI<span className="text-accent">ToolPick</span>
            </Link>
            <p className="text-muted text-sm mt-3 max-w-sm leading-relaxed">
              Honest, hands-on reviews of the best AI tools. We test every tool
              ourselves so you don&apos;t have to waste time or money.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Reviews", href: "/" },
                { label: "Best Tools", href: "/best-tools" },
                { label: "About", href: "/about" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Categories
            </h4>
            <ul className="space-y-2">
              {["Writing", "Images", "Video", "SEO", "Coding", "Productivity"].map(
                (cat) => (
                  <li key={cat}>
                    <Link
                      href="/best-tools"
                      className="text-muted hover:text-foreground text-sm transition-colors"
                    >
                      {cat}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border-color mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} AIToolPick. All rights reserved.
          </p>
          <p className="text-xs text-muted text-center md:text-right max-w-lg">
            <strong>Affiliate Disclosure:</strong> Some links on this site are
            affiliate links. We may earn a commission if you make a purchase at
            no extra cost to you. This does not influence our reviews.
          </p>
        </div>
      </div>
    </footer>
  );
}
