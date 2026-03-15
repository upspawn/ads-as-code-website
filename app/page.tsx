import { HomeHero } from "@/components/HomeHero";
import { HomeHowItWorks } from "@/components/HomeHowItWorks";
import { HomeFeatureCard } from "@/components/HomeFeatureCard";
import { StatsStrip } from "@/components/StatsStrip";
import { FadeIn } from "@/components/FadeIn";
import { featureCards } from "@/lib/snippets/homepage";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeHowItWorks />
      <StatsStrip />
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">
            Everything ads should be.
          </h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featureCards.map((card, i) => (
            <HomeFeatureCard
              key={card.href}
              title={card.title}
              description={card.description}
              href={card.href}
              delay={i * 40}
            />
          ))}
        </div>
      </section>
    </>
  );
}
