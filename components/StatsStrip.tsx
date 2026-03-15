import { stats } from "@/lib/snippets/homepage";

export function StatsStrip() {
  return (
    <div className="border-y border-code-border py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-bold text-accent">
                {stat.value}
              </div>
              <div className="text-text-muted text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
