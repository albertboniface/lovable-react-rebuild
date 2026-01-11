import { Navigation } from "@/components/Navigation";
import { AmenitiesSection } from "@/components/AmenitiesSection";
import { Footer } from "@/components/Footer";

const Amenities = () => {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <div className="pt-24">
        <AmenitiesSection />
      </div>
      <Footer />
    </main>
  );
};

export default Amenities;
