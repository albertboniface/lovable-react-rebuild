import { Navigation } from "@/components/Navigation";
import { GallerySection } from "@/components/GallerySection";
import { Footer } from "@/components/Footer";

const Gallery = () => {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <div className="pt-24">
        <GallerySection />
      </div>
      <Footer />
    </main>
  );
};

export default Gallery;
