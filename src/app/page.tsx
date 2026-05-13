import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import VehicleShowcase from "@/components/VehicleShowcase";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <HowItWorks />
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <VehicleShowcase />
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <Pricing />
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <Reviews />
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <Location />
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <FAQ />
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <Footer />
      </main>
    </>
  );
}
