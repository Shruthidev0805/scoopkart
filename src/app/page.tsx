import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Randomizer from "@/components/sections/Randomizer";
import Pricing from "@/components/sections/Pricing";
import SocialProof from "@/components/sections/SocialProof";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-midnight">
      <Navbar />
      <Hero />
      <Randomizer />
      <Pricing />
      <SocialProof />
      <FAQ />
    </main>
  );
}
