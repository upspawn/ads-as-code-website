import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { CodeExample } from "@/components/CodeExample";
import { CliReference } from "@/components/CliReference";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <CodeExample />
      <CliReference />
    </main>
  );
}
