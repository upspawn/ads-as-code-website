import Link from "next/link";
import { FadeIn } from "./FadeIn";

export function HomeFeatureCard({
  title,
  description,
  href,
  delay = 0,
}: {
  title: string;
  description: string;
  href: string;
  delay?: number;
}) {
  return (
    <FadeIn delay={delay}>
      <Link
        href={href}
        className="group block border border-code-border rounded-xl p-6 bg-bg hover:border-accent transition-colors duration-200"
      >
        <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-200">
          {title}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed">{description}</p>
      </Link>
    </FadeIn>
  );
}
