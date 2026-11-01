import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--bg)] px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-[800] leading-[1.02] tracking-tight text-[var(--text)]">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-[var(--text)]">Page not found</h2>
        <p className="mt-2 text-sm text-[var(--text-muted)]">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-[var(--bg)] shadow-[0_5px_0_var(--accent-deep)] shadow-[0_12px_30px_-8px_var(--accent-glow)] transition-all duration-250 active:translate-y-[3px] active:shadow-[0_2px_0_var(--accent-deep)]"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}