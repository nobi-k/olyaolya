import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { DesignCase } from "@/components/DesignCase";
import { LoveStory } from "@/components/LoveStory";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <DesignCase />
      <LoveStory />
      <Footer />
    </main>
  );
}
