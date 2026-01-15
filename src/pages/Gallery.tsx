import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { X } from "lucide-react";

// Import all gallery images from Pixieset
import cw01 from "@/assets/gallery/cw-01.jpg";
import cw02 from "@/assets/gallery/cw-02.jpg";
import cw03 from "@/assets/gallery/cw-03.jpg";
import cw04 from "@/assets/gallery/cw-04.jpg";
import cw05 from "@/assets/gallery/cw-05.jpg";
import cw06 from "@/assets/gallery/cw-06.jpg";
import cw07 from "@/assets/gallery/cw-07.jpg";
import cw08 from "@/assets/gallery/cw-08.jpg";
import cw09 from "@/assets/gallery/cw-09.jpg";
import cw10 from "@/assets/gallery/cw-10.jpg";
import cw11 from "@/assets/gallery/cw-11.jpg";
import cw12 from "@/assets/gallery/cw-12.jpg";
import cw13 from "@/assets/gallery/cw-13.jpg";
import cw14 from "@/assets/gallery/cw-14.jpg";
import cw15 from "@/assets/gallery/cw-15.jpg";
import cw16 from "@/assets/gallery/cw-16.jpg";

const galleryImages = [
  { src: cw01, alt: "Crest Woods View 1", category: "All" },
  { src: cw02, alt: "Crest Woods View 2", category: "All" },
  { src: cw03, alt: "Crest Woods View 3", category: "All" },
  { src: cw04, alt: "Crest Woods View 4", category: "All" },
  { src: cw05, alt: "Crest Woods View 5", category: "All" },
  { src: cw06, alt: "Crest Woods View 6", category: "All" },
  { src: cw07, alt: "Crest Woods View 7", category: "All" },
  { src: cw08, alt: "Crest Woods View 8", category: "All" },
  { src: cw09, alt: "Crest Woods View 9", category: "All" },
  { src: cw10, alt: "Crest Woods View 10", category: "All" },
  { src: cw11, alt: "Crest Woods View 11", category: "All" },
  { src: cw12, alt: "Crest Woods View 12", category: "All" },
  { src: cw13, alt: "Crest Woods View 13", category: "All" },
  { src: cw14, alt: "Crest Woods View 14", category: "All" },
  { src: cw15, alt: "Crest Woods View 15", category: "All" },
  { src: cw16, alt: "Crest Woods View 16", category: "All" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <main className="overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary-green-dark to-forest">
        <div className="container-luxury mx-auto px-6 lg:px-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold-accent font-body text-sm tracking-[0.3em] uppercase mb-4"
          >
            Visual Journey
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-cream mb-6"
          >
            Our <span className="italic text-gold-accent-light">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cream/70 font-body text-lg max-w-2xl mx-auto"
          >
            Explore the beauty and elegance of Crest Woods through our curated collection of images
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-cream">
        <div className="container-luxury mx-auto px-6 lg:px-12">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-cream font-display text-xl">
                      {image.alt}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-forest/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-cream/70 hover:text-gold-accent transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <h3 className="text-cream font-display text-2xl">
                  {selectedImage.alt}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
};

export default Gallery;