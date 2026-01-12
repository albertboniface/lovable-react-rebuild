import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { X } from "lucide-react";

// Import gallery images
import exteriorGarden from "@/assets/gallery/exterior-garden.jpg";
import poolArea from "@/assets/gallery/pool-area.jpg";
import livingRoom from "@/assets/gallery/living-room.jpg";
import diningArea from "@/assets/gallery/dining-area.jpg";
import suiteBedroom from "@/assets/gallery/suite-bedroom.jpg";
import suiteBathroom from "@/assets/gallery/suite-bathroom.jpg";
import loungeArea from "@/assets/gallery/lounge-area.jpg";
import kitchen from "@/assets/gallery/kitchen.jpg";
import barArea from "@/assets/gallery/bar-area.jpg";
import rooftop from "@/assets/gallery/rooftop.jpg";
import gamingRoom from "@/assets/gallery/gaming-room.jpg";
import boardroom from "@/assets/gallery/boardroom.jpg";
import gym from "@/assets/gallery/gym.jpg";
import exteriorFront from "@/assets/gallery/exterior-front.jpg";
import bedroomDetail from "@/assets/gallery/bedroom-detail.jpg";

const galleryImages = [
  { src: exteriorGarden, alt: "Exterior Garden View", category: "Exterior" },
  { src: poolArea, alt: "Pool Area", category: "Exterior" },
  { src: exteriorFront, alt: "Front Entrance", category: "Exterior" },
  { src: livingRoom, alt: "Living Room", category: "Living Spaces" },
  { src: loungeArea, alt: "Lounge Area", category: "Living Spaces" },
  { src: diningArea, alt: "Dining Area", category: "Living Spaces" },
  { src: kitchen, alt: "Modern Kitchen", category: "Living Spaces" },
  { src: suiteBedroom, alt: "Suite Bedroom", category: "Suites" },
  { src: bedroomDetail, alt: "Bedroom Details", category: "Suites" },
  { src: suiteBathroom, alt: "Suite Bathroom", category: "Suites" },
  { src: barArea, alt: "Bar Area", category: "Amenities" },
  { src: gamingRoom, alt: "Gaming Room", category: "Amenities" },
  { src: boardroom, alt: "Boardroom", category: "Amenities" },
  { src: gym, alt: "Fitness Gym", category: "Amenities" },
  { src: rooftop, alt: "Rooftop Barbecue", category: "Amenities" },
];

const categories = ["All", "Exterior", "Living Spaces", "Suites", "Amenities"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

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

      {/* Filter Tabs */}
      <section className="py-8 bg-cream border-b border-forest/10">
        <div className="container-luxury mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-body text-sm tracking-wide transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary-green text-cream"
                    : "bg-soft-green/30 text-forest hover:bg-soft-green/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-cream">
        <div className="container-luxury mx-auto px-6 lg:px-12">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
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
                    <p className="text-gold-accent font-body text-xs tracking-wider uppercase mb-1">
                      {image.category}
                    </p>
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
                <p className="text-gold-accent font-body text-sm tracking-wider uppercase mb-1">
                  {selectedImage.category}
                </p>
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
