import { HeroProfessional } from "@/components/HeroProfessional";
import { AboutProfessional } from "@/components/AboutProfessional";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { CasesPreview } from "@/components/CasesPreview";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroProfessional />
      <AboutProfessional />
      <Services />
      <Process />
      <CasesPreview />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
