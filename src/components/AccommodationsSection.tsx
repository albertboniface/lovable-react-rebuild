import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Maximize, Bed } from "lucide-react";
import roomSuite from "@/assets/room-suite.jpg";
import villaExterior from "@/assets/villa-exterior.jpg";
import spaImage from "@/assets/spa.jpg";

const accommodations = [
  {
    image: roomSuite,
    name: "Garden Suite",
    description:
      "Immerse yourself in nature with floor-to-ceiling windows and private terraces overlooking lush tropical gardens.",
    guests: 2,
    size: "75 m²",
    beds: "King",
    price: "From $650/night",
  },
  {
    image: villaExterior,
    name: "Ocean Villa",
    description:
      "Experience ultimate privacy with your own infinity pool, butler service, and breathtaking ocean panoramas.",
    guests: 4,
    size: "180 m²",
    beds: "2 King",
    price: "From $1,400/night",
  },
  {
    image: spaImage,
    name: "Presidential Suite",
    description:
      "The pinnacle of luxury featuring exclusive amenities, private spa, and dedicated concierge service.",
    guests: 6,
    size: "350 m²",
    beds: "3 King",
    price: "From $3,200/night",
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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-sm mb-6">
        <img
          src={accommodation.image}
          alt={accommodation.name}
          className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500" />
        <div className="absolute top-4 right-4 bg-gold text-charcoal px-4 py-2 text-sm font-semibold tracking-wide">
          {accommodation.price}
        </div>
      </div>

      <h3 className="font-display text-2xl text-charcoal mb-3">
        {accommodation.name}
      </h3>
      <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5">
        {accommodation.description}
      </p>

      <div className="flex items-center gap-6 text-sm text-charcoal-light mb-6">
        <span className="flex items-center gap-2">
          <Users className="w-4 h-4 text-gold" />
          {accommodation.guests} Guests
        </span>
        <span className="flex items-center gap-2">
          <Maximize className="w-4 h-4 text-gold" />
          {accommodation.size}
        </span>
        <span className="flex items-center gap-2">
          <Bed className="w-4 h-4 text-gold" />
          {accommodation.beds}
        </span>
      </div>

      <Button
        variant="outline"
        className="group/btn w-full justify-between"
      >
        View Details
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
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
            Your Sanctuary Awaits
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-charcoal mb-6">
            Exceptional Accommodations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Each residence is a masterpiece of design, blending contemporary
            elegance with natural beauty.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
