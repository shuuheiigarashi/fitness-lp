import HeroSection from "./components/HeroSection";
import ConceptSection from "./components/ConceptSection";
import ResultsSection from "./components/ResultsSection";
import TrainerSection from "./components/TrainerSection";
import PlansSection from "./components/PlansSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function FitnessLP() {
  return (
    <main className="bg-[#0D0D0D] text-white font-sans overflow-hidden">
      <HeroSection />
      <ConceptSection />
      <ResultsSection />
      <TrainerSection />
      <PlansSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
