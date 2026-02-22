import { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { DesignCase } from "@/components/DesignCase";
import { ResumePreview } from "@/components/ResumePreview";
import { CasesPreview } from "@/components/CasesPreview";
import { LoveStory } from "@/components/LoveStory";
import { Footer } from "@/components/Footer";

export default function Love() {
  useEffect(() => {
    document.title = "Любовь — Ольга Николаевна";
  }, []);

  return (
    <main id="main-content" className="min-h-screen bg-white">
      <Hero />
      <About />
      <CasesPreview />
      <DesignCase />
      <ResumePreview />
      <LoveStory />
      <Footer />
    </main>
  );
}
