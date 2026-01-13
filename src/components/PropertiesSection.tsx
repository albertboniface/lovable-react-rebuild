import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const properties = [
  {
    name: "Unreal Homes",
    location: "Dar es Salaam",
    href: "https://unrealhomes.co.tz/",
    external: true,
  },
  {
    name: "Staycation Villas",
    location: "Dodoma",
    href: "https://staycationvilla.co.tz/",
    external: true,
  },
  {
    name: "Maison Luxe",
    location: "Dodoma",
    href: "https://maisonluxe.co.tz/",
    external: true,
  },
  {
    name: "Crest Woods",
    location: "Dar es Salaam",
    href: "/",
    external: false,
  },
];

export const PropertiesSection = () => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });

  const handleExploreProperties = () => {
    window.open("https://whistlingwoods.co.tz/", "_blank");
  };

  return (
    <section className="section-padding bg-forest">
      <div className="container-luxury mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-gold-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
            Our Portfolio
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-cream mb-6">
            Properties We Manage
          </h2>
          <p className="text-cream/60 max-w-2xl mx-auto font-body mb-8">
            Discover our collection of premium vacation properties across Tanzania.
          </p>
          <Button variant="hero" size="lg" onClick={handleExploreProperties}>
            Explore Our Properties
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {properties.map((property, index) => {
            const cardRef = useRef(null);
            const isCardInView = useInView(cardRef, { once: true, margin: "-50px" });

            return (
              <motion.a
                ref={cardRef}
                key={property.name}
                href={property.href}
                target={property.external ? "_blank" : "_self"}
                rel={property.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 40 }}
                animate={isCardInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-8 bg-gradient-to-br from-primary-green/20 to-primary-green/10 rounded-sm border border-gold-accent/20 hover:border-gold-accent/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-elevated"
              >
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  {property.external && <ExternalLink className="w-4 h-4 text-gold-accent" />}
                </div>
                
                <h3 className="font-display text-xl text-cream mb-3 group-hover:text-gold-accent transition-colors">
                  {property.name}
                </h3>
                
                <div className="flex items-center gap-2 text-cream/50">
                  <MapPin className="w-4 h-4 text-gold-accent" />
                  <span className="font-body text-sm">{property.location}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-accent to-gold-accent-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-sm" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
