import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { BookingCTA } from "@/components/BookingCTA";
import { MapSection } from "@/components/MapSection";
import { PropertiesSection } from "@/components/PropertiesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <BookingCTA />
      <MapSection />
      <PropertiesSection />
      <Footer />
    </main>
  );
};

export default Index;
