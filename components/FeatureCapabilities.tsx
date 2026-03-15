import { FadeIn } from "./FadeIn";

type CapabilityItem = {
  title: string;
  description: string;
};

export function FeatureCapabilities({
  heading,
  items,
}: {
  heading?: string;
  items: CapabilityItem[];
}) {
  return (
    <section className="border-t border-code-border px-6 md:px-12 py-16 md:py-24 max-w-6xl mx-auto">
      {heading && (
        <FadeIn>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-12">
            {heading}
          </h2>
        </FadeIn>
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {items.map((item, i) => (
          <FadeIn key={i} delay={i * 50}>
            <div>
              <h3 className="font-bold text-base mb-1">{item.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
