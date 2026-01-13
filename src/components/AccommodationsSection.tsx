import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Maximize, Bed, Star } from "lucide-react";
import executiveSuite from "@/assets/executive-suite.jpg";
import deluxeSuite from "@/assets/deluxe-suite.jpg";

const accommodations = [
  {
    image: executiveSuite,
    name: "Executive Suite",
    description:
      "Our premier accommodation offering unparalleled luxury with premium furnishings, spacious living areas, and exclusive amenities for the discerning guest.",
    guests: 2,
    size: "144 m²",
    beds: "King",
    price: "Premium",
    featured: true,
  },
  {
    image: deluxeSuite,
    name: "Deluxe Suite",
    description:
      "Elegant and comfortable suites featuring modern design, quality amenities, and all the essentials for a perfect stay.",
    guests: 2,
    size: "55 m²",
    beds: "King",
    price: "Standard",
    featured: false,
    count: 3,
  },
];

const AccommodationCard = ({
  accommodation,
  index,
}: {
  accommodation: (typeof accommodations)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleBookNow = () => {
    window.open("https://unrealhomes.co.tz/suites", "_blank");
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`group ${accommodation.featured ? 'lg:col-span-1' : 'lg:col-span-1'}`}
    >
      <div className="relative overflow-hidden rounded-sm mb-6">
        <img
          src={accommodation.image}
          alt={accommodation.name}
          className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary-green/0 group-hover:bg-primary-green/20 transition-colors duration-500" />
        
        {accommodation.featured && (
          <div className="absolute top-4 left-4 bg-gold-accent text-forest px-3 py-1 text-xs font-semibold tracking-wide rounded-sm flex items-center gap-1">
            <Star className="w-3 h-3" />
            Featured
          </div>
        )}
        
        <div className="absolute top-4 right-4 bg-primary-green text-cream px-4 py-2 text-sm font-semibold tracking-wide rounded-sm">
          {accommodation.price}
        </div>

        {'count' in accommodation && accommodation.count && (
          <div className="absolute bottom-4 left-4 bg-cream/90 text-forest px-3 py-1 text-xs font-semibold tracking-wide rounded-sm">
            {accommodation.count} Available
          </div>
        )}
      </div>

      <h3 className="font-display text-2xl text-forest mb-3">
        {accommodation.name}
      </h3>
      <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5">
        {accommodation.description}
      </p>

      <div className="flex items-center gap-6 text-sm text-forest-light mb-6">
        <span className="flex items-center gap-2">
          <Users className="w-4 h-4 text-accent-green" />
          {accommodation.guests} Guests
        </span>
        <span className="flex items-center gap-2">
          <Maximize className="w-4 h-4 text-accent-green" />
          {accommodation.size}
        </span>
        <span className="flex items-center gap-2">
          <Bed className="w-4 h-4 text-accent-green" />
          {accommodation.beds}
        </span>
      </div>

      <Button
        variant="outline"
        className="group/btn w-full justify-between"
        onClick={handleBookNow}
      >
        Book Now
        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
      </Button>
    </motion.div>
  );
};

export const AccommodationsSection = () => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section id="accommodations" className="section-padding bg-cream">
      <div className="container-luxury mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent-green font-body text-sm tracking-[0.3em] uppercase mb-4">
            Your Sanctuary Awaits
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-forest mb-6">
            Exceptional Accommodations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Choose from our carefully curated selection of suites, each designed
            for maximum comfort and luxury.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {accommodations.map((accommodation, index) => (
            <AccommodationCard
              key={accommodation.name}
              accommodation={accommodation}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
