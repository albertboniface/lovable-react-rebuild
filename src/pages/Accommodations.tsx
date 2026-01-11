import { Navigation } from "@/components/Navigation";
import { AccommodationsSection } from "@/components/AccommodationsSection";
import { Footer } from "@/components/Footer";

const Accommodations = () => {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <div className="pt-24">
        <AccommodationsSection />
      </div>
      <Footer />
    </main>
  );
};

export default Accommodations;
