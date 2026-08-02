import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SixStepsSection from "@/components/SixStepsSection";
import BuiltForNigerianBusinesses from "@/components/BuiltForNigerianBusinesses";
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
        <SixStepsSection />
        <BuiltForNigerianBusinesses />
        <HowToOrderSection />
        <CoverageMapSection />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}
