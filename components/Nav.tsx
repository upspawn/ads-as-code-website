export function Nav() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-5 max-w-6xl mx-auto">
      <a href="/" className="font-heading text-xl font-bold tracking-tight">
        ads-as-code
      </a>
      <div className="flex items-center gap-6">
        <a
          href="https://github.com/upspawn/ads-as-code"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted hover:text-text transition-colors text-sm font-medium"
        >
          GitHub
        </a>
        <a
          href="https://github.com/upspawn/ads-as-code/blob/main/docs/getting-started.md"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent-hover transition-colors"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}
