"use client";

import { useState } from "react";
import Link from "next/link";
import { featureGroups } from "./nav-data";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="p-2 -mr-2 text-text-muted hover:text-text transition-colors"
      >
        {open ? (
          /* X icon */
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          /* Hamburger icon */
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Full-width panel */}
      {open && (
        <div className="absolute left-0 right-0 top-full bg-bg border-b border-code-border z-50 px-6 py-6 shadow-md">
          {/* Feature groups */}
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">
              Features
            </p>
            <div className="space-y-5">
              {featureGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5">
                    {group.label}
                  </p>
                  <ul className="space-y-2 pl-2">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="text-sm text-text hover:text-accent transition-colors block"
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

          {/* Divider */}
          <div className="border-t border-code-border my-4" />

          {/* Top-level links */}
          <div className="space-y-3 mb-6">
            <Link
              href="/docs"
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-text-muted hover:text-text transition-colors"
            >
              Docs
            </Link>
            <a
              href="https://github.com/upspawn/ads-as-code"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-text-muted hover:text-text transition-colors"
            >
              GitHub
            </a>
          </div>

          <Link
            href="/docs/getting-started"
            onClick={() => setOpen(false)}
            className="block w-full text-center bg-accent text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-accent-hover transition-colors"
          >
            Get Started
          </Link>
        </div>
      )}
    </div>
  );
}
