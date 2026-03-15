"use client";

import { useState } from "react";
import Link from "next/link";
import { featureGroups } from "./nav-data";
import { MobileNav } from "./MobileNav";

// Re-export so consumers can import featureGroups from Nav
export { featureGroups };

export function Nav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="border-b border-code-border bg-bg">
      <div className="flex items-center justify-between px-6 md:px-12 py-4 max-w-6xl mx-auto relative">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading text-xl font-bold tracking-tight hover:text-accent transition-colors"
        >
          ads-as-code
        </Link>

        {/* Desktop nav — hidden on mobile */}
        <div className="hidden md:flex items-center gap-6">
          {/* Features dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium text-text-muted hover:text-text transition-colors py-1"
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              Features
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-150 ${dropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[420px] bg-bg border border-code-border rounded-xl shadow-lg z-50 p-5">
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  {featureGroups.map((group) => (
                    <div key={group.label}>
                      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
                        {group.label}
                      </p>
                      <ul className="space-y-1">
                        {group.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="text-sm text-text hover:text-accent transition-colors block py-0.5"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/docs"
            className="text-sm font-medium text-text-muted hover:text-text transition-colors"
          >
            Docs
          </Link>

          <a
            href="https://github.com/upspawn/ads-as-code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-text-muted hover:text-text transition-colors"
          >
            GitHub
          </a>

          <Link
            href="/docs/getting-started"
            className="bg-accent text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent-hover transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile nav — visible only on small screens */}
        <MobileNav />
      </div>
    </nav>
  );
}
