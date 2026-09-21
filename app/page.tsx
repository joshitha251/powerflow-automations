import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Foundation from "@/components/Foundation";
import Approach from "@/components/Approach";
import Results from "@/components/Results";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ElevenLabsWidget from "@/components/ElevenLabsWidget";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Foundation />
      <Approach />
      <Results />
      <Contact />
      <Footer />

      <div className="fixed bottom-4 right-4 z-50">
        <ElevenLabsWidget />
      </div>
    </main>
  );
}
