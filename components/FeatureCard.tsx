import type { ReactNode } from "react";

export function FeatureCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <h3 className="font-heading text-xl font-bold">{title}</h3>
      <p className="text-text-muted text-base leading-relaxed">{children}</p>
    </div>
  );
}
