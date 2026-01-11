import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Sparkles,
  Dumbbell,
  Wifi,
  Wine,
  Gamepad2,
  Flame,
  Users,
} from "lucide-react";

const amenities = [
  {
    icon: Sparkles,
    title: "Luxury Spa",
    description: "Rejuvenating treatments with ancient healing traditions",
  },
  {
    icon: Dumbbell,
    title: "Gym",
    description: "State-of-the-art equipment with personal training",
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Stay connected with premium connectivity",
  },
  {
    icon: Wine,
    title: "Bar",
    description: "Curated collection of fine drinks and cocktails",
  },
  {
    icon: Gamepad2,
    title: "Gaming Room",
    description: "Entertainment hub with latest gaming consoles and games",
  },
  {
    icon: Flame,
    title: "Rooftop Barbecue",
    description: "Stunning rooftop barbecue area with panoramic views",
  },
  {
    icon: Users,
    title: "Boardroom",
    description: "Professional meeting space for business and events",
  },
];

const AmenityCard = ({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: typeof Sparkles;
  title: string;
  description: string;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group p-8 bg-cream rounded-sm border border-soft-green/50 hover:shadow-elevated hover:border-accent-green/30 transition-all duration-500 hover:-translate-y-1"
    >
      <div className="w-14 h-14 rounded-full bg-primary-green/10 flex items-center justify-center mb-6 group-hover:bg-gold-accent/20 transition-colors">
        <Icon className="w-7 h-7 text-primary-green group-hover:text-gold-accent transition-colors" />
      </div>
      <h3 className="font-display text-xl text-forest mb-3">{title}</h3>
      <p className="text-muted-foreground font-body text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export const AmenitiesSection = () => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section id="amenities" className="section-padding bg-soft-green/30">
      <div className="container-luxury mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent-green font-body text-sm tracking-[0.3em] uppercase mb-4">
            Experience Excellence
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-forest mb-6">
            World-Class Amenities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Every detail has been thoughtfully curated to ensure an
            unforgettable experience of luxury and comfort.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <AmenityCard key={amenity.title} {...amenity} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
