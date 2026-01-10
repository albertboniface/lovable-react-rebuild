import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import heroVilla from "@/assets/hero-villa.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import villaExterior from "@/assets/villa-exterior.jpg";
import spaImage from "@/assets/spa.jpg";

const galleryImages = [
  { src: heroVilla, alt: "Luxury villa living room", span: "col-span-2 row-span-2" },
  { src: roomSuite, alt: "Elegant bedroom suite", span: "col-span-1 row-span-1" },
  { src: villaExterior, alt: "Villa with infinity pool", span: "col-span-1 row-span-2" },
  { src: spaImage, alt: "Tranquil spa treatment room", span: "col-span-1 row-span-1" },
  { src: heroVilla, alt: "Resort interior", span: "col-span-1 row-span-1" },
];

export const GallerySection = () => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding bg-charcoal">
      <div className="container-luxury mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
            Visual Journey
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-cream mb-6">
            Gallery
          </h2>
          <p className="text-cream/60 max-w-2xl mx-auto font-body">
            Discover the beauty and elegance that awaits you at our exclusive resort.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, index) => {
            const ref = useRef(null);
            const isImageInView = useInView(ref, { once: true, margin: "-50px" });

            return (
              <motion.div
                ref={ref}
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isImageInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${image.span} relative overflow-hidden rounded-sm cursor-pointer`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-gold/0 transition-colors duration-500 ${
                    hoveredIndex === index ? "bg-gold/20" : ""
                  }`}
                />
                <div
                  className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/80 to-transparent transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="text-cream font-body text-sm">{image.alt}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
