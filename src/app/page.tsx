import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowToOrderSection from "@/components/HowToOrderSection";
import CoverageMapSection from "@/components/CoverageMapSection";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <main>
        <Hero />
        <HowToOrderSection />
        <CoverageMapSection />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}
