import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AmenitiesSection } from "@/components/AmenitiesSection";
import { AccommodationsSection } from "@/components/AccommodationsSection";
import { GallerySection } from "@/components/GallerySection";
import { BookingCTA } from "@/components/BookingCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AmenitiesSection />
      <AccommodationsSection />
      <GallerySection />
      <BookingCTA />
      <Footer />
    </main>
  );
};

export default Index;
